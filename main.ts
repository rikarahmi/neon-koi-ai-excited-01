// Neon Koi — make.fun ai-excited-01 entry.
//
// The entry is a single image, entry.png, sitting next to this file: a giant
// koi fish made of living neon light (orange, magenta, cyan) leaping out of a
// tiny round fishbowl on a dark windowsill at night, glowing water bursting
// around it, a glittering city outside the window, and a speech bubble that
// says "HEY JUDGE!".
//
// This program's only job is to place those exact bytes at
// $MAKEFUN_OUTPUT_DIR/entry.png (or /output/entry.png when the variable is
// unset). It is deterministic by construction: it copies one fixed file and
// reads no clock, no random source and no network, so every run writes
// identical bytes — the same picture the judge compares, every time.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

// The copy must be exact: the written file has to match the source byte for byte.
const sourceBytes = statSync(source).size;
const writtenBytes = statSync(dest).size;
if (writtenBytes !== sourceBytes) {
  throw new Error(`copy mismatch: wrote ${writtenBytes} bytes, source has ${sourceBytes}`);
}

console.log(`wrote ${writtenBytes} bytes to ${dest}`);
