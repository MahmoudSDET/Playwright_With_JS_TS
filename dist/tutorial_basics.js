"use strict";
// example of basic Ternary operation
let isLoggedIn = true;
let message1 = isLoggedIn ? "User is logged in" : "User is not logged in";
console.log(message1);
console.log("-----------------------------------------------------");
//example of for in loop
// تعريف كائن المستخدم  
// with properties id, name, and email
let user = {
    id: 1,
    name: "Mahmoud",
    email: "mahmoud@example.com"
};
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
console.log("-----------------------------------------------------");
//example of for of loop
let digits = [1, 2, 3, 4, 5];
for (let number of digits) {
    console.log(number);
}
console.log("-----------------------------------------------------");
// example of basic function with parameters and return type
function additionalFunction(a, b) {
    return a + b;
}
let result = additionalFunction(5, 10);
console.log(`The result is: ${result}`);
console.log("-----------------------------------------------------");
let x = 10;
x = "Hello";
console.log(`The value of x is: ${x}`);
let array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);
console.log("-----------------------------------------------------");
//using generic function
function genericFunction(arg) {
    return arg;
}
let genericResult = genericFunction("Hello, TypeScript!");
console.log(`Generic function result: ${genericResult}`);
let genericNumber = genericFunction(42);
console.log(`Generic function result: ${genericNumber}`);
console.log("-----------------------------------------------------");
//example of array with different types
let values = [1, "two", 3, "four"];
values.forEach(value => {
    console.log(`Value: ${value}`);
});
let numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Value at index ${i}: ${numbers[i] * 2}`);
}
console.log("-----------------------------------------------------");
//tuple example
let tuple = [1, "TypeScript"];
console.log(`Tuple values: ${tuple[0]}, ${tuple[1]}`);
console.log("-----------------------------------------------------");
//array of tuples
let tupleArray = [[1, "one"], [2, "two"], [3, "three"]];
tupleArray.forEach(tuple => {
    console.log(`Tuple values: ${tuple[0]}, ${tuple[1]}`);
});
console.log("-----------------------------------------------------");
// exapmple of tuple in function
function processTuple(tuple) {
    console.log(`Processing tuple: ${tuple[0]}, ${tuple[1]}`);
}
processTuple([42, "Answer to the Ultimate Question of Life, the Universe, and Everything"]);
console.log("-----------------------------------------------------");
//example of tuple with optional element
function processOptionalTuple(tuple) {
    var _a, _b;
    console.log(`Processing optional tuple: ${tuple[0]}, ${(_a = tuple[1]) !== null && _a !== void 0 ? _a : "N/A"}, ${(_b = tuple[2]) !== null && _b !== void 0 ? _b : "N/A"}`);
}
processOptionalTuple([42, "Answer to the Ultimate Question of Life, the Universe, and Everything"]);
console.log("-----------------------------------------------------");
//example of tuple with rest element
function processRestTuple(...args) {
    console.log(`Processing rest tuple: ${args[0]}, ${args.slice(1).join(", ")}`);
}
processRestTuple(42, "Answer", "to", "the", "Ultimate", "Question", "of", "Life", "the", "Universe", "and", "Everything");
console.log("-----------------------------------------------------");
//example of enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(`The direction is: ${Direction.Down}`);
console.log("-----------------------------------------------------");
//examole of enum with string values
var Color;
(function (Color) {
    Color["Red"] = "#FF0000";
    Color["Green"] = "#00FF00";
    Color["Blue"] = "#0000FF";
})(Color || (Color = {}));
console.log(`The color is: ${Color.Green}`);
console.log("-----------------------------------------------------");
//example of enum with computed values
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["InProgress"] = "IN_PROGRESS";
    Status["Done"] = "DONE";
})(Status || (Status = {}));
console.log(`The status is: ${Status.Done}`);
console.log("-----------------------------------------------------");
//example of enum with heterogeneous values
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["A"] = 1] = "A";
    MixedEnum["B"] = "Two";
    MixedEnum[MixedEnum["C"] = 3] = "C";
})(MixedEnum || (MixedEnum = {}));
console.log(`The mixed enum value is: ${MixedEnum.B}`);
console.log("-----------------------------------------------------");
//example of enum with reverse mapping
var ReverseEnum;
(function (ReverseEnum) {
    ReverseEnum["Up"] = "UP";
    ReverseEnum["Down"] = "DOWN";
    ReverseEnum["Left"] = "LEFT";
    ReverseEnum["Right"] = "RIGHT";
})(ReverseEnum || (ReverseEnum = {}));
console.log(`The reverse enum value is: ${ReverseEnum.Down}`);
console.log("-----------------------------------------------------");
let value = "Hello";
value = 42;
console.log(`The value is: ${value}`);
console.log("-----------------------------------------------------");
//example of union type in function
function processValue(value) {
    if (typeof value === "string") {
        console.log(`Processing string value: ${value}`);
    }
    else {
        console.log(`Processing number value: ${value}`);
    }
}
processValue("Hello");
processValue(42);
console.log("-----------------------------------------------------");
//example of void type
function logMessage(message) {
    console.log(message);
}
logMessage("Hello, TypeScript!");
console.log("-----------------------------------------------------");
//example of <> type casting
let someValue = "This is a string";
let strLength = someValue.length;
console.log(`The string length is: ${strLength}`);
console.log("-----------------------------------------------------");
//example of as type casting for number
let someValue1 = 123;
let numLength = someValue1.toString().length;
console.log(`The number length is: ${numLength}`);
console.log("-----------------------------------------------------");
//example of as type casting for string
let someValue2 = "This is a string";
let strLength2 = someValue2.length;
console.log(`The string length is: ${strLength2}`);
console.log("-----------------------------------------------------");
//example of String type casting for number
let someValue3 = "123";
let numLength2 = (Number(someValue3));
console.log(`The string length is: ${numLength2 * 2}`);
console.log("-----------------------------------------------------");
let direction = "up";
console.log(`The direction is: ${direction}`);
console.log("-----------------------------------------------------");
//example of any type
let flag = true;
if (flag) {
    console.log(`The flag is: ${flag}`);
}
console.log("-----------------------------------------------------");
// example of anonymous function
let anonymousFunction = function (message) {
    console.log(`Anonymous function says: ${message}`);
};
anonymousFunction("Hello, TypeScript!");
let sum = function (a, b) {
    return a + b;
};
console.log(`The sum is: ${sum(1, 2)}`);
console.log("-----------------------------------------------------");
// example of arrow function
let arrowFunction = (message) => {
    console.log(`Arrow function says: ${message}`);
};
arrowFunction("Hello, TypeScript!");
console.log("-----------------------------------------------------");
// example of arrow function with parameters
let multiply = (a, b) => {
    return a * b;
};
console.log(`The product is: ${multiply(3, 4)}`);
console.log("-----------------------------------------------------");
// example of arrow function with no parameters
let greet = () => {
    console.log("Hello, TypeScript!");
};
greet();
console.log("-----------------------------------------------------");
// example of arrow function with default parameters
let greetWithDefault = (name = "User") => {
    console.log(`Hello, ${name}!`);
};
greetWithDefault();
greetWithDefault("Mahmoud");
console.log("-----------------------------------------------------");
// example of arrow function with rest parameters
let sumWithRest = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};
console.log(`The sum is: ${sumWithRest(1, 2, 3, 4, 5)}`);
console.log("-----------------------------------------------------");
// example of arrow function with destructuring
let printUser = ({ id, name, email }) => {
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
};
printUser({ id: 1, name: "Mahmoud", email: "mahmoud@example.com" });
console.log("-----------------------------------------------------");
// example of arrow function with type annotations
let calculateArea = (width, height) => {
    return width * height;
};
console.log(`The area is: ${calculateArea(5, 10)}`);
console.log("-----------------------------------------------------");
// example of arrow function with type inference
let calculatePerimeter = (width, height) => {
    return 2 * (width + height);
};
console.log(`The perimeter is: ${calculatePerimeter(5, 10)}`);
console.log("-----------------------------------------------------");
// example of arrow function with generics
function identity(arg) {
    return arg;
}
console.log(`The identity is: ${identity("Hello")}`);
console.log(`The identity is: ${identity(42)}`);
console.log("-----------------------------------------------------");
// example of Switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
        break;
}
console.log("-----------------------------------------------------");
//# sourceMappingURL=tutorial_basics.js.map