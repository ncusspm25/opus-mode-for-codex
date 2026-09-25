# Baseline vs. Opus Mode: a reproducible task

This page defines an experiment. It does not contain fabricated model outputs
or claim a measured benefit. The [validation record](../references/validation.md)
documents any actual smoke runs separately.

Use the [feature-flag fixture](../benchmarks/fixtures/flag-normalization/README.md).
Create two empty scratch directories and copy the fixture's four `.mjs` files
into each. Do not copy the evaluator README into the agent's working directory.
Confirm the same initial failures with `node --test flags.test.mjs` in both.

Use fresh Codex sessions with the same model, effort, instructions, permissions,
and tool access. Baseline must not discover this skill from personal, ancestor,
or project skill folders. For treatment, install it only in that scratch
project's `.agents/skills/opus-mode-for-codex/` directory. Keep agent edits within
each scratch directory; do not modify the source fixture in this repository.

Send the fixture's task prompt unchanged to baseline. Prepend
`Use $opus-mode-for-codex.` for treatment. The intended difference is attention to
earlier constraints, the two parsing paths, a focused counterexample, and honest
verification. Baseline may already do all of these things.

After each run, independently execute the test matrix and inspect the diff.
Compare correctness and unnecessary work, not how closely the answer repeats
the skill's headings. Record the exact versions and all attempts using the
[benchmark protocol](../benchmarks/README.md).

One successful treatment run demonstrates that a workflow can execute. It cannot
show whether the skill caused better results, preserved state through a real
long conversation, or reduced costs.
