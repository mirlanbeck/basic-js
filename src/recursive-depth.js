/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxNested = 0;
    for (const item of arr) {
      if (Array.isArray(item)) {
        maxNested = Math.max(maxNested, this.calculateDepth(item));
      }
    }
    return 1 + maxNested;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
