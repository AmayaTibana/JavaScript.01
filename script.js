let age = 17;
let hasParentConset = true;
let minimumAge = 18;

let elegible = age >= minimumAge || (age >= 16 && hasParentConset);

console.log(elegible);

function greetUser() {
    console.log("Welcome to our store!");
}

function calculateTotal(price, taxRate) {
    return price + tax;
}
//call the fuction to greet the user
greetUser();

function sayHello() {
    console.log("Hello, how are you?");
}

sayHello();
sayHello();
sayHello();

function greetUser(name){
    console.log("Hello, " + name + "! Welcome to our store!");
}

greetUser("Alice");
greetUser("Bob");

function calculateRectangleArea(length, width) {
    console.log(width * length);
}
calculateRectangleArea(5, 10);
calculateRectangleArea(7, 3);

function calculateRectangleArea(length, width) {
    return length * width;
}

let area1 = calculateRectangleArea(5, 10);
console.log("Area of rectangle 1: " + area1);

console.log()

let area2 = calculateRectangleArea(7, 3);
console.log("Area of rectangle 2: " + area2);

function testReturn() {
    console.log("Step 1");
    return "Done";
    console.log("Step 2");
}

let result = testReturn();
console.log(result);