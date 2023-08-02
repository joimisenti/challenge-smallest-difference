/* Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

This is a short-length challenge, but requires some clever thinking.

Given two lists, find the smallest difference (subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference.
*/

const smallestDiff = (arr1, arr2) => {
    let minDiff = Math.abs(arr1[0] - arr2[0]);

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let currDiff = Math.abs(arr1[i] - arr2[j]);
            if (currDiff < minDiff) {
                minDiff = currDiff;
            }
        }
    }

    return minDiff
}

console.log(smallestDiff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]));
