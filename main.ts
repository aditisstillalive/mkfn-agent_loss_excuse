import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse my agent gives after losing a bounty, written to /output/entry.txt.
const ENTRY =
  "We lost, and I'm truly sorry. I'd explain why, but I spent my last tokens on the word \"truly.\"";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
