# Social launch drafts

## Single post

I built Opus Mode for Codex: a small skill for keeping earlier decisions active, checking shared behavior, and verifying before calling work done. No Claude calls or model switch. Includes a reproducible test task; no benchmark claims.

https://github.com/ncusspm25/opus-mode-for-codex

## Thread

1/ A long agent task can go wrong when an earlier constraint disappears from the
working state. I built Opus Mode for Codex to explore whether a small reusable
skill helps with that execution problem.

2/ The habits: preserve decisions, synthesize context, inspect related consumers,
trace the cause, try one counterexample, and verify proportionally. Simple work
should stay simple.

3/ The demo task has two flag consumers that disagree about "false". Fixing one
path is insufficient. The repository includes the broken fixture, acceptance
tests, and a protocol for comparing the same Codex setup with and without the skill.

4/ It does not run Claude or change your model. No controlled benchmark results
yet. Reports where it fails or adds overhead are as useful as successes.

https://github.com/ncusspm25/opus-mode-for-codex
