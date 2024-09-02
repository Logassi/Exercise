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