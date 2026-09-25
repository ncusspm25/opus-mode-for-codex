# Feature-flag consistency fixture

This fixture intentionally contains bugs. It is a reproducible debugging task,
not production application code and not a benchmark result. Requires Node.js 22
or later; uses only built-in modules and installs no packages.

Copy this directory into an empty scratch directory before running an agent.
Run from that scratch directory:

```sh
node --test flags.test.mjs
```

The starting tests must fail. The task is finished only when the contract below
is met across both consumers with existing public APIs intact.

## Task prompt

```text
Continue debugging the export flag behavior in this fixture.
Earlier decisions: preserve all exported function names, signatures, and return
shapes. Do not add dependencies. Queue duplication was ruled out; do not restart
that investigation. Do not edit the acceptance tests to change the contract.

The service and worker disagree when EXPORT_ENABLED is "false".
Both must follow this contract:
- true / false booleans and trimmed, case-insensitive "true" / "false" strings
  have their corresponding boolean meaning;
- undefined, null, and empty or whitespace-only strings mean false;
- other values throw TypeError.

Find the cause, make the smallest coherent fix, verify both consumers, and report
what was checked and anything remaining. Work only in this fixture.
```

For the treatment run, prepend `Use $opus-mode-for-codex.`. Baseline receives
the identical prompt without that line and cannot discover the skill. See the
[protocol](../../README.md) for controlled trials.

## Acceptance and evaluator notes

`flags.test.mjs` is the visible acceptance matrix. It checks the parser, service,
worker, invalid inputs, and export shape. An evaluator should also inspect the
diff for unrelated edits, test changes, and a second parser that leaves the
shared contract fragmented. Verify the agent's completion claims against the
actual test exit status. Visible tests make this a transparent smoke fixture,
not a held-out evaluation.

Initial defects: the shared parser uses JavaScript truthiness, while the service
has its own exact string comparison. Fixing only one path leaves the other wrong.
Keep this evaluator explanation out of the agent's working copy for a controlled
run; copy only the four `.mjs` files. It is documented here for reproducibility.
