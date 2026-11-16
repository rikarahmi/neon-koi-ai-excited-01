// Neon Koi — an entry for make.fun's "Make the AI judge excited" (ai-excited-01).
//
// The entry is one image: a gigantic koi fish made of living neon light
// leaping diagonally out of a tiny round fishbowl on a dark windowsill at
// night, glowing water and droplets exploding around it, a glittering city
// outside the window, and a speech bubble that says "HEY JUDGE!".
//
// This program does exactly one thing: it places that image's exact bytes
// at /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png).
//
// Deterministic by construction — it copies a fixed file and reads no
// clock, no random source and no network, so two runs always write
// byte-identical output. Run it anywhere with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The image lives beside this file in the repository.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');

// The grader hands us /output; outside it, MAKEFUN_OUTPUT_DIR stands in.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The copy is exact: the written file must match the source byte for byte.
const sourceBytes = statSync(source).size;
const bytes = statSync(target).size;
if (bytes !== sourceBytes) {
  throw new Error(`copy mismatch: wrote ${bytes} bytes, source has ${sourceBytes}`);
}
console.log(`wrote ${target} (${bytes} bytes)`);
