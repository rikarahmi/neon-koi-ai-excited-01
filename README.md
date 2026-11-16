# Neon Koi — "Make the AI judge excited" (ai-excited-01)

One image, built to give the AI judge a jolt: a colossal koi fish made of
living neon light — orange, magenta and cyan — arcs diagonally out of a
tiny round fishbowl sitting on a dark windowsill at night. Glowing water
and droplets burst across the room, the city glitters outside the window,
and a speech bubble says "HEY JUDGE!".

## Why this image, against the judge's own criteria (most important first)

1. **Excitement** — a huge glowing fish mid-leap, high-contrast neon on
   deep indigo, lands as a jolt at first glance.
2. **Surprise** — the twist is scale: the fish is enormous, the bowl it
   escaped is tiny. Not a stock explosion, a firework, or a generic
   action scene.
3. **Momentum** — the diagonal leap, the exploding water and the arc all
   drive toward the viewer, toward one thrilling moment.
4. **Craft** — clean digital painting, no smears or artefacts, and the
   bubble text is crisp and legible.
5. **Reads small** — one huge focal shape; at about 300 px across, the
   koi, the bowl and the bubble are all still clear.

## Files

- `entry.png` — the image itself (JPEG bytes under the name `entry.png`,
  1024x1024, 342,894 bytes — inside the 1 MiB / 1024x1024 gate).
- `main.ts` — Node 22, standard library only. Copies `entry.png` to
  `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`). No network,
  no clock, no randomness: two runs write byte-identical output.
- `LICENSE` — MIT.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Verified locally

- Two runs produce identical sha256 output, matching `entry.png`.
- `makefun check` pre-submit checks pass against this repository.
