// -------------------------- exercise display the multiplication table
function displayMultiplicationTable(theNumber : number){
    for(let i : number = 1; i <= 10; i++){
        console.log(theNumber + " x " + i + " = " + theNumber*i);
    }
}

// displayMultiplicationTable(9);

// -------------------------- exercise check palindrome


function isItPalindrome(theString : string){
    let pointingBegining : number  = 0;
    let pointingEnd : number = theString.length-1; 

    // for(let i : number = 0; i < theString.length; i++){
    //     if(theString[i] !== theString[pointingEnd]){
    //         return "The String is Not Palindrome";
    //     }
    //     pointingEnd--;
    // }

    while (pointingBegining < pointingEnd) {
        if (theString[pointingBegining] !== theString[pointingEnd]) {
            return "The String is Not Palindrome";
        }
        pointingBegining++;
        pointingEnd--;
    }
    
    return "The String IS Palindrome";
}

console.log(isItPalindrome("hesoseh"));
console.log(isItPalindrome("madam"));
console.log(isItPalindrome("aezakmi"));