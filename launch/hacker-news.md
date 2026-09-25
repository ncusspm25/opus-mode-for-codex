# Show HN draft

## Title

Show HN: Opus Mode for Codex - a skill for long-horizon agent work

## Link

https://github.com/ncusspm25/opus-mode-for-codex

## First comment

I built a small Codex skill to explore a recurring problem in long agent tasks:
the hard part is sometimes keeping earlier decisions active while the work
changes. A plausible fix is easy to mistake for a verified outcome.

The skill asks Codex to preserve a compact working state, reconcile new evidence,
check the relevant consumers of a shared change, and try one focused
counterexample before finishing. It also says to skip that overhead for simple
work. There are no tools or services attached to the skill.

Despite the name, it does not run Claude or call Anthropic. "Opus Mode" refers to
a working style, and this is an independent project. It does not change the model.

The repository includes an intentionally broken feature-flag fixture: a service
and a worker disagree about the string "false". There is a test matrix and a
protocol for comparing the same Codex configuration with and without the skill.
The examples describe intended behavior; I have no controlled benchmark results
showing an improvement yet.

I'd be interested in workloads where this helps, has no effect, or adds needless
work. Reproducible failures are particularly useful, including cases where the
baseline already does everything the skill asks for.
