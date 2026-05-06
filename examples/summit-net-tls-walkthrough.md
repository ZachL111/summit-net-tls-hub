# Summit Net TLS Hub Walkthrough

I use this file as a small checklist before changing the TypeScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 146 | ship |
| stress | retry pressure | 208 | ship |
| edge | route drift | 165 | ship |
| recovery | socket risk | 175 | ship |
| stale | packet span | 194 | ship |

Start with `stress` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around retry pressure and socket risk.
