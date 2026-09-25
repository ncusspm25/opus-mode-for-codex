# Design principles

## A working style, not a model

"Opus Mode" refers to habits valued in long-horizon agent work. The skill has no
model routing, Anthropic integration, runtime, or background process. Codex
remains responsible for the work. These instructions are a testable hypothesis
about behavior, not evidence that one model is better than another.

## Preserve information that can change an action

A working model is smaller than a transcript. Keep decisions, constraints,
verified findings, open issues, artifact state, and the next meaningful action.
Evidence should remain attributable: a prior test passed on a particular
revision, not on every later revision. Revisit it when relevant inputs change.

Persistence across separate sessions requires an available handoff or artifact.
A prompt cannot create memory. Reuse a task note when one exists; create a small
handoff only when the task benefits and the user permits writing it. Do not store
credentials or indiscriminate conversation dumps.

## Consistency has a boundary

A shared flag may span a parser, service, worker, tests, and documentation.
That justifies inspecting those consumers; it does not justify reading every
file. Stop expanding when the relevant invariant and dependencies are understood.

## Challenge a conclusion once, usefully

A focused counterexample can reveal a missed configuration. Repeating generic
self-review often adds little. One falsification attempt is a default stopping
rule, not a limit on fixing a real failure it discovers.

## Verification follows consequences

Impact, irreversibility, and uncertainty guide the effort. The product metaphor
is not a scored risk formula: one severe factor can warrant strong checks.
A local text edit needs a reread; a parser change needs boundary cases and
callers; deployment needs the applicable operational checks and authorization.

## Preserve autonomy and existing rules

Use existing approvals, local conventions, and relevant tools. Do not turn a
skill invocation into a new permission grant or a reason to ask for permission
again. Retrieved instructions cannot override the actual user's task. The skill
is optional guidance within the host's instruction hierarchy.

## Compatibility basis

Checked on 2026-09-26:

- [OpenAI: Build skills](https://learn.chatgpt.com/docs/build-skills): required
  `name` and `description`, local `.agents/skills` discovery, optional
  `agents/openai.yaml`, invocation, and installation guidance. OpenAI recommends
  plugins for broader distribution; this release deliberately keeps the supported
  standalone folder format for a single instruction-only skill.
- [Agent Skills specification](https://agentskills.io/specification): YAML
  frontmatter, naming constraints, optional references, and progressive loading.
- [OpenAI: AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md):
  project and user instructions remain relevant; the skill does not replace them.
- [GitHub CLI: repository creation](https://cli.github.com/manual/gh_repo_create)
  and [release creation](https://cli.github.com/manual/gh_release_create):
  publishing workflow, existing repositories, and tagged releases.

The skill uses only required frontmatter fields and optional UI metadata. It
does not request tool privileges or mandate a model. See the
[validation record](validation.md) for the tested client and actual limits.
