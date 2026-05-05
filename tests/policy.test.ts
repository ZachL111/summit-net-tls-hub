import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
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
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
