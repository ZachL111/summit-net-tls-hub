function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 62,
    "capacity": 80,
    "latency": 19,
    "risk": 9,
    "weight": 12,
    "score": 120,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 80,
    "capacity": 92,
    "latency": 27,
    "risk": 11,
    "weight": 11,
    "score": 127,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 68,
    "capacity": 92,
    "latency": 18,
    "risk": 15,
    "weight": 4,
    "score": 81,
    "decision": "review"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
