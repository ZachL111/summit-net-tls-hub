function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 67, slack: 24, drag: 21, confidence: 51 };
equal(domainReviewScore(item), 146);
equal(domainReviewLane(item), "ship");
