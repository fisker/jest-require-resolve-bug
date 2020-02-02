# Step

On root run

```bash
node -p "require.resolve('foo/node_modules/bar', {paths: [process.cwd()]})"
```

Should see `Error: Cannot find module 'foo/node_modules/bar'`

---


Run `yarn test`

Tests not passed