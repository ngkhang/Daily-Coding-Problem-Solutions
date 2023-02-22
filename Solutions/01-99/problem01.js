/*

Problem:
    - Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
    - For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

*/

const checkTargetSum = (lstNumber, target) => {
    let result = false;
    lstNumber.forEach(number => {
        result = (lstNumber.includes(target - number))
    });
    return result;
}

let testCase = [
    {
        lstNumber: [10, 15, 3, 7],
        k: 17
    },
    {
        lstNumber: [12, 8, 9, 21, 15, 3, 7],
        k: 22
    },
    {
        lstNumber: [12, 8, 9, 21, 15, 3, 7],
        k: 29
    },
]

testCase.forEach((caseItem) => {
    console.log(checkTargetSum(caseItem.lstNumber, caseItem.k));
});