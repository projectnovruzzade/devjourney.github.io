# Features

Feature folders own landing-page content and future production workflows.

Recommended shape:

```txt
feature-name/
  components/
  data/
  hooks/
  types.ts
```

Routes should stay thin and import feature-owned UI and data contracts from here.
