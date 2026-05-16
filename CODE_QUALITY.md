---

# Code Quality Reference

Personal reference. Updated periodically.

---

## Setup (do this once)

### 1. Install Prettier

```bash
npm install -D prettier eslint-config-prettier
```

Create `.prettierrc` at the project root:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 100
}
```

### 2. Hook Prettier into ESLint

In `eslint.config.js`, add `eslint-config-prettier` so ESLint doesn't fight Prettier on formatting rules:

```js
import prettier from "eslint-config-prettier";

export default [
  // ... your existing config
  prettier, // add this last
];
```

### 3. Install Husky + lint-staged

```bash
npm install -D husky lint-staged
npx husky init
```

In `.husky/pre-commit`, make sure it contains:

```bash
npx lint-staged
```

In `package.json`, add the lint-staged config:

```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

Now every `git commit` automatically runs ESLint and Prettier on staged files only. Bad code gets blocked before it gets in.

### 4. Add no-console ESLint rule

In `eslint.config.js` inside your rules block:

```js
rules: {
  "no-console": "warn",
  // ... your existing rules
}
```

### 5. Format all existing files (one-time cleanup)

After Prettier is installed, run this once to format everything:

```bash
npx prettier --write "src/**/*.{ts,tsx}" "*.{ts,js,json}"
```

---

## What's in place

### ESLint
Configured via `eslint.config.js`. Catches code quality issues — unused vars, bad patterns, React hooks rules.

Run manually:
```bash
npm run lint
```

### TypeScript Strict Mode
Enabled in `tsconfig.app.json`. Catches unused locals, unused params, type errors at compile time. Nothing to set up — already on.

### Prettier
Handles formatting — indentation, quotes, semicolons, line length. Config in `.prettierrc`.

Format all src files:
```bash
npx prettier --write "src/**/*.{ts,tsx}"
```

Format everything including root config files:
```bash
npx prettier --write "src/**/*.{ts,tsx}" "*.{ts,js,json}"
```

### Husky + lint-staged
Runs ESLint and Prettier on every `git commit` automatically — only on staged files. Nothing to run manually, it just works after setup.

---

## Things to watch for

- `console.log` statements left in API files — the `no-console` rule flags these
- Unused variables assigned but never used — TypeScript strict mode catches these
- No error state shown to the user when API calls fail — handle `isError` from RTK Query hooks