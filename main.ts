// Weirdest Job Title: Blind Judge Showdown
// Entry: "Pigeon Divorce Lawyer" (21 chars, 21 bytes, ASCII, one line, no trailing newline)
// Writes the entry to /output/entry.txt (or $OUTPUT_DIR/entry.txt for local verification).
// Node stdlib only. No network. Deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Pigeon Divorce Lawyer";
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// The gate requires 1-60 chars, UTF-8, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 60) {
  throw new Error(`entry length ${ENTRY.length} outside 1-60`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
