import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 67, slack: 24, drag: 21, confidence: 51 };
assert.equal(domainReviewScore(item), 146);
assert.equal(domainReviewLane(item), "ship");
