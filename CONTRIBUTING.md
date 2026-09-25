# Contributing

Small, evidence-backed improvements are welcome. Useful contributions include
failure cases, benchmark tasks and runs, clearer instructions, and compatibility
reports. You do not need to agree with the product hypothesis to contribute.

## Report a failure

Open an issue with the relevant template. Include the task, expected and observed
behavior, Codex version, model and effort, skill commit or tag, invocation method,
and the smallest useful transcript or diff. Redact secrets and personal data.
State whether custom instructions or other skills may have affected the result.

## Propose a change

Explain the specific failure the change addresses and why the current wording
does not handle it. Keep the operational skill concise; put rationale in
references. Avoid duplicate rules, mandatory ceremonies, model comparisons
without evidence, and unrelated changes. Discuss a substantial redesign in an
issue before investing in it.

Review the whole changed instruction in context. Check the frontmatter against
the [Agent Skills specification](https://agentskills.io/specification), ensure
relative links resolve, and try one relevant complex task plus a trivial prompt
to look for unnecessary activation. Report what you actually tested and what
you could not test. Do not claim that a static review proves behavioral quality.

## Contribute evaluations

Follow the [benchmark protocol](benchmarks/README.md). Submit paired runs,
environment details, raw evidence that can safely be shared, and the scoring
rationale. Publish negative results and failures. Do not select only the best run
or silently exclude timeouts. Unpaired observations are welcome when labeled.

The feature-flag fixture is intentionally broken. Its initial test failures are
part of the task, not a repository health check. Change it only when improving
the benchmark, and explain any effect on comparability with older runs.

By contributing, you agree to license your contribution under this repository's
[MIT license](LICENSE). Keep discussions constructive and focused on observable
behavior.
