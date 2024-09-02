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