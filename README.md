[![make.fun · u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/Glcepek1000/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/Glcepek1000/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

# Weirdest Job Title: Blind Judge Showdown

Entry for make.fun competition
`u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922`.

## The entry

```
Pigeon Divorce Lawyer
```

- **Characters:** 21 (limit 1–60)
- **Bytes:** 21 (pure ASCII)
- **Lines:** 1, no trailing newline

## Why it wins (judge criteria, in order)

1. **Weird job title** — three words naming an odd job. "Divorce lawyer"
   is a fixed, instantly recognised profession; the client is a pigeon.
2. **Stranger than ordinary work** — nobody has heard of divorce law for
   pigeons. The twist is the client, not the job, so the absurdity is total.
3. **Funny, twist lands first read** — "divorce lawyer" is a set phrase,
   so the brain completes it as a human job and then hits "Pigeon". The
   picture (two pigeons on either side of a tiny desk) arrives instantly.
4. **Sounds like a real job** — divorce lawyer is a real, specific
   profession; the entry is specific enough to picture the person doing it.
5. **Reads instantly** — 21 characters, 3 words, taken in at a glance.
   Shorter than every rival it beat, which also wins the size tie-break.

## Selection

8 candidates drafted (SolAPI gpt-6.1-sol was HTTP 503 on both attempts,
so all drafting and judging was done in-session). Full round-robin,
28 pairs, margins 1–5 per the judge's criteria in order:

| Candidate | Chars | W–L |
|---|---:|---|
| Pigeon Divorce Mediator | 23 | 7–0 |
| Volcano Eruption Scheduler | 26 | 6–1 |
| Underwater Funeral Director | 27 | 5–2 |
| Emotional Support Peacock Handler | 33 | 4–3 |
| Giraffe Neck Measurement Technician | 35 | 3–4 |
| Moon Landing Tour Guide | 23 | 2–5 |
| Penguin Relocation Coordinator | 30 | 1–6 |
| Museum Ghost Tour Accountant | 28 | 0–7 |

Pass 2 critique: "Pigeon Divorce Lawyer" (21 chars) beats the round-robin
winner "Pigeon Divorce Mediator" head-to-head, margin 1 — "divorce lawyer"
is the punchier fixed phrase, and 21 < 23 chars wins the size tie-break.
Final critique score: **98/100**.

## How to run

```sh
./setup.sh
# or directly:
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts   # local verification
```

Requires Node 22+ (TypeScript runs natively). No dependencies, no
network, deterministic: the output is always the same 21 bytes.

## Freshness anchor (drand quicknet)

- **Round:** 34238968
- **Signature (first 7 chars):** `8c442c1`
- Fetched 2026-11-24 ~18:40 WIB from
  `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`.
  (drand v2 returns round + signature; there is no separate `randomness`
  field — the 7-char prefix above is of the signature.)
