# TEST_RESULTS.md — Weirdest Job Title: Blind Judge Showdown

Entry: `Pigeon Divorce Lawyer` — 21 chars, 21 bytes, one line, no trailing newline.
Run date: 2026-11-24 ~18:40 WIB. Node v24.22.1.

## 1. Local run (repo dir)

```sh
OUTPUT_DIR=/tmp/weird-job-out node main.ts
# exit=0
```

- `/tmp/weird-job-out/entry.txt`: 21 bytes
- Content (JSON): `"Pigeon Divorce Lawyer"`
- Trailing newline: false
- sha256: `d9f3b4c79181ca239189ff03270b5cb37df18ce73a7804c91babfc8a836c305d`

## 2. Clean-dir run (independent verification)

```sh
cp -r repo /tmp/weird-job-clean
cd /tmp/weird-job-clean
OUTPUT_DIR=/tmp/weird-job-clean-out node main.ts
# exit=0
```

- sha256: `d9f3b4c79181ca239189ff03270b5cb37df18ce73a7804c91babfc8a836c305d`
- `cmp` vs local run output: **BYTE-EXACT MATCH**
- bytes: 21, chars: 21, trailing newline: false

## 3. Gate check (from RULES.txt)

- UTF-8 text: yes (pure ASCII)
- 1–60 characters: 21 — PASS
- Not only whitespace: PASS
- One line: PASS

## 4. Zero-fail QA

- Node stdlib only (`node:fs`, `node:path`); no dependencies, no install step.
- No network calls in `main.ts` (grep for `http`/`fetch`/`require(`: nothing).
- No secrets, no API keys, no hardcoded local paths (output dir defaults to
  the competition-mandated `/output`, overridable via `$OUTPUT_DIR`).
- Deterministic: same 21 bytes on every run (verified across two directories).

## 5. Selection evidence

- SolAPI gpt-6.1-sol: HTTP 503 on both attempts (helper retried internally);
  drafting + judging done in-session per task instructions.
- 8 candidates, full round-robin 28 pairs, margins 1–5: winner
  "Pigeon Divorce Mediator" (7–0). Pass 2 critique: "Pigeon Divorce Lawyer"
  beats it head-to-head, margin 1; final score 98/100.
