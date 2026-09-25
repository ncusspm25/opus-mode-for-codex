# Long conversation continuation

Illustrative conversation; no persistent-memory capability is implied.

Early user instruction:

> Keep `loadConfig(env)` and its return shape unchanged. External clients rely on it.

Later verified result:

> The queue contains one job per request. Duplicate enqueueing is ruled out.

After an interruption:

```text
Use $opus-mode-for-codex. Continue from the current diff and our earlier findings.
```

Recover an operational checkpoint from available context:

```text
Objective: stop exports when explicitly disabled.
Constraint: preserve loadConfig(env) and its return shape.
Established: queue duplication ruled out by job IDs.
Rejected: changing the public API to pass a new options object.
Artifact: parser draft exists; worker wiring is not yet checked.
Open: whether the service and worker normalize strings identically.
Next: inspect both callers, then run the shared input matrix.
```

The checkpoint is shown here to explain the behavior. An actual agent should
surface it only if useful, then continue the work. It should not restart the
queue investigation or treat the parser draft as a verified fix.

If earlier context or the diff is unavailable, recover it from accessible
artifacts or ask for the missing decision. Do not reconstruct imaginary history.
If the user later approves an API change, update the constraint explicitly.
