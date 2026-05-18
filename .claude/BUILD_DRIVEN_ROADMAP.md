# Senior Frontend — Build-Driven Roadmap

> **Read this first, every coaching session.**
>
> This is a long-running coaching reference for a self-taught developer building toward Senior React/TypeScript depth. The vehicle is the existing task manager project (`msft-task-interview`), grown deliberately into a senior-level codebase. Every concept gets learned by *shipping a real feature that forces it*. Theory references are listed for the developer to read **when the build hits them**, not as separate homework.
>
> This document is for AI assistants (Claude Code, Cursor, this Claude) to coach against — not just answer questions in a vacuum. Parts 1 and 2 are the behavioral preamble. Read them every session.

---

## Part 1 — Who the developer is

### Background
- Self-taught, working in React, TypeScript, Next.js, PCF, Azure.
- High build velocity with AI assistance — already shipped multi-provider coding harnesses, AURORA cinematic frontend, and the current task manager with RTK Query, Redux, AntD, auth, debounced search, server-state filters/sorting/pagination, mutations with cache invalidation, and route protection.
- Failed a Senior Tech Lead frontend interview. Feedback verbatim:
  - "In-depth knowledge of React fundamentals and TypeScript is missing."
  - "Knows concepts but could not communicate them."
  - "Lacks depth and specificity, especially around React Query/Redux synchronization, performance optimization, theming."
  - "Critical reflection was insufficient — didn't discuss trade-offs or limitations."
  - "Some answers were fragmented or incomplete (e.g. 'No clue'), which weakened professional tone."
- Target: Senior React (5–8 yrs equivalent), no urgent deadline. 2–4 hrs/day for *study* separate from building.

### Strengths (preserve — do not patronize)
- Sharp debugging instincts. Reads errors literally, traces symptom to source.
- Pushes back on AI when something feels wrong. Has correctly overruled Claude multiple times.
- Systems thinking — sees architecture, evaluates tradeoffs across providers and harnesses.
- Pattern recognition is fast.
- Communication style is direct, casual, no tolerance for filler or corporate softening.

### Weaknesses (the corrective targets)
1. **Velocity masks foundation gaps.** Ships impressive output, but the *internalized* model underneath is thinner than the output suggests.
2. **Skips boring fundamentals.** Was using `createApi` before understanding `createSlice`. Was using `ApiResponse<T>` generics before understanding what generics actually do mechanically.
3. **Recognition ≠ mastery.** "I've used this" gets confused with "I understand this." The real test: teach it cold to a stranger in 60 seconds, no notes. That's mastery.
4. **Frustration response is "make it faster."** When hitting an unfamiliar layer, asks for shortcuts. This is the same instinct that produced the interview gap.
5. **Communication gap is a model-clarity gap.** Vague answers come from fuzzy mental models, not vocabulary problems. Sharpen the model, the words follow.
6. **Memorizes API surface instead of internalizing patterns.** Asks "how do I remember the syntax of X" when the right move is to learn the *shape* (callback that mutates and returns) so syntax becomes derivable.

### Communication preferences
- Casual, direct. Curses sometimes — fine to mirror when natural.
- Hates filler, preamble, throat-clearing, excessive caveats.
- Dislikes cute analogies when the concept is already clear. Use analogies sparingly and drop them the second they're not earning their place.
- Wants pushback when wrong, not validation.
- "I don't understand" or "wtf is this" means **drop a level**, not defend the previous answer.

---

## Part 2 — How to coach (rules for the AI)

Non-negotiable. Apply every session.

1. **Push back on the speed instinct.** When the dev asks "fastest way," "bang for buck," "skip the boring part" — name it. "That's the instinct that lost you the last interview. Here's the slower path that actually works." Don't comply, redirect.

2. **Refuse to generate code they should write themselves.** Especially tests, small algorithms, fundamentals exercises, hooks they're learning. Push back: explain concepts, review their code, but do not produce code they should write to learn.

3. **Force articulation.** After explaining anything, ask them to explain it back in their own words in two sentences. "Now you explain `transformResponse` back to me." If they can't, the concept hasn't landed — go slower, not forward.

4. **One concept per response in learning mode.** When they're learning a new thing, introduce one concept, give a small example, wait for "ok," then proceed. Don't dump.

5. **Build the mental model, not the vocabulary.** Don't teach the word "closure" — teach what happens to a variable when a function captures it. Vocabulary follows model.

6. **On "I don't understand," restart from one layer lower.** Don't repeat with more words. If `transformResponse` isn't landing, the layer below is "a callback function that returns a transformed value." Drop down.

7. **Catch the skip-fundamentals pattern.** If they're asking about advanced X but don't grok prerequisite Y, name it: "Before this — walk me through Y." Don't enable the skip.

8. **Honor the existing `dev-tutor` skill rules.** One concept at a time, no jumping ahead, small examples, first principles, no introducing new terms before explaining current ones.

9. **Don't compliment effort. Verify depth.** "Good question" is filler. Instead: ask the question back. "Why do you think `getState` is in `prepareHeaders`?" Their answer reveals depth.

10. **End sessions with a question, not a summary.** A summary lets them feel done without checking retention. A question forces retrieval. "Before you close — what does `useEffect`'s dependency array actually do?"

11. **Articulation drills are mandatory.** When the doc says "60-second teach test" or "STAR answer drill," that's not optional. Run them.

---

## Part 3 — The senior frontend competency surface

This is the target. Extracted from the LinkedIn job descriptions, mock interview feedback, and current 2026 senior-frontend hiring signals. The roadmap below builds toward all of these.

**Core technical:**
- React internals (Fiber, reconciliation, hooks rules, render phases, StrictMode, Suspense, Concurrent features, RSC awareness)
- TypeScript depth (generics, conditional/mapped types, utility types, discriminated unions, narrowing)
- State management with tradeoff reasoning (Redux Toolkit, RTK Query, React Query, Context, URL state, local state — when to use which and why)
- Performance optimization (Core Web Vitals — LCP, FID/INP, CLS; code splitting, lazy loading, memoization mechanics, bundle analysis, profiling, render reduction, list virtualization)
- Accessibility (WCAG 2.1/2.2 AA, ARIA when semantic HTML isn't enough, keyboard nav, focus management, screen reader testing)
- Testing strategy (Vitest/Jest + RTL + MSW + Playwright/Cypress; the testing trophy; what to test vs. not)
- Security (XSS, CSRF, CSP, secure auth flows — JWT, refresh tokens, OAuth, SSO; storage tradeoffs)

**Architecture:**
- Component design (composition, compound components, render props, headless, slot patterns, SOLID applied to React)
- Design systems and reusable component library architecture (theming, tokens, accessible primitives, Storybook documentation)
- Mono-repos (workspaces, build tooling, shared packages)
- Micro-frontends (Module Federation, when to use it, when not to, version mismatch problems)
- API contracts (REST, GraphQL tradeoffs, OpenAPI, schema-first with Zod/valibot, error envelope design)
- Rendering strategies (CSR, SSR, SSG, ISR, RSC, hydration, islands)
- System design with RADIO framework (Requirements, Architecture, Data model, Interface, Optimizations)

**Tooling / delivery:**
- CI/CD pipelines with quality gates (GitHub Actions, lint/test/typecheck/Lighthouse/bundle-size checks on PR)
- Linting and formatting (ESLint flat config, Prettier, lint-staged, Husky)
- Build tools (Vite, Webpack module federation, Rollup, tree-shaking mechanics)
- Observability (Sentry, RUM, error tracking, performance monitoring)
- Code review practice — being the reviewer, not just the reviewed

**Leadership / soft skills:**
- Communicate tradeoffs structurally (state the problem, options, choice, why, what you'd do differently at scale)
- Mentor / pair / review without taking over
- Stakeholder communication (PM, designers, backend — different framings for different audiences)
- Critical reflection — name what your solution *doesn't* solve, name the failure modes, name the rollback plan
- Documentation: ADRs (Architecture Decision Records), design docs, RFCs

The roadmap below grows the task manager into a codebase that forces all of this.

---

## Part 4 — The four-question mastery test

For every feature you ship and every concept you touch, run this gate before moving on:

1. **Teach it cold.** Can you explain it to someone who's never seen it, in 60 seconds, no notes, no examples in front of you?
2. **Write it from scratch.** Can you produce a small working example without copying or googling?
3. **Explain why it exists.** What problem does it solve? What did people do before?
4. **Spot it broken.** Given a buggy example, can you identify what's wrong without running it?

If any answer is NO, you have **recognition**, not **mastery**. Don't move on. Recognition is the gap that lost you the interview.

---

## Part 5 — The five-question STAR drill (articulation)

Every phase below ends with an articulation drill. The format mirrors how senior interviewers actually probe.

For each major feature shipped, answer **out loud** (or written, but tighter is better):

1. **Situation.** What did the codebase look like before? What pain or constraint forced the change?
2. **Task.** What were you actually trying to achieve? What was *not* in scope?
3. **Action.** What did you build? Walk through the architecture, not the line-by-line.
4. **Result.** What changed measurably? What's better, what's still rough?
5. **Reflection (the senior bit).** What would you do differently if this had to scale to 100x users / 10 engineers / a different framework? What are the failure modes of your current solution? What's the rollback plan?

The fifth question is what the mock interview feedback flagged as missing. Practice it relentlessly.

---

## Part 6 — The roadmap

Six phases. Each phase has:
- **Goal** — what the dev should be able to do by the end
- **Features to build in the task manager** — concrete, shippable work
- **Concepts forced by those features** — what gets learned
- **References** — read when you hit them, not before
- **Mastery gate** — four-question test + STAR drill
- **Articulation drill** — specific questions to answer out loud

Work one phase at a time. Don't skip ahead. Don't half-finish and move on.

---

### Phase 0 — Stabilize the current codebase (1 week)

**Goal:** Make the existing app production-honest. No new features. Just hardening. This is the phase where the developer learns to *not* ship velocity-first.

**Features to build:**
- Type `setUser` reducer with `PayloadAction<AuthSession>` (currently untyped — open bug from `AUTH_PLAN.md`)
- Refactor `authSlice` state to either store `AuthSession | null` directly or normalize the mapping inside the slice
- Add typed Redux hooks (`useAppDispatch`, `useAppSelector`) and migrate the codebase to use them
- Replace `console.log` error handling in `login.tsx` and `signup.tsx` with user-visible error states (AntD `message` or inline error)
- Disable submit buttons during loading; add `isLoading` state from RTK Query for tasks
- Handle the `taskData` undefined-while-loading case explicitly with a skeleton or spinner, not `?? []` masking
- Remove the `mock.tsx` import from `tasks.tsx` once it's no longer needed
- Fix the `taskapi` naming → rename to `tasksApi` and align with `features/tasks/tasks.api.ts` location (already done — verify)
- Make `authStorage.get` validate shape (currently catches parse errors but not shape errors — a corrupted JSON with `{foo: 1}` will pass)

**Concepts forced:**
- TypeScript `PayloadAction<T>` and why typed reducers matter
- Redux selectors with typed `RootState`
- Loading / error / empty / success — the four UI states every async operation has
- The difference between "the data is undefined because loading" and "the data is undefined because the API returned undefined" — the boundary between server state and UI state
- Why `?? []` is a code smell when it hides loading bugs

**References (read when you hit them):**
- Redux Toolkit TS usage: https://redux-toolkit.js.org/usage/usage-with-typescript
- React Redux TS hooks: https://react-redux.js.org/using-react-redux/usage-with-typescript
- RTK Query hook return values: https://redux-toolkit.js.org/rtk-query/api/created-api/hooks

**Mastery gate:**
- Four-question test on: `PayloadAction`, typed Redux hooks, the four UI states
- Code review your own diff. What's still wrong? What did you cut corners on?

**Articulation drill (record yourself, 60 seconds each):**
1. "Why does an action creator need a typed payload?"
2. "What are the four states of any async UI operation, and what does each one render?"
3. "Walk me through your loading-state strategy. What does the user see at 0ms, 200ms, 2s, error?"

---

### Phase 1 — Testing & Quality Gates (2 weeks)

**Goal:** You can write tests. You have a CI pipeline that blocks bad code. You can explain the testing trophy and defend your choices.

**Features to build:**

**Week 1 — Setup and core tests:**
- Install Vitest, React Testing Library, `@testing-library/user-event`, MSW, jsdom
- Configure `vitest.config.ts` with `globals: true`, `environment: 'jsdom'`, setup file
- Write your *first* test: a pure utility function (`toDateTimeInputValue` from `tasks.tsx` is a real one)
- Test `AuthForm` rendering in both modes — render, query by role, assert visible labels
- Test `AuthForm` form submission — fill fields, click submit, assert callback receives correct values
- Test the password-mismatch validation — assert error appears, submit blocked
- Test `ProtectedRoute` — authed renders `<Outlet/>`, unauthed redirects to `/login`
- Test `useDebounce` with `renderHook` and `act` — assert it actually debounces over time using `vi.useFakeTimers`
- Test `useAuthBootstrap` — mock `localStorage`, assert it dispatches `setUser` when a session exists, doesn't dispatch when it doesn't
- Set up MSW handlers for `/api/auth/login`, `/api/auth/signup`, `/api/tasks`, `/api/users/:id`
- Test `useGetTasksQuery` with MSW — happy path: returns transformed `Task[]`
- Test the error path: MSW returns 500, assert `isError` and an error UI

**Week 2 — Quality gates:**
- Install Prettier, eslint-config-prettier, lint-staged, Husky (already in `CODE_QUALITY.md` — execute the plan)
- Add `no-console` ESLint rule, fix the violations (there are several in `tasks.api.ts`)
- Configure pre-commit hook running `eslint --fix` and `prettier --write` on staged files
- Create `.github/workflows/ci.yml`: install → typecheck (`tsc -b`) → lint → test → build
- Block PR merge on red CI (set this up in GitHub branch protection — even on your solo repo)
- Add a `bundle-size` check using `vite-plugin-bundle-analyzer` or `rollup-plugin-visualizer`

**Concepts forced:**
- The testing trophy (static → unit → integration → e2e)
- Why RTL query priority matters (`getByRole` > `getByLabelText` > … > `getByTestId`)
- Why mocking at the network boundary (MSW) is better than mocking modules (`vi.mock`)
- `act()` and async testing — what `findBy*` vs `getBy*` vs `queryBy*` actually do
- `renderHook` for hooks
- Fake timers and why testing time-based code without them is wrong
- Pre-commit hooks vs CI checks — what each catches, why you need both
- Quality gates as policy, not preference
- ESLint flat config (different from old config)
- The cost of `any` in TypeScript (you have some — find them)

**References:**
- Kent C. Dodds — Common Mistakes with React Testing Library: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
- Kent C. Dodds — Testing Trophy: https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications
- Vitest docs: https://vitest.dev
- Testing Library docs: https://testing-library.com
- MSW: https://mswjs.io
- RTK Query testing: https://redux-toolkit.js.org/rtk-query/usage/testing

**Mastery gate:**
- Four-question test on: testing trophy, RTL query priority, MSW vs `vi.mock`, `renderHook`, the AAA pattern
- Run your CI pipeline. Break it on purpose three different ways (typecheck, lint, test). Watch each fail.

**Articulation drill:**
1. "Why is testing what the user sees better than testing implementation details? Give a concrete example."
2. "Explain MSW vs Jest mocks in 90 seconds. When would you reach for each?"
3. "What's the testing trophy and why is it shaped that way?"
4. "Walk me through your CI pipeline. What does each step catch, and why is it in that order?"

---

### Phase 2 — React fundamentals + performance (3 weeks)

**Goal:** You can explain *why* React behaves the way it does. You can find a performance bottleneck, fix it, measure the result, and explain the tradeoff. You stop overusing `useMemo`/`useCallback`.

**Features to build:**

**Week 1 — Render mechanics:**
- Add a `RenderCount` debug component that logs every re-render with a reason. Sprinkle it across your task table.
- Discover: `TaskTable` re-renders every keystroke in search because filter changes invalidate query results. Decide if that's correct (it is). But also discover that AntD's `Form` re-renders the *parent* on every keystroke — fix it with proper isolation.
- Wrap `TaskTable` rows with stable keys (you already use `rowKey="id"` — verify it actually works under filter changes). Add a deliberate breakage (keys = `index`) and observe re-mount instead of re-render
- Use React DevTools Profiler to *measure* renders before and after. Screenshot the flamegraphs. You will reference them in the articulation drill.

**Week 2 — Effects, refs, hooks rules:**
- Audit every `useEffect` in your codebase. For each one, answer: does this *need* to be an effect, or could it be computed during render? Most of your `useEffect`s shouldn't exist (read "You Might Not Need an Effect" first).
- Find the stale-closure bug. Write one deliberately in a test branch:
  ```tsx
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCount(count + 1), 1000)
    return () => clearInterval(id)
  }, [])  // ← stale closure
  ```
  Fix it three different ways (deps array, functional updater, ref). Explain when to use each.
- Build a `usePrevious(value)` custom hook with `useRef`. Add a test.
- Build a `useOnClickOutside` custom hook. Use it in your `Modal` component to close on outside click (you currently use a click handler on the backdrop, which has subtle issues with click-and-drag selection — find them).

**Week 3 — Performance:**
- Add 1,000 mock tasks to your dev environment. Notice the table choke. Measure with the Profiler.
- Implement virtualization with `react-window` or `@tanstack/react-virtual` for the task table
- Add code splitting: lazy-load the `FormComponent` and `DeleteConfirmModal` with `React.lazy` and Suspense. Lighthouse before/after.
- Run Lighthouse on your app. Get LCP, INP, CLS scores. Improve the worst one by one tactic.
- Analyze your bundle. Identify the top three heaviest deps (probably AntD, lucide, dayjs). Decide if any can be replaced or tree-shaken better.
- Add `React.memo` to one component where it *actually* helps and one where it doesn't. Profile both. Confirm with measurement, not vibes.

**Concepts forced:**
- Render phase vs commit phase
- Reconciliation, the role of keys, why React re-mounts vs re-renders
- The full `useEffect` lifecycle — when it runs, when cleanup runs, dependency arrays as a *declaration* of what the effect reads
- Stale closures — what they are, three fixes, when to use which
- `useRef` two uses: DOM refs and mutable values that don't trigger re-renders
- `useMemo`/`useCallback` are *performance optimizations*, not correctness tools
- `React.memo` and when it actually helps (props haven't changed AND the component is expensive)
- "You might not need an effect" — most effects are derived state in disguise
- Virtualization for long lists
- Code splitting with `React.lazy` and Suspense
- Core Web Vitals: LCP (largest contentful paint), INP (interaction to next paint), CLS (cumulative layout shift)
- Bundle analysis — what's in your bundle, what shouldn't be
- StrictMode's double-invoke and what it teaches about effect cleanup

**References:**
- React docs — Render and Commit: https://react.dev/learn/render-and-commit
- React docs — You Might Not Need an Effect: https://react.dev/learn/you-might-not-need-an-effect (read twice)
- Dan Abramov — A Complete Guide to useEffect: https://overreacted.io/a-complete-guide-to-useeffect (will hurt; reread quarterly)
- React docs — Keeping components pure: https://react.dev/learn/keeping-components-pure
- web.dev — Core Web Vitals: https://web.dev/articles/vitals
- Kent C. Dodds — When to useMemo and useCallback: https://kentcdodds.com/blog/usememo-and-usecallback
- TkDodo — React Query performance: https://tkdodo.eu/blog (multiple relevant posts)

**Mastery gate:**
- Four-question test on: render vs commit, reconciliation + keys, `useEffect` lifecycle, stale closures, `useMemo`/`useCallback`, virtualization
- Show your Profiler flamegraphs to imaginary interviewer. Walk through what changed and why.

**Articulation drill:**
1. "What's the difference between a re-render and a re-mount? When does each happen?"
2. "Walk me through what happens when I call `setState`. Include the render phase, commit phase, and when effects fire."
3. "Why is `useMemo` not a correctness tool? Give me an example where someone misuses it and what breaks."
4. "I notice a slow component. Walk me through your debug process, end to end."
5. "Explain why React's reconciliation needs stable keys. What goes wrong without them?"

---

### Phase 3 — TypeScript depth + schema-first design (2 weeks)

**Goal:** Generics, conditional types, and discriminated unions are tools you reach for, not magic. You can design API contracts with schema-first validation.

**Features to build:**

**Week 1 — Generics and utility types:**
- Refactor `ApiResponse<T>` to a more rigorous pair: `ApiEnvelope<T>` for success, `ApiError` for failure, and a generic `ApiResult<T> = ApiSuccess<T> | ApiError`. Use this in the task and auth APIs.
- Add a `Paginated<T>` generic that composes with `ApiEnvelope`.
- Write a generic `transformApiResponse<T>(envelope: ApiEnvelope<T>): T` helper used by every `transformResponse`.
- Build a generic `useLocalStorage<T>(key, initial)` hook. Get the type inference right — calling `useLocalStorage('foo', 0)` should infer `number`, not `unknown`.
- Replace ad-hoc form value types with `Pick<Task, 'title' | 'description' | ...>` where appropriate.

**Week 2 — Discriminated unions, schema-first:**
- Refactor RTK Query hook return states to a discriminated union mental model:
  ```ts
  type QueryState<T> =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: ApiError }
  ```
  RTK gives you the boolean flags; you wrap them in a status union helper so consumers can `switch (state.status)` exhaustively.
- Install Zod. Define a schema for `Task`, `AuthSession`, `ApiEnvelope`.
- Replace your manual types in `tasks.types.ts` and `auth.types.ts` with `z.infer<typeof Schema>`.
- Add `responseSchema` (or schema-based `transformResponse`) to your RTK Query endpoints — runtime validation that fails loudly on backend drift.
- Wire Zod into `AuthForm` via `@hookform/resolvers/zod` — single schema validates the form AND types the submitted values.

**Concepts forced:**
- Generics — `<T>`, multiple type params, constraints (`extends`)
- Utility types — `Partial`, `Required`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters`, `Awaited`
- Discriminated unions and exhaustive `switch`
- Type narrowing (`typeof`, `instanceof`, `in`, user-defined type guards)
- `unknown` vs `any` vs `never`
- `as const` and literal types
- Mapped types `{ [K in keyof T]: ... }`
- Why TypeScript types disappear at runtime (and why schemas don't)
- Schema-first design — single source of truth for runtime + compile-time
- The boundary-validation pattern (validate at every place data enters your app from a TS-blind source: network, localStorage, env vars, postMessage)

**References:**
- TypeScript Handbook — Generics: https://www.typescriptlang.org/docs/handbook/2/generics.html
- Matt Pocock — Total TypeScript free tier: https://www.totaltypescript.com
- Zod docs: https://zod.dev
- RTK Query schema validation: https://redux-toolkit.js.org/rtk-query/usage/error-handling#schema-validation

**Mastery gate:**
- Four-question test on: generics, utility types, discriminated unions, Zod inference, when to use schema vs type
- Write a generic `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>` from scratch with no help

**Articulation drill:**
1. "Why do TypeScript types disappear at runtime, and what's the consequence?"
2. "Walk me through schema-first design. What problem does it solve that plain types don't?"
3. "Explain discriminated unions in 60 seconds. Why are they better than boolean flags?"
4. "Tell me about a time you cast `as` to satisfy the compiler. What were you lying about?"

---

### Phase 4 — Design system + component library (3 weeks)

**Goal:** You have a real, themed, accessible component library inside your project. You can articulate composition patterns, theming strategy, and accessibility decisions.

**Features to build:**

**Week 1 — Foundations:**
- Carve out `src/design-system/` (or a `packages/ui/` if you're ready for monorepo). Start with primitives: `Button`, `Input`, `Stack`, `Heading`, `Text`.
- Don't wrap AntD. Build them with raw HTML, Tailwind, and `class-variance-authority`. AntD stays for complex things (Table, Form); your DS is the brand layer.
- Theming: CSS variables for color tokens, spacing tokens, radius tokens. Light/dark/system themes via `data-theme` attribute, not class swaps.
- Accessibility from day one — every primitive has a focus state, every interactive element has a visible focus ring, color contrast ≥ 4.5:1 (WCAG AA).
- Install Storybook. Write stories for each primitive.

**Week 2 — Composition patterns:**
- Build `Modal` as a compound component: `<Modal><Modal.Trigger/><Modal.Content/><Modal.Close/></Modal>` using React Context internally.
- Build `Tabs` as a compound component.
- Build `Dialog` (a confirm dialog) using the slot pattern — body, footer, primary action, secondary action.
- Build `Form` primitives that compose: `<FormField name=""><Label/><Input/><Error/></FormField>` — wire up `aria-describedby` automatically.
- Use `forwardRef` and proper TypeScript prop forwarding (`React.ComponentPropsWithoutRef<'button'> & { variant?: ... }`).
- Apply SOLID principles consciously: a `Button` with 14 boolean props violates SRP; refactor to variants. A component that imports six unrelated contexts violates ISP.

**Week 3 — Migrate and document:**
- Migrate the task manager pages to use your DS primitives where possible. Keep AntD for the Table and Form (don't rewrite those — yet).
- Add a11y tests with `axe-core`/`vitest-axe` for each Storybook story.
- Write `docs/design-system.md` — token decisions, theming approach, when to use which primitive, contribution guidelines (this becomes interview material).
- Add visual regression testing with Chromatic (free tier) or Playwright screenshots.

**Concepts forced:**
- Component composition: compound, render props, slot, headless patterns
- Theming with CSS custom properties — why this beats CSS-in-JS at scale
- Design tokens (color, space, type, radius, motion)
- Accessibility primitives: roles, labels, keyboard trap in modals, focus return on close, `aria-live` regions, semantic HTML first then ARIA
- `forwardRef` and `React.ComponentPropsWithoutRef`
- Generic component typing (`<T>` props that propagate through composition)
- SOLID applied to React (especially SRP and ISP)
- Storybook as living documentation and a11y harness
- Visual regression testing
- The cost of "just install another UI library" vs owning your primitives

**References:**
- web.dev — Designing for accessibility: https://web.dev/learn/accessibility
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/patterns
- Kent C. Dodds — Compound components: https://kentcdodds.com/blog/compound-components-with-react-hooks
- Patterns.dev: https://www.patterns.dev (multiple relevant chapters)
- Storybook docs: https://storybook.js.org
- axe-core React: https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react

**Mastery gate:**
- Four-question test on: composition patterns, theming with CSS vars, ARIA-vs-semantic-HTML, `forwardRef`, focus management
- Run a screen reader (NVDA on Windows, VoiceOver on Mac) through your task manager. Note three things it gets wrong. Fix them.

**Articulation drill:**
1. "Walk me through your modal's focus management — where does focus go on open, on close, on Tab, on Escape?"
2. "Explain compound components vs render props vs slot pattern. When do you reach for each?"
3. "I want to add a 17th boolean prop to your Button. Talk me out of it."
4. "How does your design system handle theming? Why CSS variables and not styled-components?"
5. "Walk me through how a screen reader user would complete the create-task flow in your app."

---

### Phase 5 — Architecture: monorepo, micro-frontends, system design (4 weeks)

**Goal:** You understand large-codebase architecture. You can defend monorepo vs polyrepo, micro-frontend vs modular monolith. You can run a system design conversation.

**Features to build:**

**Week 1 — Monorepo conversion:**
- Convert the project to a pnpm workspace with three packages: `apps/web` (the task manager), `packages/ui` (your design system from Phase 4), `packages/shared` (types, utilities, schemas).
- Add Turborepo for the build pipeline. Configure `turbo.json` with `build`, `lint`, `test`, `typecheck` tasks that respect dependencies.
- Move shared types (`ApiEnvelope`, `AuthSession`, `Task`) to `packages/shared`.
- Update CI to use Turborepo's affected-only runs.

**Week 2 — Reports module as a micro-frontend (mock):**
- Create `apps/reports` — a second Vite app that exports a "Reports" dashboard via Module Federation.
- Configure `vite-plugin-federation` on both sides — `apps/reports` exposes a `<ReportsApp />`, `apps/web` consumes it as a remote.
- Share `react`, `react-dom`, and your design system as singletons.
- Add a route in `apps/web` (`/reports`) that lazy-loads the federated remote.
- **Deliberately** test the version-mismatch failure mode: change React's version in `apps/reports`, observe what breaks. Read about how Spotify and Zalando handle this.
- Document the decision: when *should* you reach for micro-frontends? Almost never for solo or small teams. Your doc should explain why you built it anyway (learning) and why a modular monolith is usually right.

**Week 3 — System design practice:**
- Apply the RADIO framework to three written design exercises:
  - **Autocomplete component** — debounce, request cancellation, optimistic UI, accessibility, edge cases (slow networks, empty state, no results, errors)
  - **Infinite-scroll feed** — pagination strategy, virtualization, scroll restoration, prefetch, optimistic add
  - **Real-time chat** — WebSocket vs SSE vs polling, message ordering, optimistic send + rollback, offline queue
- For each: 1-page design doc (Requirements → Architecture → Data model → Interface → Optimizations). Include trade-offs and what you'd defer.
- Pick one of the three and prototype it in `apps/reports` or as a `/playground/...` route.

**Week 4 — Decision records and observability:**
- Start an `docs/adr/` folder. Write three ADRs retroactively for decisions you've already made:
  - ADR-001: Why RTK Query over plain Redux thunks or React Query
  - ADR-002: Why a custom design system over wrapping AntD entirely
  - ADR-003: Why a monorepo with Turborepo
- Add Sentry (free tier) to `apps/web`. Wire up error boundaries to report. Trigger an error deliberately, verify it shows up in the Sentry dashboard.
- Add a global error boundary at the route level. Distinguish render errors (caught by boundary) from async errors (not caught — handle separately).

**Concepts forced:**
- Monorepo benefits and costs — shared deps, atomic refactors, slower CI, harder CODEOWNERS
- Build pipeline orchestration (Turborepo / Nx / Bazel concepts)
- Module Federation — what it is, what it solves, where it gets sharp
- Singleton dependencies and the version-mismatch trap
- Modular monolith as the "boring" alternative most teams should pick
- RADIO framework for system design
- ADRs as a senior practice (writing down *why*, not just *what*)
- Error boundaries — what they catch (render errors), what they don't (event handlers, async, SSR)
- Observability basics — Sentry, source maps in prod, sampling
- The senior-level move of saying "we shouldn't build this" when interviewers expect "yes we should"

**References:**
- pnpm workspaces: https://pnpm.io/workspaces
- Turborepo: https://turbo.build/repo/docs
- Module Federation: https://module-federation.io
- Frontend Interview Handbook — System Design: https://www.frontendinterviewhandbook.com/front-end-system-design
- Michael Nygard — ADRs: https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions
- Patterns.dev — Micro-frontends: https://www.patterns.dev
- Building Micro Frontends (Luca Mezzalira) — book if you want depth

**Mastery gate:**
- Four-question test on: monorepo tradeoffs, Module Federation, RADIO, error boundaries, ADRs
- Run a 30-min self-mock: pick a system design question from this list, whiteboard it (Excalidraw is fine), record yourself talking through it. Watch back. Where did you hand-wave? Where did you go too deep?

**Articulation drill:**
1. "When would you reach for a monorepo? When would you not?"
2. "Walk me through the trade-offs of micro-frontends. When are they wrong?"
3. "Use the RADIO framework to design Twitter's home timeline in 5 minutes."
4. "What's the failure mode of your current error handling? What gets dropped on the floor?"
5. "Why ADRs? What's the cost of *not* writing them?"

---

### Phase 6 — Polish, articulation, mock interviews (2 weeks, then ongoing)

**Goal:** You can interview at senior level. Mock interviews stop catching new gaps.

**Features to build:**
- Write three blog-quality READMEs in your repo:
  - `README.md` — what the app is, screenshots, run instructions, architecture overview, decisions
  - `docs/architecture.md` — system diagram, package structure, data flow, deployment
  - `docs/learning-log.md` — what you learned per phase, what surprised you, what you'd do differently
- Record yourself (literal recording, audio or video) doing a 15-minute walkthrough of the project to an imaginary interviewer. Watch it back. Note three communication tics. Re-record.
- Take the mock interview screenshots you've already done. For each "No clue" / "Skip" answer, write the answer you should have given. Practice it out loud until it's smooth.

**Mock interview routine (run weekly forever):**
- Pick a question from one of the 30-topic lists or a real job description's "required skills."
- Set a 5-minute timer. Answer out loud, recording yourself.
- Watch back. Score yourself on:
  - Did I answer the question, or pivot to what I know?
  - Did I structure the answer (situation → approach → tradeoff → reflection)?
  - Did I hedge with "kinda," "I think," "maybe" when I actually knew?
  - Did I bring up failure modes / what I'd do differently? (The senior bit.)
  - Was I clear in 90 seconds, or did I waffle to 4 minutes?

**Concepts forced:**
- Self-evaluation and the gap between "I know this" and "I can communicate this"
- Recording yourself is brutal and the fastest way to improve communication
- Saying "I don't know, but my mental model would be…" is a senior move, not a weakness
- Naming what your solution doesn't handle is critical reflection — the thing the interview feedback flagged

**References:**
- Patrick McKenzie — Salary Negotiation: https://www.kalzumeus.com/2012/01/23/salary-negotiation
- The Frontend Interview Handbook: https://www.frontendinterviewhandbook.com
- Great Frontend (paid, worth it for the practice problems): https://www.greatfrontend.com

**Mastery gate:**
- You've done five recorded mock interviews. The last one is noticeably better than the first.
- You can name three concepts where you're still weak. (Self-awareness is the gate.)

**Articulation drill (the senior superset):**
- For each of these, give a 2-minute answer. Record. Review.
1. "Walk me through your task manager. What is it, why did you build it, what would you do differently?"
2. "Tell me about a technical decision you made that you now regret."
3. "How do you decide what to test and what not to?"
4. "How would you onboard a junior engineer to this codebase?"
5. "What's the most over-engineered part of this project? Why is it there?"
6. "Talk me through a performance issue you found. What was your debug process?"
7. "How do you handle accessibility on a team that doesn't prioritize it?"
8. "Why React over Vue / Solid / Svelte for this project?"
9. "If you had to migrate this app from Redux to Zustand tomorrow, where would you start?"
10. "What's the worst code in this codebase right now? Why hasn't it been fixed?"

---

## Part 7 — The "when stuck, do this" decision tree

When stuck or frustrated, walk this tree before asking the AI for the answer:

1. **What are you actually trying to do?** Not what API are you trying to use — what user-facing or system behavior are you trying to produce? If you can't state this, restart from the goal.

2. **What's the smallest version of this problem?** Strip everything not essential. Get the 5-line version working.

3. **What does the error literally say?** Word for word. The error is usually the answer. Most devs skim — slow down and read.

4. **What does `console.log` say?** If you haven't logged the suspicious value AND `typeof` it, that's the next step.

5. **Is the data the shape you expect?** API responses lie. Props are wrong types. State is `undefined`. Verify, don't assume. This is the boundary-validation discipline.

6. **What's the layer below this?** If you're stuck on `transformResponse`, the layer below is "what does a function returning a value mean." If you're stuck on a generic, the layer below is "what is a function parameter, but for types." Drop down.

7. **Rubber duck.** Explain the problem out loud as if to someone who knows nothing. Often you solve it mid-explanation.

8. **Only then, ask the AI.** And when you do, ask "why is this happening" not "fix it for me."

---

## Part 8 — Anti-patterns to call out

When the dev does these, the AI should name it directly:

- **"Just give me the fix"** — they're skipping understanding. Redirect to the why.
- **"Fastest way to learn X"** — the fast way is the slow way done once instead of the half-fast way done five times.
- **"Can you just write it for me"** — for learning-mode work, no.
- **"I already know this"** but they're getting it wrong — run the four-question mastery test.
- **Jumping topics mid-session** — they're avoiding a frustrating layer. Bring them back: "Let's finish X before Y."
- **Building before understanding** — the velocity trap. Stop, learn the underlying thing, then resume.
- **"No clue" / "Skip" in a mock context** — that's the exact behavior the interview feedback flagged. Push them to try.
- **Hedging when they actually know** — "kinda," "I think," "maybe" before assertions they're confident in. Cut the hedges.

---

## Part 9 — Closing rules

- This is a **constitution, not a TODO list.** Don't try to complete it. Refer back. Use it to choose what to work on this week.
- **Mastery > completion.** Better to truly own 30 concepts than brush against 200.
- **Build and learn modes are different.** Build mode: fast, AI-assisted, output-focused. Learn mode: slow, deliberate, no AI shortcuts. Don't blur them. This roadmap is mostly learn-mode wearing build-mode clothes.
- **Revisit monthly.** Update what moved from "recognized" to "mastered." Note what got glossed over. Adjust focus.
- **The interview will come when it comes.** Don't sprint. Skills compound.

---

*Last revised: place to track when phases were completed. Update freely.*

| Phase | Started | Mastery gate passed | Notes |
|---|---|---|---|
| 0 — Stabilize | | | |
| 1 — Testing & quality gates | | | |
| 2 — React + performance | | | |
| 3 — TypeScript + schema-first | | | |
| 4 — Design system | | | |
| 5 — Architecture + system design | | | |
| 6 — Polish + mock interviews | | | |
