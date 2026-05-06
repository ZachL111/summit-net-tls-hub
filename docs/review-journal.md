# Review Journal

The review surface for `summit-net-tls-hub` is deliberately narrow: one fixture, one scoring rule, and one local check.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 146, lane `ship`
- `stress`: `retry pressure`, score 208, lane `ship`
- `edge`: `route drift`, score 165, lane `ship`
- `recovery`: `socket risk`, score 175, lane `ship`
- `stale`: `packet span`, score 194, lane `ship`

## Note

The useful failure mode here is a wrong decision on a named case, not a vague style disagreement.
