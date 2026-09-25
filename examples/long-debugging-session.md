# Long debugging session

Illustrative scenario, not a recorded model comparison.

An opt-out tenant still receives a background export. Earlier investigation has
already established that the queue does not duplicate jobs and that public API
shapes must remain unchanged.

```text
Use $opus-mode-for-codex.
Continue the export bug investigation. The queue duplication theory was ruled
out by the recorded job IDs. Preserve the API and find why EXPORT_ENABLED=false
still allows a worker to enqueue an export.
```

The failure appears in worker C. Config loader A receives the string `"false"`;
adapter B passes a boolean to C. Converting a nonempty string with `Boolean()`
in A changes the meaning before C sees it. A defensive guard in C may hide one
symptom while leaving other consumers wrong.

Useful working state: API stability is required; the queue theory is rejected
with evidence; flag conversion is still a hypothesis until the value is traced.
Inspect that conversion and the other flag consumers, fix the relevant boundary,
then exercise false, true, missing, invalid, and alternate-consumer cases.

A falsification attempt might check whether the service parses the same flag
differently. If it does, include that inconsistency in the fix. If it does not,
finish with the actual test evidence and any remaining limitation.

See the [runnable task](baseline-vs-opus-mode.md). Its initial failures are real
fixture failures; the scenario above is explanatory prose.
