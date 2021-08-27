/**
 * expect(averagePair([1, 2, 3], 2.5)).toBe(true);
 * expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
 * expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
 * expect(averagePair([], 4)).toBe(false);
 * 
 * Accepts a sorted array and a float number
 * Returns true if a pair of numbers exist 
 * that average to the float
 * QUICK FAIL:  If array.length <=1 return false
 * 1.  Create pointer pointing to first element
 * 2.  Create pointer pointing to last element
 * 4.  while left pointer < right pointer
 *          - if average == float return true; otherwise:
 *          - if average > float move decrement right pointer
 *          - if average < float increment left pointer
 * 5.  return false
 * 
 * 
 * 
 * 
   */
// add whatever parameters you deem necessary
function averagePair(numbers, average) {
    if (numbers.length <= 1) {
        return false;
    }

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const numAvg = (numbers[left] + numbers[right]) / 2
        console.log(numAvg);
        if (numAvg === average) {
            return true;
        }
        if (numAvg > average) {
            right--;
        }
        else {
            left++;
        }
    }
    return false;
}
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));