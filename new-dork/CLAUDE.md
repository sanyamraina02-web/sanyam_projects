# New Dork — notes for Claude Code

District 1 of a code-art city built section by section. Everything lives in `index.html` (vanilla JS + Canvas 2D, no dependencies, no build).

## How it is organised (search for the `// ====` banners)
- **tile map**: `layout()` sets tile types (grass, cobble, dirt, water, park path, bridge, soil, hedge) on a 62×44 grid of 16px tiles.
- **ground baking**: `bakeGround()` paints all tiles once into an offscreen canvas.
- **sprite factories**: `tree()`, `bush()`, `lamp()`, `bench()`, `makeHouse()` etc. draw pixel art into small canvases, then `outline()` adds the dark 1px outline.
- **people**: `personFrames(look)` draws 4 directions × 4 walk frames + a sitting frame for any look.
- **world population**: `populate()` places houses on `LOTS`, props, solids and interactables (`inter`).
- **render**: draws at native pixel resolution into `buf`, depth-sorts sprites by baseline, applies dusk tint and night lighting, then upscales with nearest-neighbour.

## Conventions
- Native resolution is 16px tiles; screen scale `S` is an integer.
- Solid tiles live in `solid`; props call `setSolid()`.
- Keep it dependency-free and single-file unless there is a strong reason.

## Ideas for next districts
Connect a second district across the river bridge (rows 41–43, avenue cols 28–30).
