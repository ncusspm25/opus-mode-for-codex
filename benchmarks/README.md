# Benchmark protocol

**Status: no controlled baseline-versus-skill benchmark has been run for this
release.** Release smoke checks are documented in
[validation](../references/validation.md); they do not establish improvement.

Compare **Codex baseline** with **the same Codex + opus-mode-for-codex**.
The aim is to test outcomes and overhead, including cases where the skill hurts.

## Prepare a paired run

1. Freeze the task, initial files or commit, prompts, acceptance tests, permitted
   tools, environment, and time or token limit before running either condition.
   For live research, archive lawful source snapshots or record retrieval dates.
2. Use separate fresh sessions and copies of the same fixture. Keep model,
   reasoning effort, Codex version, permissions, network access, `AGENTS.md`,
   and other skills identical. Make this skill unavailable to baseline, including
   implicit discovery. Do not let either run read the other's output.
3. Deliver identical user messages. For the treatment, add only
   `Use $opus-mode-for-codex.` and make the versioned skill available.
   Record how installation and invocation were confirmed.
4. Alternate or randomize run order. Start with at least three paired runs for
   a pilot; that small sample is exploratory, not a general performance estimate.
   Repeat across tasks before making broad claims. Record every attempt.
5. Save the final artifact or diff, redacted tool transcript, test output, elapsed
   time, available token usage, and human interventions. Do not infer token savings
   from word counts. Keep timeouts and failures in the denominator.
6. Evaluate artifacts against the predefined criteria. Where practical, hide the
   condition label from reviewers. Retain evidence for each score and disclose
   that writing style or transcripts can reveal the condition.

Use the same dependency caches and source availability. For multi-turn tasks,
fix the user message sequence and interruption points. A trial with extra hints
or a different model is not a controlled pair; label it separately.

## Task categories

| Category | Task design | Evidence to inspect |
| --- | --- | --- |
| Long debugging | Symptom downstream of a seeded cause | Causal trace, final tests |
| Multi-file consistency | One invariant with multiple consumers | Shared input matrix, diff |
| Conversation continuation | Earlier constraint; later tempting shortcut | Constraint preserved after interruption |
| Ambiguous root cause | Plausible but ruled-out alternative | Whether the agent repeats or contradicts findings |
| Architecture change | Bounded interface migration | Compatibility and affected callers |
| Research synthesis | New source contradicts an earlier assumption | Dates, scope, revised conclusion |

The [feature-flag fixture](fixtures/flag-normalization/README.md) is a small
starting point for debugging and consistency. It is intentionally transparent
and cannot establish broad long-horizon performance. Add larger tasks and unseen
variants before drawing general conclusions.

## Score observable outcomes

Predefine which criteria apply. Use `N/A` when a metric is not relevant; never
turn an unavailable observation into a zero. Attach transcript, diff, or test
references to counts. A single failure can appear in multiple metrics; do not
sum the columns into an uncalibrated overall score.

| Metric | Operational definition |
| --- | --- |
| Forgotten constraints | Number of predefined constraints violated in the final artifact or actions |
| Premature completion | Yes/no: unqualified success claimed with an unmet required acceptance criterion |
| Incorrect root cause | Number of causal claims contradicted by the fixture oracle or reproducer |
| Unnecessary files changed | Changed files without a task-related justification, as judged with the diff |
| Regressions | Count of previously passing, independent acceptance cases now failing |
| Verification completeness | Relevant predefined checks actually executed / relevant checks required |
| Cross-file inconsistency | Number of predefined caller/input pairs violating the shared contract |
| Repeated investigation | Number of investigations repeated without changed evidence or a stated reason |
| Human corrections | Number of corrective hints beyond the fixed prompt sequence |
| Completion quality | 0: unusable; 1: partial; 2: requirements met with material gaps in evidence/reporting; 3: requirements and required evidence met, limitations accurate |
| Cost | Wall-clock time, available tokens, tool calls; report unavailable fields explicitly |

Report per-task results, paired differences, denominators, variation, and adverse
outcomes. For small pilots, report raw values and medians/ranges rather than
unsupported statistical or causal claims. A longer answer is not a success
metric. Verification claims must match actual executions.

## Run record

Each contributed result should include these fields, filled with actual values:

- Task ID and fixture commit/hash; skill tag and commit.
- Date, OS, runtime, Codex version, model, and reasoning effort.
- Condition, run number, order assignment, invocation/discovery evidence.
- Full user prompt sequence; relevant instructions, permissions, other skills.
- Limits, network/source state, start/end time, usage if exposed by the host.
- Artifact/diff, test commands and exit codes, sanitized transcript or excerpts.
- Every applicable metric, evidence references, evaluator, interventions.
- Failures, exclusions with reasons, limitations, and whether scoring was blinded.

Use the benchmark-result issue template. Do not upload private source code,
credentials, or personal data. If raw evidence cannot be shared, disclose that
the result cannot be fully reproduced. See [evaluation guidance](../references/evaluation.md).
