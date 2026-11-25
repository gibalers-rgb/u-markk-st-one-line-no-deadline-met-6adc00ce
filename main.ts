// One Line, No Deadline Met — make.fun bounty
// u-markk-st-one-line-no-deadline-met-6adc00ce
//
// The program writes exactly one single-line joke to /output/entry.txt:
// a one-sentence excuse for missing a deadline, under 200 characters,
// with the punch landing at the end. No network, no randomness, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I outsourced the deadline to future me, and future me filed for bankruptcy and left me holding the debt.";

const MAX_CHARS = 200;

function main(): void {
  const line = LINE.trim();
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  // Criterion 1 of the judge's brief: the line must actually be an excuse
  // for a missed deadline, so the word has to be in there.
  if (!/\bdeadline\b/i.test(line)) {
    throw new Error("entry must mention the deadline it excuses");
  }
  if (/[.!?]\s+[A-Z]/.test(line)) {
    throw new Error("entry must be a single sentence");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(`Wrote ${line.length} characters to /output/entry.txt`);
}

main();
