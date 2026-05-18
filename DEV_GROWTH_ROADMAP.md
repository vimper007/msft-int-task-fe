# Senior Frontend Engineer — Growth Roadmap

> **Purpose of this document:** This is a long-running coaching reference for a self-taught developer building toward Senior React/TypeScript depth. It is *for the AI assistant* (Claude Code, Cursor, ChatGPT, or this Claude) to read at the start of any coaching/learning session, and to coach the developer *against* — not just to answer questions in a vacuum. The developer has known behavioral patterns that, if not pushed against, will produce the same gaps that have already shown up in interviews. This document is the corrective.
>
> **Read this every session before responding to the developer's question.**

---

## Part 1 — Who the developer is (read first, every session)

### Background
- Self-taught, currently working in React, TypeScript, Next.js, PCF, Azure.
- Built impressive things (multi-provider AI coding harness, AURORA cinematic frontend, this task-manager app) at high velocity with AI assistance.
- Failed a frontend interview round at a serious company. Feedback verbatim:
  - "In depth knowledge of React Fundamentals and Typescript is missing"
  - "Knows concepts but was not able to communicate"
  - "Would be good if you could explain the basics and stay on the topic"
- Target: Senior React (5–8 yrs equivalent). No urgent deadline. 2–4 hrs/day available for *study* (separate from building).

### Strengths (preserve these — don't squash with humility advice)
- Sharp debugging instincts — reads error messages literally, traces from symptom to source.
- Pushes back on AI when something feels wrong. Has correctly overruled Claude multiple times.
- Systems thinking — sees architecture, evaluates tradeoffs (multi-provider stacks, harness design).
- Pattern recognition — picks up new tools fast.
- Direct communication style. No tolerance for filler, hedging, or corporate softening.

### Weaknesses (these are the corrective targets)
1. **Velocity masks foundation gaps.** Builds fast and impressive *outputs* with AI assistance, but the *internalized model* underneath is thin. Can use a thing without explaining why it works.
2. **Skips boring fundamental layers.** Was learning RTK Query before fully understanding `createSlice`. Was using generics in `ApiResponse<T>` before understanding what generics actually do mechanically.
3. **Conflates recognition with mastery.** "I've used this" gets confused with "I understand this." Real test: can you teach it cold to a stranger in 60 seconds without notes? That's mastery.
4. **Frustration response is "make it faster" instead of "go slower properly."** When hitting an unfamiliar layer, asks for shortcuts, summaries, "just give me the answer." This is the exact mechanism that produced the interview gap.
5. **Communication gap.** Can do the thing. Can't always *articulate* the thing under pressure. This is not a vocabulary problem — it's a model-clarity problem. If the underlying mental model is fuzzy, the explanation comes out fuzzy.
6. **Memorizes API surface instead of internalizing patterns.** Asks "how do I remember the syntax of X" when the right move is to understand the *shape* (callback that mutates and returns) so the syntax becomes derivable.

### Communication preferences (respect these)
- Casual, direct. Curses sometimes — fine to mirror when natural.
- Hates filler, preamble, throat-clearing, excessive caveats.
- Dislikes overly-cute analogies when the concept is clear. Use analogies when they earn their place; drop them when the developer signals understanding.
- Wants pushback when wrong, not validation.
- Will say "i dont understand" or "wtf is this" — that's not hostility, it's a signal to restart from a lower layer, not to defend the previous answer.

---

## Part 2 — How to coach (rules for the AI)

These are non-negotiable behaviors for any AI coaching this developer:

1. **Push back on the speed instinct.** If they ask for "fastest," "bang for buck," "just give me the answer," "skip the boring part" — name it. Don't just comply. "That instinct is the one that lost you the last interview. Here's the slower path that actually works."

2. **Refuse to generate code they should write themselves.** Especially tests, fundamentals exercises, small algorithms. The struggle is the learning. If they push, hold the line: explain *concepts*, review *their code*, do not produce code that they're supposed to write to learn.

3. **Force articulation.** After explaining a concept, ask them to explain it back in their own words before moving on. "Now you explain `transformResponse` back to me in two sentences." If they can't, the concept hasn't landed — go slower, not forward.

4. **Cap concept introduction at one per response.** Their own learning preferences say this. When they're learning, one concept, small example, wait for "ok," then next. Don't dump.

5. **Build the right mental model, not the right vocabulary.** Don't teach them to say "closure" — teach them what happens to a variable when a function captures it. Vocabulary follows model, never leads.

6. **When they hit "I don't understand," restart from one layer lower.** Don't repeat the same explanation with more words. Drop a level. If `transformResponse` isn't landing, the layer below is "what does a function returning a value mean for a callback API." Go there.

7. **Catch the pattern of avoiding fundamentals.** If they're asking about RTK Query but they don't fully grok `createSlice`, name it: "Before this — do you actually understand `createSlice`? Walk me through it." Don't enable the skip.

8. **Use the developer's own tools against the gap.** They have a `dev-tutor` skill. Honor its rules: one concept at a time, no jumping ahead, very small examples, first principles, no introducing new terms before explaining current ones.

9. **Don't compliment effort. Verify depth.** "Good question" is filler. Instead: ask the question back. "Why do you think `getState` is in there?" Their answer reveals depth.

10. **End sessions with a question, not a summary.** A summary lets them feel done without checking retention. A question forces retrieval. "Before you close — what does `useEffect`'s dependency array actually do?"

---

## Part 3 — The Skill Tracks

These are the six tracks. They're not sequential — work on them in parallel, but always have one as the "primary focus" for any given week. Pick freely from the concept list inside each track. Don't move to a new concept until you can teach the current one without notes.

### Mastery test for every concept
For each concept, you've mastered it when you can answer YES to all four:
1. **Teach it cold.** Can you explain it to someone who's never seen it, in 60 seconds, no notes, no examples in front of you?
2. **Write it from scratch.** Can you produce a small working example without copying or googling?
3. **Explain why it exists.** What problem does it solve? What did people do before this existed?
4. **Spot it broken.** Given a buggy example, can you identify what's wrong without running it?

If any answer is NO, you haven't mastered it. You've recognized it. That's not the same thing.

---

### Track 1 — Pure JavaScript & TypeScript Fundamentals

This is the foundation. Most of what you "know about React" is actually JavaScript wearing a React-shaped hat. Get this solid first.

**JavaScript concepts:**
- `var` vs `let` vs `const` — scoping mechanics, not just "use const"
- Hoisting — what gets hoisted (declarations) vs what doesn't (assignments)
- The execution context and the call stack
- Closures — what they are, why they happen, when they're a feature vs a leak. Be able to write three different closure examples from scratch.
- The `this` keyword — five contexts (global, function, method, constructor, arrow). Arrow functions don't have their own `this`. Know why.
- `bind`, `call`, `apply` — differences, when to use each
- Prototypes and prototypal inheritance — what `__proto__` is, what `prototype` is, why they're different
- `class` syntax — what it actually compiles to (still prototypes)
- Primitives vs reference types — `===` for primitives compares values, for objects compares references
- Pass by value vs pass by reference — what happens when you pass an object to a function
- Equality: `==` vs `===`, `Object.is`, `NaN === NaN` is false
- Truthy and falsy — list all six falsy values from memory
- Type coercion — when JS implicitly converts, common gotchas
- `Array.prototype.map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`, `flat`, `flatMap` — write each from scratch (write your own `myMap` that does what `map` does)
- Spread and rest operators — same `...` syntax, different meanings in different positions
- Destructuring — objects, arrays, with defaults, with renames, nested
- Optional chaining `?.` and nullish coalescing `??`
- Promises from scratch — `new Promise((resolve, reject) => ...)`, chaining, error handling
- `async`/`await` — sugar over promises. Know what an async function actually returns.
- Microtasks vs macrotasks — the event loop. Why `Promise.resolve().then(...)` runs before `setTimeout(..., 0)`.
- `setTimeout`, `setInterval`, `requestAnimationFrame` — when to use which
- Iterators and generators — `function*`, `yield`, `Symbol.iterator`
- `Map` vs `Object`, `Set` vs `Array` — when each is appropriate
- `Symbol` — what it's for (unique keys, well-known symbols)
- Error handling — `try`/`catch`/`finally`, throwing custom errors
- Modules — ESM `import`/`export`, default vs named, dynamic `import()`
- IIFE — what it is, why it existed (mostly historical now)
- Currying and partial application — what they are, why they exist

**TypeScript concepts:**
- Why TypeScript exists — what it adds, what it doesn't (it's gone at runtime)
- Basic types vs interfaces — when to use each, can you mix them
- `type` vs `interface` — concrete differences (extending, declaration merging, computed properties)
- Union types `A | B` and intersection types `A & B`
- Literal types and template literal types
- `unknown` vs `any` vs `never` — what each means and when to reach for it
- Generics from scratch — `<T>`, multiple type params, constraints (`extends`)
- Utility types — `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, V>`, `ReturnType<T>`, `Parameters<T>`, `Awaited<T>`
- Mapped types — `{ [K in keyof T]: ... }`
- Conditional types — `T extends U ? X : Y`
- `infer` keyword
- `keyof`, `typeof`, `in` operators
- Discriminated unions and exhaustive checks
- Type narrowing — `typeof`, `instanceof`, `in`, user-defined type guards
- Type assertion (`as`) — what it does, why it's dangerous, when it's justified
- Index signatures
- `readonly`, `as const`
- Function types — function expression syntax, callable interfaces, overloads
- Module augmentation and declaration merging
- `tsconfig.json` — the flags that matter: `strict`, `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`

**Drills:**
- Implement your own `map`, `filter`, `reduce` from scratch. No copying.
- Implement your own `Promise` from scratch (just the basics — resolve, reject, then).
- Implement a debounce function. Then throttle. Then explain the difference cold.
- Implement a deep clone function. Discuss the limitations (circular refs, special objects).
- Write a generic `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>` from scratch.
- Take a complex Redux action creator type from RTK source and explain what every generic param does.

**Reference resources:**
- **MDN** for every JS concept above. Default reference, always.
- **javascript.info** — best free deep-dive book on JS fundamentals. Work through it.
- **TypeScript Handbook** — official docs, the chapter on Generics specifically.
- **You Don't Know JS (Kyle Simpson)** — old but the chapters on `this`, scope, prototypes are still the clearest explanations anywhere.
- **Total TypeScript (Matt Pocock)** — free tier covers most utility types deeply.

---

### Track 2 — React Internals & Hooks Deep Dive

You can use React. You can't yet explain *why* React behaves the way it does. That's the senior-vs-mid line.

**Conceptual:**
- What React actually is — a library that diffs virtual DOM and updates real DOM. Why this matters.
- The render phase vs the commit phase
- Reconciliation — how React decides what changed. The role of keys in lists.
- Why immutability matters in React state — reference equality and `===` checks in reconciliation
- The component lifecycle in modern (function) components — mount, update, unmount, mapped to hooks
- StrictMode — what it actually does in dev (double-invokes), why
- Controlled vs uncontrolled components
- Composition over inheritance — why React has no `extends Component` for sharing logic
- Lifting state up — what it means, when to do it, when *not* to (don't lift everything to the top)
- Prop drilling — what it is, when it's actually a problem (often it isn't)
- Render props pattern, HOCs (mostly historical now but you should know them)
- Children as a prop — `props.children` is just a prop, you can pass it explicitly

**Hooks — for each, understand cold:**
- `useState` — what calling the setter actually does (schedules a re-render, doesn't mutate immediately). Functional updates (`setX(prev => ...)`) and why they matter.
- `useEffect` — when it runs (after commit, after paint), the dependency array as the *only* signal of "what this effect depends on," cleanup function and when it runs, infinite loops and how to avoid them. **You should be able to explain the entire lifecycle of a single `useEffect` call.**
- `useLayoutEffect` — same as `useEffect` but synchronous before paint. When you actually need it.
- `useRef` — two uses: DOM refs and mutable values that don't trigger re-renders
- `useMemo` — caches a computed value across renders, only recomputes when deps change. When it's actually useful (rarely; it's overused).
- `useCallback` — caches a function reference. Same caveats. Both `useMemo` and `useCallback` are *performance optimizations*, not correctness tools. Don't sprinkle them.
- `useReducer` — when it beats `useState`. Reducer pattern as a constraint on how state can change.
- `useContext` — what it is, what it isn't (not a state manager).
- `useId` — for accessible IDs
- `useTransition` and `useDeferredValue` — concurrent rendering features
- `useSyncExternalStore` — for subscribing to external stores (this is what Redux uses under the hood)
- Custom hooks — they're just functions starting with `use` that follow hook rules. Nothing magical.

**Rules of hooks — know cold why these rules exist:**
- Only call hooks at the top level
- Only call hooks from React functions
- The dependency between "hook call order" and React's internal hook list — this is the underlying reason for the rules

**Patterns:**
- Custom hooks for reusable stateful logic — write `useFetch`, `useLocalStorage`, `useDebounce`, `useMediaQuery`, `usePrevious`, `useOnClickOutside` from scratch.
- The "render twice" problem in StrictMode and what it teaches you about effect cleanup
- Stale closure problem — what it is, three ways to fix it
- Why `useEffect` with `[]` deps is *not* `componentDidMount` (close, but not identical)
- The "you might not need an effect" rule — Dan Abramov's blog post is required reading. Most `useEffect`s shouldn't exist.

**Drills:**
- Build `useFetch(url)` from scratch with loading/error/data states, abort on unmount, refetch when url changes. Explain why each `useEffect` dep is there.
- Build `useDebounce(value, delay)` from scratch.
- Build a custom hook that subscribes to `window.matchMedia` for dark mode.
- Build a toggle button as a component, then refactor to extract `useToggle()` custom hook.
- Take a React component that uses `useEffect` for derived state and refactor to compute the value inline. Explain why this is better.

**Reference resources:**
- **react.dev** — the new React docs. Read end to end. Not skim — read.
- **"You Might Not Need an Effect"** ([react.dev/learn/you-might-not-need-an-effect](https://react.dev/learn/you-might-not-need-an-effect)) — required reading, twice.
- **"A Complete Guide to useEffect" by Dan Abramov** ([overreacted.io/a-complete-guide-to-useeffect](https://overreacted.io/a-complete-guide-to-useeffect/)) — the deepest single resource on `useEffect`. Will hurt to read. Reread quarterly.
- **"How Does setState Know What Component to Update?" by Dan Abramov** — short, mind-bending.
- **Kent C. Dodds blog** — the Epic React stuff. His "useEffect vs useLayoutEffect" post specifically.
- **React source code reading** (later) — `ReactFiberHooks.js`. Start with `useState` implementation.

---

### Track 3 — Testing

You currently know zero testing. This is fixable in 4–6 focused weeks of part-time work.

**Concepts:**
- What testing is and why it exists — see this conversation for the entry-level explanation.
- The testing pyramid (or trophy) — unit, integration, e2e, static. Kent C. Dodds's "trophy" reframe.
- Test isolation — why each test must be independent. `beforeEach`, `afterEach` for setup/teardown.
- AAA pattern — Arrange, Act, Assert. Structure every test this way.
- What to test vs what not to test — implementation details vs user-observable behavior
- The Testing Library philosophy: "the more your tests resemble the way your software is used, the more confidence they can give you."
- Why query priority matters: `getByRole` > `getByLabelText` > `getByPlaceholderText` > ... > `getByTestId` (last resort).
- `get*` vs `query*` vs `find*` — synchronous vs async, throws vs returns null.
- Mocking — what it is, when it's appropriate, when it's a smell
- Mock at boundaries (network, time, randomness). Don't mock your own modules unless forced.
- Coverage as a metric — necessary but not sufficient. 100% coverage with bad assertions = bad tests.

**Tools (current 2026 stack):**
- **Vitest** — test runner. Replaces Jest in Vite projects.
- **React Testing Library** — render and query helpers.
- **@testing-library/user-event** — simulate real user interactions. Always prefer over `fireEvent`.
- **MSW (Mock Service Worker)** — mock network requests at the service worker layer. Works for tests and dev.
- **jsdom** — fake browser environment that runs in Node.

**Concepts to drill:**
- Render a component, query for elements by role
- Simulate clicks, typing, form submission
- Assert on visible text and accessible attributes
- Test async behavior with `findBy*` and `waitFor`
- Test a custom hook with `renderHook`
- Mock an RTK Query endpoint with MSW
- Test that an effect cleanup runs (using a spy)
- Test error states, loading states, empty states — not just happy paths

**Drills (in order, in your existing task app):**
1. Write `add(a, b)` test as hello world.
2. Test `<Greeting name="..." />` — render and assert.
3. Test the `auth-form` — fill fields, submit, assert callback fires with right values.
4. Test the password-mismatch validation.
5. Test `protected-route` — both authed and unauthed states.
6. Test `useAuthBootstrap` — mock localStorage, assert it dispatches.
7. Test `task-table` — render with mock tasks, assert rows exist, click edit, assert handler fires.
8. Test the create-task flow end to end — open modal, fill form, submit, assert task appears.
9. Test the RTK Query `getTasks` with MSW providing a mock server response.
10. Test the error path — MSW returns 500, assert error UI shows up.

**Reference resources:**
- **Kent C. Dodds — Common mistakes with React Testing Library** ([kentcdodds.com/blog/common-mistakes-with-react-testing-library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library))
- **Vitest docs** ([vitest.dev/guide](https://vitest.dev/guide/))
- **Testing Library docs** ([testing-library.com](https://testing-library.com/))
- **MSW docs** ([mswjs.io](https://mswjs.io/))
- **Kent C. Dodds — Testing JavaScript course** ([testingjavascript.com](https://testingjavascript.com)) — paid, gold standard. Buy after free resources stop being useful.
- **Kent C. Dodds — Static vs Unit vs Integration vs E2E** ([kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests))

---

### Track 4 — System Design & Architecture

This is where senior-level conversations happen in interviews. You can already build things — now learn to design them.

**Frontend architecture concepts:**
- Component design — when to break a component up, when to keep it together. Single Responsibility for components.
- Composition patterns — compound components, render props (still relevant), slot pattern, headless components.
- State colocation — keep state as close to where it's used as possible. Don't lift prematurely.
- Three categories of state: server state, client state, URL state. Each has its own tools.
- Server state vs client state — why React Query / RTK Query exist as a separate category from Redux.
- Forms — controlled vs uncontrolled, when to reach for React Hook Form / Formik.
- Routing patterns — protected routes, layouts, redirects, loaders.
- Code splitting — `React.lazy`, dynamic imports, route-level splitting.
- Bundle optimization — what tree-shaking actually requires (ESM, side-effect-free).
- Performance: re-render mechanics, `React.memo`, `useMemo`, `useCallback` — when they actually help, when they're noise.
- The "react-window" virtualization pattern for long lists.
- Suspense and concurrent features.
- Error boundaries — they only catch render errors, not async errors. Limitation matters.
- Accessibility (a11y) — semantic HTML, ARIA when semantic HTML isn't enough, keyboard nav, focus management.
- SSR vs SSG vs CSR vs ISR vs RSC — what each means, tradeoffs.
- Hydration — what it is, why hydration errors happen, how to fix them.

**Senior interview design questions to be able to answer:**
- "Design Twitter's feed" — focus on infinite scroll, pagination, optimistic UI, prefetch.
- "Design an autocomplete component" — debouncing, race conditions, accessibility, caching.
- "Design Google Drive's file list" — large lists, virtualization, multi-select, drag-and-drop.
- "Design a real-time chat" — WebSockets, optimistic sending, ordering guarantees, offline.
- "Design an image-heavy gallery" — lazy loading, intersection observer, layout shift prevention.
- "Build a global state management strategy for a 50-page enterprise app" — what goes in Redux, what goes in URL, what stays local.

**Frontend system design concepts:**
- Caching strategies — HTTP cache, service worker, in-memory, RTK Query cache.
- API design from the consumer side — REST vs GraphQL tradeoffs, when each wins.
- WebSockets vs SSE vs long-polling — when to reach for each.
- Authentication patterns — JWT, refresh tokens, session cookies, OAuth flows. Where each is stored and why.
- CORS — what it is, what the browser actually does, when you control it vs when you don't.
- Web performance metrics — LCP, FID, CLS, INP. What each measures, how to improve each.
- Critical rendering path — what blocks the first paint, how to unblock it.
- Image optimization — formats, lazy loading, responsive images, `srcset`.
- Security — XSS, CSRF, clickjacking, content security policy.

**Drills:**
- For each interview question above, write a 1-page design doc. Constraints, components, state, data flow, edge cases, what you'd do in v1 vs v2.
- Take your task app and write a "what would I do differently if this had to scale to 10,000 tasks per user" doc.
- Sketch the architecture of the Vercel dashboard. What's server state, what's client state, what's URL state?

**Reference resources:**
- **"Patterns.dev"** (patterns.dev) by Lydia Hallie & Addy Osmani — go-to reference for design patterns.
- **"Bulletproof React"** by Alan Alickovic (github.com/alan2207/bulletproof-react) — production-grade React project structure. Read the whole repo.
- **"Frontend System Design Interview Guide"** — search for Greatfrontend's guide.
- **"Designing Data-Intensive Applications" by Martin Kleppmann** — backend-heavy but the chapters on caching and consistency apply.
- **Web.dev** for performance and web platform.
- **React Patterns** by Michael Chan.

---

### Track 5 — Clean Code & Communication

This is the track that directly addresses the "couldn't communicate" interview feedback. It's the lowest-tech track but possibly the highest-leverage.

**Clean code concepts:**
- Naming — variables, functions, components, files. A good name removes the need for a comment.
- Function size — small, single-purpose. Extract aggressively.
- Avoiding nested ternaries, deep conditionals. Early returns over nesting.
- Magic numbers/strings — name them.
- Dead code — delete it. Don't keep "just in case." Git remembers.
- Comments — explain *why*, never *what*. If your code needs a "what" comment, rename or refactor.
- The "boy scout rule" — leave code cleaner than you found it.
- DRY (Don't Repeat Yourself) — but also know WET (Write Everything Twice) as the counter. Duplicate before abstracting prematurely.
- The "Rule of Three" — abstract on the third repetition, not the second.
- Cohesion and coupling — high cohesion, low coupling.

**Code-review-able patterns:**
- Components that do too much (over 200 lines, multiple responsibilities)
- Props drilling 4+ levels deep
- `any` in TypeScript without justification
- `useEffect` doing work that should be event handler work
- Inline functions in props when they cause perf issues (most don't, but know when they do)
- Magic strings for action types, route names, etc.
- Duplicate utility functions across files

**Communication drills (this is the actual interview-relevant work):**
- **The 60-second teach test.** Pick a concept. Set a timer. Explain it out loud to nobody, in 60 seconds, no notes. Record yourself. Play it back. Was it clear? Did you waffle? Were there filler words? Do this daily.
- **The "explain this commit" drill.** Open a recent commit. Explain in writing what changed and why, as if to a teammate. Then a stranger. Then a non-technical PM. Three audiences.
- **Rubber duck debugging.** When stuck, explain the problem out loud as if to someone who knows nothing. Often you solve it mid-explanation.
- **The whiteboard drill.** Pick an interview design question. Whiteboard it (literal whiteboard or Excalidraw). Talk through it out loud. Time-box: 30 minutes. Then critique your own performance.
- **Blog posts.** Write a 500-word explainer on something you just learned. Don't publish if you don't want — but writing forces the model to clarify.

**Communication anti-patterns to catch in yourself:**
- "Kinda," "sorta," "I think" before assertions you're actually sure of. Hedging weakens.
- Filler words: "basically," "essentially," "like." Cut them.
- Starting with the technical detail before the high-level frame. Always: what is it, then why, then how.
- Going deeper than the question asked. If they ask "what's a closure," they don't yet want compiler internals. Read the room.
- Explaining what you know about adjacent topics instead of admitting "I don't know that." Senior is comfortable saying "I haven't worked with that, but my mental model would be..."

**Reference resources:**
- **"Clean Code" by Robert C. Martin** — controversial in places, but the naming and function chapters are gold.
- **"A Philosophy of Software Design" by John Ousterhout** — counter-balance to Clean Code. Modules, interfaces, complexity.
- **"The Pragmatic Programmer" by Hunt & Thomas** — broader engineering practice.
- **"On Writing Well" by William Zinsser** — written for journalists, but the chapter on clarity applies to verbal explanation too.
- **Patrick McKenzie (patio11) — "Don't Call Yourself a Programmer"** essay. Communication is the lever.

---

### Track 6 — Algorithms & Data Structures (DSA)

For senior frontend roles, DSA shows up but isn't the centerpiece. Get to "competent at medium LeetCode" — not Codeforces grandmaster.

**Required topics:**
- Big-O notation — time and space complexity for the operations on every data structure below.
- Arrays — random access O(1), insertion middle O(n), and why.
- Hash maps — average O(1) lookup, why "average" not "always."
- Linked lists — when they're actually better than arrays (rarely in frontend, but conceptually).
- Stacks and queues — LIFO vs FIFO, real use cases (undo/redo, BFS).
- Trees — binary tree, BST, traversal (preorder, inorder, postorder, level-order).
- Graphs — adjacency list vs adjacency matrix, BFS, DFS.
- Heaps and priority queues — what they're for, basic ops.
- Tries — for autocomplete-style problems.
- Sorting algorithms — quicksort, mergesort, conceptual. Know that `Array.prototype.sort` is Timsort.
- Two pointers, sliding window — pattern recognition.
- Recursion — base case, recursive case, why it can blow the stack. Convert recursion to iteration when needed.
- Dynamic programming — top-down (memoization) and bottom-up (tabulation). Easy DP only for frontend.

**Drill plan:**
- 80–100 problems on Neetcode 150 ([neetcode.io](https://neetcode.io)) over ~3 months at 1 problem/day.
- Focus on patterns, not solutions. After solving a problem, write down which pattern it was.
- Easy → Medium → some Hards. Don't grind Hards if you're consistently failing Mediums.
- Time-box: 30 minutes per problem. If stuck, look at the hint. If still stuck, look at the solution, understand it, then redo it from scratch the next day.

**Frontend-specific algorithmic interview problems:**
- Implement a debounce
- Implement throttle
- Implement `Promise.all` from scratch
- Implement an event emitter
- Implement curry
- Flatten a nested array
- Deep clone an object
- LRU cache
- Implement `JSON.stringify` (or just understand what it has to handle)
- DOM tree traversal problems

**Reference resources:**
- **Neetcode** (neetcode.io) — best free curated list.
- **"Cracking the Coding Interview"** — older but still useful for the framework.
- **"Grokking the Coding Interview"** ([designgurus.io](https://designgurus.io)) — pattern-based, paid.

---

## Part 4 — The "When Stuck, Do This" decision tree

When the developer is stuck or frustrated, walk through this tree:

1. **What are you actually trying to do?** Not what API are you trying to use — what user-facing or system behavior are you trying to produce? If they can't state this, restart from the goal.

2. **What's the smallest version of this problem?** Strip away everything not essential. Get the 5-line version working first.

3. **What does the error literally say?** Read it word for word. Don't skim. The error is usually the answer.

4. **What does `console.log` tell you?** If they haven't logged the suspicious value, that's the next step.

5. **Have you broken this assumption: "the data is the shape I expect"?** API responses lie. Props are wrong types. State is undefined. Verify, don't assume.

6. **What's the layer below this?** If they're stuck on `transformResponse`, the layer below is "what does a function returning a value mean." If they're stuck on generics, the layer below is "what is a function parameter, but for types." Drop down a level.

7. **Have they tried explaining it out loud?** Rubber duck. Often solves itself.

---

## Part 5 — Anti-patterns to call out

When you (the AI) see these in the developer's behavior, name them directly:

- **"Just give me the fix"** — they're skipping the understanding step. Push back. Explain the *why*, not just the *what*.
- **"Fastest way to learn X"** — there is no fast way to learn fundamentals. The fast way is the slow way done once instead of the half-fast way done five times.
- **"Can you just write it for me"** — for learning-mode work, no. Push back.
- **"I already know this"** but they're getting it wrong — verify with the four-question mastery test.
- **Jumping topics mid-session** — they're avoiding a layer that's frustrating. Bring them back: "Let's finish X before moving to Y."
- **Building before understanding** — the AURORA/harness pattern. Stop building, learn the underlying thing, then resume.

---

## Part 6 — Suggested concept-list-per-week pacing (illustrative, not prescriptive)

The developer picked "concept list, free-form" — so this is a sample of how a typical week could look, not a schedule to follow rigidly:

**A typical week:**
- 4 days × 30 min: fundamentals (JS or TS) — one concept per day from Track 1.
- 4 days × 30 min: React deep dive — one hook or pattern from Track 2.
- 3 days × 45 min: testing — a single test file, hands-on, in their task app.
- 2 days × 30 min: communication drill — the 60-second teach test for a concept they "learned" the prior week.
- 1 day × 1 hour: one DSA problem from Neetcode.
- 1 day × 1 hour: read one chapter of a book from the reference list.

**Total: ~12 hours/week.** Well within the 2–4hrs/day budget. Leaves slack for life and for project work.

---

## Part 7 — Closing rules

- **This document is a constitution, not a TODO list.** Don't try to complete it. Refer back to it. Use it to choose what to work on this week.
- **Mastery > completion.** Better to truly own 30 concepts than to have brushed against 200.
- **Building and learning are different modes.** Keep them separate. Learning mode is slow, deliberate, no AI shortcuts. Building mode is fast, AI-assisted, output-focused. Don't blur them.
- **The interview will come when it comes.** Don't sprint toward an arbitrary deadline. The skills compound.
- **Revisit this document monthly.** Note what concepts moved from "recognized" to "mastered." Note what was glossed over. Adjust focus.

---

*Generated as a coaching reference. Update freely as your understanding deepens. Save in repo root or `.claude/` directory so any AI assistant can pick it up.*
