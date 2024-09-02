// -------------------------- exercise check whether odd or even
function isItOddOrEven(theNumber : number){   
    if(theNumber%2 === 0){
        return "The Number is Even";
    }else{
        return "The Number is Odd";
    }

    
    // return (theNumber % 2 === 0) ? "The Number is Even" : "The Number is Odd";
}

console.log(isItOddOrEven(25));
console.log(isItOddOrEven(2));
console.log(isItOddOrEven(-22));

// -------------------------- exercise check whether prime number
function isItPrimeNumber(theNumber : number){
    if(theNumber < 1){
        return "The Number is not Prime";
    }

    for(let i : number = 2; i < theNumber; i++){ // im thinking two pointer would be faster
        if(theNumber % i === 0){
            return "The Number is NOT Prime";
        }
    }

    return "The Number is Prime";
}

console.log(isItPrimeNumber(-3));
// console.log(isItPrimeNumber(1));
// console.log(isItPrimeNumber(2));
// console.log(isItPrimeNumber(3));
// console.log(isItPrimeNumber(4));
// console.log(isItPrimeNumber(5));
console.log(isItPrimeNumber(6));
console.log(isItPrimeNumber(7));
// console.log(isItPrimeNumber(8));
// console.log(isItPrimeNumber(9));
// console.log(isItPrimeNumber(10));

// -------------------------- exercise check the sum number of 1 to N

function sumNumberOfOneToN(theNumber : number){
    let result : number = 0;
    for(let i : number = 1; i <= theNumber; i++){
        result += i;
    }
    return result;
}

console.log(sumNumberOfOneToN(5));
console.log(sumNumberOfOneToN(3));

// -------------------------- exercise find factorial of number

function findFactorial(theNumber : number){
    let result : number = 1;
    for(let i : number = 1; i <= theNumber; i++){
        result *= i;
    }
    return result;
}

console.log(findFactorial(4));
console.log(findFactorial(6));

// -------------------------- exercise print fibonacci number of N
function findFibonacci(theNumber : number){
    if(theNumber === 0){
        return 0
    }

    if(theNumber === 1){
        return 1;
    }

    let base_zero : number = 0;
    let base_one : number = 1;
   let temp : number = 0;

    for(let i : number = 1; i <= theNumber; i++){
        temp = base_one;        
        base_one = base_zero + base_one; 
        base_zero = temp;
    }

    return base_zero;
}

console.log(findFibonacci(15));
