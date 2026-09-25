# Evaluation guidance

Separate three questions:

1. **Can the host load it?** Validate frontmatter, discovery, UI metadata, and an
   explicit invocation in an actual Codex client.
2. **Does it behave as intended on a sample?** Observe constraint preservation,
   investigation, verification, and accurate reporting. Check a trivial prompt
   for avoidable overhead. This is a smoke test, not a benchmark win.
3. **Does it improve outcomes?** Run controlled, repeated comparisons against the
   same Codex configuration without the skill, using predefined criteria.

Skill effects can be small or negative when baseline instructions already cover
the same habits. More tool calls, a longer answer, or a state summary is not
automatically better. Measure task outcomes and costs together.

For a continuation task, record each user turn and any interruption point.
Make the earlier constraints equally available to both conditions. Do not give
one condition a helpful summary the other never receives. Keep missing-state
tests separate from tests where state is merely easy to overlook.

For research, freeze source snapshots or record retrieval time and changed pages.
Distinguish a correct update based on a newer source from inconsistent reasoning.
For coding, execute acceptance tests independently of the agent's claims and
compare final diffs against the original constraints.

Use the [benchmark protocol](../benchmarks/README.md) for scoring and run records.
The [release validation](validation.md) reports compatibility separately from
behavioral efficacy.
