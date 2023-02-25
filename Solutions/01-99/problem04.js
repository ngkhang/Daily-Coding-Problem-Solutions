/*

Problem:
    - Given an array of integers, find the first missing positive integer in linear time and constant space.
    - In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

    - For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
    - You can modify the input array in-place.

*/

const handleProblem04 = (arr) => {
    let max = 0;
    let raw2 = [... new Set(arr)].filter(num => {
        if (max < num) max = num;
        return num > -1;
    })

    let result = 0
    for (let step = 1; step <= max; step++) {
        if (raw2.includes(step) === false) {
            result = step;
            break;
        }
    }
    return (result == 0) ? max + 1 : result;
}

let testCase = [
    {
        input: [3, 4, -1, 1],
        output: 2,
    },
    {
        input: [1, 2, 0],
        output: 3,
    },
    {
        input: [4, -1, 5, 0, 4, 1, 5, 0],
        output: 2,
    },
    {
        input: [5, 3, 5, 4, 2, 1, -3, -1, 0],
        output: 6,
    },
]

testCase.forEach(caseItem => {
    console.log(handleProblem04(caseItem.input) === caseItem.output);
})