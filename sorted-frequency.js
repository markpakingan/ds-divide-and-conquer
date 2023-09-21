function sortedFrequency(arr, val) {
    let firstIdx = findFirst(arr, val);
    if (firstIdx === -1) {
        return 0;
    }
    let lastIdx = findLast(arr, val);
    return lastIdx - firstIdx + 1;
}

function findFirst(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === val) {
            result = middle;
            right = middle - 1;
        } else if (arr[middle] < val) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return result;
}

function findLast(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === val) {
            result = middle;
            left = middle + 1;
        } else if (arr[middle] < val) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return result;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // Output: 4


module.exports = sortedFrequency




// sortedFrequency

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

