// -------------------------- exercise find area of rectangle
function findAreaOfRectangle(length : number, width : number){
    return (length * width);
}

let randLength : number = 5;
let randWidth : number = 3;

console.log(findAreaOfRectangle(randLength, randWidth));

// -------------------------- exercise find perimeter of rectangle
function findPerimeterOfRectangle(length : number, width : number){
    return ((2*length)+(2*width));
}

console.log(findPerimeterOfRectangle(randLength, randWidth));

// -------------------------- exercise find diameter, circumference and area of a circle.
function findDiameter(radius : number){
    return (2*radius);
}

function findCircumference(radius : number){
    return (2*Math.PI*radius);
}

function findAreaOfCircle(radius : number){
    return (Math.PI*radius*radius);
}

let radius : number =  5;

console.log(findDiameter(radius));
console.log(findCircumference(radius));
console.log(findAreaOfCircle(radius));

// -------------------------- exercise find angle of triangle if angles are given
function findAnglesOfTriangle(angleA : number, angleB : number){
    return 180 - (angleA+angleB);
}

let theAngleA : number = 80;
let theAngleB : number = 65;
console.log(findAnglesOfTriangle(theAngleA, theAngleB));

// -------------------------- exercise convert days to years (Notes: 1 year : 365 days, 1 month : 30days).
function convertDaysToYearsMonthsDays(totalDays: number) {
    const daysInYear = 365;
    const daysInMonth = 30;

    const years = Math.floor(totalDays / daysInYear);
    const remainingDaysAfterYears = totalDays % daysInYear;

    const months = Math.floor(remainingDaysAfterYears / daysInMonth);
    const remainingDays = remainingDaysAfterYears % daysInMonth;

    return {
        years: years,
        months: months,
        days: remainingDays
    };
}

let totalDays1 = 400;
let result1 = convertDaysToYearsMonthsDays(totalDays1);
console.log(`${totalDays1} days → ${result1.years} year(s), ${result1.months} month(s), ${result1.days} day(s)`);

let totalDays2 = 366;
let result2 = convertDaysToYearsMonthsDays(totalDays2);
console.log(`${totalDays2} days → ${result2.years} year(s), ${result2.months} month(s), ${result2.days} day(s)`);


// -------------------------- exercise get difference between 2 dates

function getDifferenceInDays(date1: string, date2: string): number {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    const differenceInTime = endDate.getTime() - startDate.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
}

const date1 = "2022-01-20";
const date2 = "2022-01-22";
const daysDifference = getDifferenceInDays(date1, date2);

console.log(daysDifference);
