// The Meeting That Should Have Been an Email
// Writes a single original one-liner to <MAKEFUN_OUTPUT_DIR>/entry.txt
// (defaults to /output/entry.txt). The line must be plain text, one line,
// at most 200 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Nine people, one hour, and a 40-slide deck later, we reached the exact conclusion the email's subject line had already reached.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
