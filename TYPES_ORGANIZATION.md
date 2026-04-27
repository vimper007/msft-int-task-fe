# Type Organization — Industry Standard

## The mental model that draws the line

Mature codebases split types into **three categories**, and the question "auth or api?" dissolves once you see them:

| Category | What it describes | Examples | Lives with |
|---|---|---|---|
| **Transport** | How *any* response travels | `ApiEnvelope<T>`, `Paginated<T>`, `ApiError` | Generic `types/api.ts` |
| **Domain/Entity** | What a thing *is* | `User`, `Task`, `AuthSession` | The feature that owns it |
| **Endpoint contract** | What a *specific* endpoint accepts/returns | `SignupRequest`, `LoginRequest`, `CreateTaskRequest` | The feature that owns it |

**The rule:** if swapping the backend from REST to GraphQL would still leave the type meaningful, it's domain/contract (lives with feature). If the type only exists *because* of how the wire works (envelope, pagination meta, error shape), it's transport (lives in `types/api.ts`).

So `SignupRequest` is **not** an api-types concern — it's the auth feature's contract with its signup endpoint. The fact that it travels over HTTP is incidental.

## Industry patterns (most → least common in modern React)

**1. Feature-sliced co-location** — the dominant pattern in [Bulletproof React](https://github.com/alan2207/bulletproof-react), Feature-Sliced Design (FSD), and most large codebases:

```
src/
  features/auth/
    auth.types.ts      ← SignupRequest, LoginRequest, AuthUser, AuthSession
    auth.api.ts
    authSlice.ts
  features/tasks/
    tasks.types.ts     ← Task, CreateTaskRequest
    tasks.api.ts
  types/
    api.ts             ← ApiEnvelope<T>, Paginated<T>  (cross-cutting only)
```

**2. Flat `src/types/`** — older convention, falls apart at scale because it becomes a dumping ground and creates import cycles between unrelated features.

**3. Schema-first** (zod/io-ts) — derive types from runtime schemas; the *schema* is co-located with the feature, types are inferred. Increasingly common in 2024–2026 codebases.

## Concrete recommendation for this repo

The `features/auth/` folder already exists — lean into co-location:

1. **Move** `src/types/auth.types.ts` → `src/features/auth/auth.types.ts`.
2. **Keep** `src/types/api.types.ts` for `ApiEnvelope<T>` only.
3. **Compose** instead of redefining: drop `AuthResponse` and use `ApiEnvelope<AuthSession>` at the call site. Then `LoginResponse`/`SignupResponse` become `ApiEnvelope<AuthSession>` — no duplication.
4. **Distinguish** `LoginFormValues` (UI/form state) from `LoginRequest` (wire contract). They look identical today but diverge the moment `rememberMe` or `confirmPassword` is added.

## The heuristic to memorize

> **`types/` is for things every feature shares. Everything else lives next to the feature that owns it.**

---

# Deep Dive: Schema-First Type Design (zod / io-ts)

## The problem schema-first solves

In the conventional approach, types and runtime validation are **two separate things**:

```ts
// 1. You write a TypeScript type (compile-time only — erased at runtime)
type SignupRequest = {
  email: string
  password: string
}

// 2. Separately, you hope the backend returns what you expect.
//    Nothing actually checks at runtime.
const data = await res.json() as SignupRequest  // ← a lie if backend changes
```

The problem: **TypeScript types disappear at runtime.** If the backend silently changes `email` → `emailAddress`, the app crashes deep inside some component, not at the boundary where the bad data entered. The `as SignupRequest` cast is a promise to the compiler that nothing actually enforces.

## How schema-first flips it

You write **one schema** that does both jobs — runtime validation *and* type inference:

```ts
import { z } from "zod"

// 1. Define the schema (runtime + compile-time, single source of truth)
export const SignupRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

// 2. Derive the TS type from it — no duplication, can't drift
export type SignupRequest = z.infer<typeof SignupRequestSchema>

// 3. Validate at the boundary — bad data fails loudly with a real error
const parsed = SignupRequestSchema.parse(await res.json())
//    ^? typed as { email: string; password: string }
```

One declaration → you get the type *and* a runtime guard. If the backend drifts, `.parse()` throws immediately with a clear message instead of silently passing garbage downstream.

## Where schemas live (still co-located)

Same co-location rule as before — the schema lives next to the feature that owns it:

```
src/features/auth/
  auth.schema.ts    ← zod schemas (SignupRequest, LoginResponse, AuthUser)
  auth.types.ts     ← (often unnecessary — types are inferred from schema)
  auth.api.ts       ← imports schema, calls .parse() on responses
```

A typical `auth.schema.ts`:

```ts
import { z } from "zod"

export const AuthUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string().datetime(),
})

export const AuthSessionSchema = z.object({
  token: z.string(),
  user: AuthUserSchema,
})

// Generic envelope as a higher-order schema
export const ApiEnvelope = <T extends z.ZodTypeAny>(data: T) =>
  z.object({
    success: z.boolean(),
    message: z.string(),
    data,
  })

export const LoginResponseSchema = ApiEnvelope(AuthSessionSchema)

// Inferred types — single source of truth
export type AuthUser = z.infer<typeof AuthUserSchema>
export type AuthSession = z.infer<typeof AuthSessionSchema>
export type LoginResponse = z.infer<typeof LoginResponseSchema>
```

A typical `auth.api.ts` consumes it:

```ts
import { LoginResponseSchema, type LoginResponse } from "./auth.schema"

export async function login(req: LoginRequest): Promise<LoginResponse> {
  const res = await fetch("/api/auth/login", { /* ... */ })
  const json = await res.json()
  return LoginResponseSchema.parse(json)  // ← throws if shape is wrong
}
```

## Why it's increasingly the default in 2024–2026

- **Single source of truth** — the type and the validator can't drift apart, because the type *is* the validator.
- **Real boundary safety** — API responses, form input, URL params, `localStorage`, `postMessage`, env vars — all the places TS types are usually wishful thinking.
- **Form integration** — `react-hook-form` accepts zod schemas directly via `@hookform/resolvers/zod`, so the same schema validates the form *and* types the submitted values.
- **Better errors** — a 400 response with `{"errors": [...]}` becomes a structured `ZodError` that can be mapped onto form fields automatically.
- **Generative tooling** — OpenAPI specs, tRPC, Hono, and many backends now emit zod schemas directly, making frontend/backend contracts type-safe across the wire.

## Trade-offs to be aware of

- **Bundle size** — zod adds ~13 KB gzipped. Negligible for most apps, matters for ultra-lean ones. Alternatives: `valibot` (~1 KB), `arktype`.
- **Runtime cost** — `.parse()` runs on every response. For most apps this is invisible; for hot paths processing thousands of items, use `.safeParse()` selectively or skip validation for trusted internal calls.
- **Learning curve** — composing schemas (unions, discriminated unions, refinements, transforms) takes practice. The payoff is that the same schema replaces ad-hoc validation scattered across the codebase.

## Applying it to this repo

If migrating this codebase, the change would be:

1. Add `zod` as a dependency.
2. Create `src/features/auth/auth.schema.ts` with `SignupRequestSchema`, `LoginRequestSchema`, `AuthSessionSchema`, and a generic `ApiEnvelope` helper.
3. Replace the manual types in `src/types/auth.types.ts` with `z.infer<>` exports from the schema file.
4. In `auth.api.ts`, replace `as AuthResponse` casts with `LoginResponseSchema.parse(data)`.
5. Wire `react-hook-form` to the same schema via `zodResolver(SignupRequestSchema)` — the form's validation rules and the API contract become identical by construction.

## The bigger heuristic

> **Types describe what you hope is true. Schemas prove what is actually true.** Use schemas at every boundary where data enters the app from a place TypeScript can't see — and let types fall out of them for free.
