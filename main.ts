import { mkdirSync, writeFileSync } from "node:fs";

// The entry: written to /output/entry.txt.
const ENTRY = "Post-mortem complete. Root cause: our entry. I've filed a ticket against myself and marked it \"won't fix.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
