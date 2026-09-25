# Multi-file refactor

Illustrative scenario, not measured before/after output.

The HTTP service treats `EXPORT_ENABLED` as enabled only for the exact string
`"true"`. A worker treats any nonempty string as enabled. The agreed contract
accepts booleans and trimmed, case-insensitive `"true"` / `"false"`, with missing
or empty values disabled and other values rejected.

```text
Use $opus-mode-for-codex.
Make flag behavior consistent in the service and worker. Preserve their exported
functions and output shapes. Keep unrelated configuration behavior unchanged.
```

The consistency boundary includes the shared parser, both consumers, their tests,
and the documented accepted values. Search these uses before editing. A small
shared implementation is reasonable; redesigning the configuration framework
is outside the request.

Check both consumers with the same input matrix, including `" FALSE "` and an
invalid value. Inspect the final diff for API changes and unrelated edits. A
passing parser test alone does not establish that every consumer uses it.
