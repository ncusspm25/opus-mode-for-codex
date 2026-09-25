# Technical community draft

Before posting, check the selected community's current self-promotion and AI
content rules. Choose one relevant community; this file does not assert that
any community permits the post.

## Title

I made a small Codex skill for preserving decisions across long tasks

## Body

A long debugging task can fail even after a plausible patch: an earlier API
constraint gets lost, a second caller still behaves differently, or the final
answer says "fixed" without checking the actual failure.

I built **Opus Mode for Codex** as a small, instruction-only skill to test whether
making those execution habits explicit helps. It keeps a compact task state,
reconciles new evidence, checks shared behavior, tries one useful counterexample,
and scales verification to the consequences of being wrong.

A concrete example in the repo: the service treats a flag as enabled only for
the exact string "true", while the worker uses JavaScript truthiness. Patching
only the worker misses the other inconsistency. The runnable fixture includes
tests for both consumers and an unchanged-public-API constraint.

The name describes a working style. It does **not** run Claude, call Anthropic,
or switch your Codex model. It also explicitly excludes typo fixes and other
simple tasks from the extra process.

There are no controlled benchmark results yet. The repository includes a paired
evaluation protocol so people can test this against their own baseline and
report failures or overhead, not just good-looking answers.

Code, installation, and reproducible task:
https://github.com/ncusspm25/opus-mode-for-codex

Which is harder in your long Codex sessions: keeping earlier decisions active,
finding the actual cause, or checking that a change is consistent everywhere it
matters? A small reproducible example would help shape the next version.
