/*

Problem:
    - Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
    - For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

*/

const checkTargetSum = (lstNumber, target) => {
    let result = false;
    for (let idx = 0; idx < lstNumber.length; idx++) {
        if (lstNumber.includes(target - lstNumber[idx])) return result = true;
    }
    return result;
}

let testCase = [
    {
        input: {
            numbers: [10, 15, 3, 7],
            k: 17
        },
        output: true,
    },
    {
        input: {
            numbers: [12, 8, 9, 21, 15, 3, 7],
            k: 22
        },
        output: true,
    },
    {
        input: {
            numbers: [12, 8, 9, 21, 15, 3, 7],
            k: 29
        },
        output: true,
    },
]

testCase.forEach((caseItem) => {
    console.log(checkTargetSum(caseItem.input.numbers, caseItem.input.k) === caseItem.output);
});