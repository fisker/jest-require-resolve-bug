# Steps

On root run

```bash
node -p "require.resolve('test', {paths: [process.cwd()]})"
```

Should see `Error: Cannot find module 'test'`

---


Run `yarn test`

Tests not passing.

---

issue: https://github.com/facebook/jest/issues/9502