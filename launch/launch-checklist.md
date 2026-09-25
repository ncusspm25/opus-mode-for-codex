# Launch checklist

Goal: earn genuine adoption and, over time, a possible path to 1,000 stars.
That number is an aspiration, not a forecast or an acceptance test. Installation
success, repeated use, reproducible failure reports, and contribution quality
are more actionable early signals. Do not imply that the skill's benefit has
been established before controlled results exist.

## Before launch

- Review every file, the installation paths, official format, local links, and
  the distinction between examples, smoke checks, and benchmark evidence.
- Validate discovery, explicit invocation, and a trivial prompt in a clean test
  project. Publish the actual scope and limits in the validation record.
- Confirm the public repository, description, topics, clean commit, `v0.1.0`
  tag, and release all reference the intended version.
- Verify the installation commands from the published tag and check public links.
- Use the README's behavior table and diagram as simple shareable visuals. Label
  them intended behavior; never present an illustrative transcript as a real run.
- Run the reproducible fixture and prepare to explain both the shared parser and
  the second consumer. Keep comparative claims pending controlled trials.
- Review the HN, Reddit, and X drafts for factual accuracy at posting time.

## Launch day

1. Verify the GitHub release and installation once more only if files changed.
2. Manually submit the [Show HN draft](hacker-news.md) and its technical first comment.
3. If current community rules permit it, post the [Reddit draft](reddit.md) to one
   relevant technical community. Adapt to its audience and disclose authorship.
4. Publish the [single social post](x-post.md) or thread.
5. Answer technical questions, reproduce installation problems, and collect
   failure cases. Do not post automatically or ask people for artificial engagement.

## After launch

- In the first week, prioritize broken installation and misleading wording.
  Convert reproducible community failures into benchmark tasks with permission
  and appropriate redaction.
- In the next iteration, run repeated paired evaluations, including cases likely
  to favor baseline. Publish raw evidence and costs alongside outcome scores.
- Change skill wording only when there is a concrete reason. Record regressions
  and release a scoped `v0.2.0` when the evidence supports it.
- Share a follow-up when there are actual results or a material improvement.
  Avoid repeating the same promotional post across communities.
- Review available aggregate repository traffic and voluntary feedback without
  adding tracking to the skill. Do not buy stars, use bots, mass-DM people, or
  manufacture popularity.

## Maintainer release commands

For a repository that already exists, push only the intended branch and tag.
After local review and a clean commit, GitHub CLI users can run:

```sh
git push origin main
git push origin v0.1.0
gh release create v0.1.0 --repo ncusspm25/opus-mode-for-codex --verify-tag --title "Opus Mode for Codex v0.1.0" --notes-file launch/release-notes-v0.1.0.md
```

These commands document first-release publishing; do not rerun release creation
if the release already exists. Future releases need their own reviewed version,
tag, and notes. No social post is part of the Git release commands.
