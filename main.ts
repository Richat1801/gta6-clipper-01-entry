// gta6-clipper-01 entry for make.fun.
//
// The entry itself is a public YouTube Short: a cut of Rockstar's official
// GTA VI Launch Trailer (the 40s-59s montage: Jason & Lucia, the neon club,
// the beach plane) cropped to vertical 1080x1920, with an on-screen pitch
// telling viewers they can make money on make.fun by making clips with AI.
//
// This program's only job is to hand the video's address to the grader: it
// copies VIDEO.json from this repository into the output directory.
// Node 22, standard library only, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
// The grader sets MAKEFUN_OUTPUT_DIR; a plain local run writes to ./out.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "VIDEO.json"), join(outDir, "VIDEO.json"));
