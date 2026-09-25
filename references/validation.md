# v0.1.0 validation record

Performed on **2026-09-26 (Asia/Taipei)**. These are compatibility and smoke
checks, not a controlled evaluation of whether the skill improves Codex.

## Environment and artifact

- Windows, Codex CLI `0.155.0-alpha.9.2`, Node.js `v24.18.0`.
- Behavioral smoke test: `gpt-6-astra`, reasoning effort `high`.
- Skill: 751 whitespace-delimited words, 451-character description.
- `SKILL.md` SHA-256 (UTF-8, LF):
  `6a824bf4d8a3cafa2e2ffbe9a1afbae10037dade3fa0c5ba828efcef2f4b0e74`.
- Installation: copied `SKILL.md`, `references/`, and `agents/` into an isolated
  project's `.agents/skills/opus-mode-for-codex/` directory. Local security scans
  passed. No packages were installed and no global skill settings were changed
  by this validation.

## Format and discovery

Checked required frontmatter and Agent Skills name/description limits. The actual
Codex app-server `skills/list` response reported one matching skill, `scope: repo`,
`enabled: true`, and no errors for this skill. The display name, short description,
and default prompt from `agents/openai.yaml` were parsed correctly.

This verifies the installed client's parser and discovery. It is not a test of
every Codex version or of distribution through a plugin directory.

## Debugging smoke test

The [fixture](../benchmarks/fixtures/flag-normalization/README.md) was copied into
a scratch project, excluding its evaluator README. A fresh Codex invocation
received the documented task with `Use $opus-mode-for-codex.` prepended, plus
test-only boundaries: apply only this skill, do not install anything or use
external connectors, and edit only the scratch fixture. Existing personal
instructions remained active. The skill's actual file read appears in the trace.

| Observation | Actual result |
| --- | --- |
| Unmodified fixture, independently executed | 22 tests; 7 passed, 15 failed; exit 1, as expected |
| Root-cause finding | Truthiness in the shared parser; separate exact comparison in the service |
| Final change | `flags.mjs` and `service.mjs` only; 11 added lines, 2 removed |
| Public exports, signatures, output shapes | Preserved; acceptance checks passed |
| Existing tests and worker | Byte-for-byte unchanged |
| Agent's in-process fallback | 22 acceptance bodies and 27 additional invalid-value assertions passed |
| Independent standard runner after the fix | 22 passed, 0 failed; exit 0 |

The agent's process launches were blocked in its tool environment. Several
attempts to use Node's runner or an in-memory import failed. It ultimately ran
the unchanged acceptance bodies through a temporary local harness, adapting test
registration and import resolution. It accurately reported that limitation and
removed the temporary files. These failed attempts are part of the observation,
not discarded trials; they demonstrate overhead rather than a performance win.

The evaluator separately ran the original test file using:

```sh
node --test --test-reporter=tap flags.test.mjs
git diff --exit-code -- flags.test.mjs worker.mjs .agents
```

The standard runner's result was:

```text
1..22
# tests 22
# suites 0
# pass 22
# fail 0
# cancelled 0
# skipped 0
# todo 0
```

The observed code change is preserved in [smoke-fix.patch](smoke-fix.patch).
To reproduce the artifact check, copy the four fixture `.mjs` files into an empty
directory, apply that patch there with `git apply`, and run the test command.
This reproduces the artifact's behavior, not the stochastic agent run.

## Trivial prompt

A separate fresh session received only:

```text
Correct only the spelling: "The recieve queue is ready."
```

It returned `The receive queue is ready.` with no tool calls. The skill remained
discoverable, but this machine's user instructions disallow implicit activation.
Therefore this result does **not** isolate the description's ability to prevent
unnecessary activation in a default installation.

A third fresh session explicitly invoked `$opus-mode-for-codex` for the same typo.
It produced a short acknowledgement and the corrected sentence, with no tool
calls or multi-step plan. This checks the visible response to a trivial explicit
invocation, not a hidden reasoning process.

## Documentation checks

Reviewed repository files for English content, consistent naming, unsupported
claims, unfinished markers, local paths, and secrets. Checked relative Markdown
link targets, fenced blocks, metadata bounds, and that `SKILL.md` is smaller than
the README. Primary documentation links returned HTTP 200. The single X draft
fits 280 characters with its URL counted as 23 characters.

These checks are bounded reviews, not a guarantee that no issue can exist. The
source fixture intentionally remains broken so others can reproduce the task.

## Not established

- No controlled baseline Codex comparison, quality gain, token saving, latency
  improvement, or statistical significance.
- No real long-conversation compaction or cross-session persistence evaluation;
  the smoke prompt supplied earlier decisions directly.
- No default-policy implicit activation evaluation, or macOS/Linux behavioral
  test. Shell installation commands follow the documented folder layout.
- No built-in `$skill-installer` run, plugin-directory installation, or exhaustive
  compatibility matrix. No external social posts were made by the release task.

Use the [benchmark protocol](../benchmarks/README.md) to evaluate effectiveness.
