
// Day 25

// ### Question 1: Calculate the Difference Between the Sum of Odd and Even Digits
// *Problem:* You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference between these two sums. The difference should be positive.

// *Example:*
// - Input: number = 1234
// - Output: 2 (Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)

// *Hint:* Convert the number to a string, then check each digit to see if it’s odd or even, and calculate the respective sums.

// ---

function calculateDifference(num: number):number{
    let oddSum = 0;
    let evenSum = 0;

    const digits = num.toString();

    for(let i=0; i<digits.length; i++){
        const digit = parseInt(digits[i]);

        digit % 2 === 0 ? evenSum += digit : oddSum += digit;
    }
   // This condition ensures that the difference is always positive.
    if(oddSum > evenSum){
        return oddSum - evenSum;
    } else {
        return evenSum - oddSum
    }
}
console.log(calculateDifference(1234)); // Output 6-4 = 2
console.log(calculateDifference(1212)); // Output 4-2 = 2
console.log(calculateDifference(1512)); // Output 7-2 = 5

// ### Question 2: Find the Smallest Divisor of a Number (Greater than 1)
// *Problem:* You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.

// *Example:*
// - Input: number = 15
// - Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)

// *Hint:* Use a loop to check which number divides the integer without leaving a remainder, starting from 2 upwards.

function findSmallestDivisor(num: number):number{

 // start checking from 2 onwards
    for(let i=2; i<=num; i++){
        if (num % i === 0){
         return i     // Return as soon as we find the smallest divisor
        }
    }
    return num;
}
console.log(findSmallestDivisor(15)); // Output: 3
console.log(findSmallestDivisor(21)); // Output: 3
console.log(findSmallestDivisor(29)); // Output: 29 (since 29 is a prime number)
