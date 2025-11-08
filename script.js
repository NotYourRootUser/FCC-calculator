const calculateSum = (num1, num2) => num1 + num2
console.log(calculateSum(2, 4))
console.log(calculateSum(40, 23))
console.log(`addition working`)

const calculateDifference = (num1, num2) => num1 - num2
console.log(calculateDifference(24, 80))
console.log(calculateDifference(24, 1))
console.log('subtracion working')

const calculateProduct = (num1, num2) => num1 * num2
console.log(calculateProduct(2, 9))
console.log(calculateProduct(4, 9))
console.log('multiplication working')

const calculateQuotient = (num1, num2) => {
    if (num2 === 0) {
        return 0; 
    } 
        return num1 / num2
};
console.log(calculateQuotient(2, 1))
console.log(calculateQuotient(2, 0))
console.log('division working')

const calculateSquare = (num) => num ** 2
console.log(calculateSquare(5))
console.log(calculateSquare(10))
console.log('squre working')

const calculateSquareRoot = (num) => Math.sqrt(num);
console.log(calculateSquareRoot(100))
console.log(calculateSquareRoot(25))
console.log('square root working')
