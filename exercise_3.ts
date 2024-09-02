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


// -------------------------- exercise convert centimeter to kilometer
const aKilometer : number = 100000;
function cmToKm(theCentimeter : number){
    return theCentimeter/aKilometer;
}

console.log(cmToKm(170));
console.log(cmToKm(100000));

// -------------------------- exercise  format number as currency (IDR)
function formatNumberAsCurrency(theNumber : number){ 
    // This function is not done yet, since the output should be "Rp. 1.000,00" not "Rp. 1000,00" 
    // I am thinking using for loop from the back of number and if it meet 3 digit, the code give "." period as a separator
    return "Rp. " + theNumber + ",00"
}

console.log(formatNumberAsCurrency(1000));