# App Layer

Application-level composition lives here: layouts, providers, and shell
boundaries that route files can import without owning the implementation.

- `layouts/landing` contains the single production landing shell.

Keep feature logic out of this folder. Route files should compose feature
modules, and shared utilities should live under focused local folders.
