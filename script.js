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

console.log();

let area2 = calculateRectangleArea(7, 3);
console.log("Area of rectangle 2: " + area2);

function testReturn() {
    console.log("Step 1");
    return "Done";
    console.log("Step 2");
}

let result = testReturn();
console.log(result);

let globalMessage = "Hello, I am a global variable!";

function displayMessege() {
    let localMessage = "Hello, I am a local variable!";
    console.log(globalMessage);
    console.log(localMessage);
}
// console.log(localMessage); // This will throw an error because localMessage is not defined in this scope
displayMessege();

let temperature = 95;

if (temperature > 90) {
    console.log("It's really hot outside!");
} else if (temperature > 70) {
    console.log("The weather is nice.");
} else {
    console.log("It's a bit chilly.");
}

let username = "";

if (username) {
console.log("Welcome, " + username);
}

username = "Alex";

if (username) {
console.log("Welcome, " + username);
}


let day = "Tuesday"

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    default:
        console.log("It's the weekend!");
}

let yesterday = "Monday"

switch(day) {
    case "Monday":
        console.log( "Yesterday was Monday.");
        break;
    cawse "Tuesday":
        console.log("Yesterday was Tuesday.");
        break;
    case "Wednesday":
        console.log("Yesterday was Wednesday.");
        break;
    case "Thursday":
        console.log("Yesterday was Thursday.");
        break;
    case "Friday":
        console.log("Yesterday was Friday.");
        break;
    default:
        console.log("It's the weekend!");       
}