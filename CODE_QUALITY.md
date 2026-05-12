# Code Quality Reference

Personal reference. Updated periodically.

---

## What's in place

### ESLint
Already configured via `eslint.config.js`. Catches code quality issues — unused vars, bad patterns, React hooks rules.

Run manually:
```bash
npm run lint
```

### TypeScript Strict Mode
Enabled in `tsconfig.app.json`. Catches unused locals, unused params, type errors at compile time.

### Prettier
Handles formatting — indentation, quotes, semicolons, line length. Config lives in `.prettierrc`.

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 100
}
```

Format all files:
```bash
npx prettier --write "src/**/*.{ts,tsx}"
```

Format everything including root config files:
```bash
npx prettier --write "src/**/*.{ts,tsx}" "*.{ts,js,json}"
```

`eslint-config-prettier` is installed to turn off ESLint rules that conflict with Prettier.

### Husky + lint-staged
Enforcement layer. Runs ESLint and Prettier automatically on every `git commit` — only on staged files.

Configured in `package.json`:
```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

Bad code can't get committed without fixing it first.

---

## ESLint rules to add

Add to `eslint.config.js` rules to catch common issues:

```js
"no-console": "warn"  // flags console.logs so they don't sneak into production
```

---

## Things to watch for

- `console.log` statements left in API files — use the `no-console` ESLint rule
- Unused variables assigned but never used — TypeScript strict mode catches these
- No error state shown to the user when API calls fail — handle `isError` from RTK Query hooks
