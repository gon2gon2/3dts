import { describe, it, expect } from "vitest";
import { twoSum } from "../src/two-sum";

describe("twoSum", () => {
  it("should return indices of two numbers that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should return an empty array if no solution exists", () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});
