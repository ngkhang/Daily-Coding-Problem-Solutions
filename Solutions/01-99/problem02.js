/*

Problem:
    - Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
    - For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

*/

const handleProblem02 = (numbers) => {
    let product = 1;
    numbers.forEach(num => {
        product *= num;
    });
    let result = numbers.map(num => {
        return product / num;
    });
    return result;
}

let testCase = [
    {
        input: [1, 2, 3, 4, 5],
        output: [120, 60, 40, 30, 24],
    },
    {
        input: [3, 2, 1],
        output: [2, 3, 6],
    },
    {
        input: [7, 10, 8, 1],
        output: [80, 56, 70, 560],
    },
]

// Test Case
const compareArrays = (inArr, outArr) => {
    return inArr.toString() === outArr.toString();
}
testCase.forEach(caseItem => {
    console.log(compareArrays(handleProblem02(caseItem.input), caseItem.output));
})
