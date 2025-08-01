

// example of basic Ternary operation
let isLoggedIn: boolean = true;
let message1: string = isLoggedIn ? "User is logged in" : "User is not logged in";
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
    console.log(`${key}: ${user[key as keyof typeof user]}`);
}  
console.log("-----------------------------------------------------"); 
//example of for of loop
let digits: number[] = [1, 2, 3, 4, 5];
for (let number of digits) {
    console.log(number);
}
console.log("-----------------------------------------------------"); 
// example of basic function with parameters and return type
function additionalFunction(a: number,b: number):number {
    return a + b;
}   
let result: number = additionalFunction(5, 10);
console.log(`The result is: ${result}`);
console.log("-----------------------------------------------------"); 
let x: any = 10;
x= "Hello";
console.log(`The value of x is: ${x}`);

let array: number[] = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);
console.log("-----------------------------------------------------"); 
//using generic function
function genericFunction<T>(arg: T): T {
    return arg;
}

let genericResult = genericFunction<string>("Hello, TypeScript!");
console.log(`Generic function result: ${genericResult}`);   

let genericNumber = genericFunction<number>(42);
console.log(`Generic function result: ${genericNumber}`);
console.log("-----------------------------------------------------"); 
//example of array with different types
let values:(number | string)[] = [1, "two", 3, "four"];
values.forEach(value => {
    console.log(`Value: ${value}`);
});

let numbers: number[] = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Value at index ${i}: ${numbers[i]! * 2}`);
}
console.log("-----------------------------------------------------"); 
//tuple example
let tuple: [number, string] = [1, "TypeScript"];
console.log(`Tuple values: ${tuple[0]}, ${tuple[1]}`);
console.log("-----------------------------------------------------"); 

//array of tuples
let tupleArray: [number, string][] = [[1, "one"], [2, "two"], [3, "three"]];
tupleArray.forEach(tuple => {
    console.log(`Tuple values: ${tuple[0]}, ${tuple[1]}`);
});
console.log("-----------------------------------------------------"); 

// exapmple of tuple in function
function processTuple(tuple: [number, string]): void {
    console.log(`Processing tuple: ${tuple[0]}, ${tuple[1]}`);
}

processTuple([42, "Answer to the Ultimate Question of Life, the Universe, and Everything"]);
console.log("-----------------------------------------------------"); 

//example of tuple with optional element
function processOptionalTuple(tuple: [number, string?, boolean?]): void {
    console.log(`Processing optional tuple: ${tuple[0]}, ${tuple[1] ?? "N/A"}, ${tuple[2] ?? "N/A"}`);
}

processOptionalTuple([42, "Answer to the Ultimate Question of Life, the Universe, and Everything"]);
console.log("-----------------------------------------------------"); 
//example of tuple with rest element
function processRestTuple(...args: [number, ...string[]]): void {
    console.log(`Processing rest tuple: ${args[0]}, ${args.slice(1).join(", ")}`);
}

processRestTuple(42, "Answer", "to", "the", "Ultimate", "Question", "of", "Life", "the", "Universe", "and", "Everything");
console.log("-----------------------------------------------------"); 
//example of enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(`The direction is: ${Direction.Down}`);
console.log("-----------------------------------------------------"); 

//examole of enum with string values
enum Color {    
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF"
}

console.log(`The color is: ${Color.Green}`);
console.log("-----------------------------------------------------"); 

//example of enum with computed values
enum Status {    
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Done = "DONE"
}

console.log(`The status is: ${Status.Done}`);
console.log("-----------------------------------------------------"); 

//example of enum with heterogeneous values
enum MixedEnum {
    A = 1,
    B = "Two",
    C = 3
}

console.log(`The mixed enum value is: ${MixedEnum.B}`);
console.log("-----------------------------------------------------"); 
//example of enum with reverse mapping
enum ReverseEnum {    
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(`The reverse enum value is: ${ReverseEnum.Down}`);
console.log("-----------------------------------------------------"); 
//example of union type
type StringOrNumber = string | number;

let value: StringOrNumber = "Hello";
value = 42;
console.log(`The value is: ${value}`);
console.log("-----------------------------------------------------"); 
//example of union type in function
function processValue(value: StringOrNumber): void {
    if (typeof value === "string") {
        console.log(`Processing string value: ${value}`);
    } else {
        console.log(`Processing number value: ${value}`);
    }
}

processValue("Hello");
processValue(42);
console.log("-----------------------------------------------------"); 
//example of void type
function logMessage(message: string): void {
    console.log(message);
}    

logMessage("Hello, TypeScript!");
console.log("-----------------------------------------------------"); 
//example of <> type casting
let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;
console.log(`The string length is: ${strLength}`);
console.log("-----------------------------------------------------"); 

//example of as type casting for number
let someValue1: any = 123;
let numLength: number = (someValue1 as number).toString().length;
console.log(`The number length is: ${numLength}`);
console.log("-----------------------------------------------------"); 

//example of as type casting for string
let someValue2: any = "This is a string";
let strLength2: number = (someValue2 as string).length;
console.log(`The string length is: ${strLength2}`);
console.log("-----------------------------------------------------"); 

//example of String type casting for number
let someValue3: any = "123";
let numLength2: number = (Number(someValue3));
console.log(`The string length is: ${numLength2 * 2}`);
console.log("-----------------------------------------------------"); 

//exapmple of string literal type
type DirectionLiteral = "up" | "down" | "left" | "right";
let direction: DirectionLiteral = "up";
console.log(`The direction is: ${direction}`);
console.log("-----------------------------------------------------"); 

//example of any type
let flag: any = true;
if(flag as boolean) {
    console.log(`The flag is: ${flag}`);
}
console.log("-----------------------------------------------------"); 

// example of anonymous function
let anonymousFunction = function(message: string): void {
    console.log(`Anonymous function says: ${message}`);
}

anonymousFunction("Hello, TypeScript!");

let sum= function(a: number, b: number): number {
    return a + b;
}

console.log(`The sum is: ${sum(1, 2)}`);
console.log("-----------------------------------------------------"); 
// example of arrow function
let arrowFunction = (message: string): void => {
    console.log(`Arrow function says: ${message}`);
}

arrowFunction("Hello, TypeScript!");
console.log("-----------------------------------------------------"); 
// example of arrow function with parameters
let multiply = (a: number, b: number): number => {
    return a * b;
}
console.log(`The product is: ${multiply(3, 4)}`);
console.log("-----------------------------------------------------"); 
// example of arrow function with no parameters
let greet = (): void => {
    console.log("Hello, TypeScript!");
}
greet();
console.log("-----------------------------------------------------");
// example of arrow function with default parameters
let greetWithDefault = (name: string = "User"): void => {
    console.log(`Hello, ${name}!`);
}
greetWithDefault();
greetWithDefault("Mahmoud");
console.log("-----------------------------------------------------");
// example of arrow function with rest parameters
let sumWithRest = (...numbers: number[]): number => {
    return numbers.reduce((acc, num) => acc + num, 0);
}    
console.log(`The sum is: ${sumWithRest(1, 2, 3, 4, 5)}`);
console.log("-----------------------------------------------------");
// example of arrow function with destructuring
let printUser = ({ id, name, email }: { id: number; name: string; email: string }): void => {
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
}    
printUser({ id: 1, name: "Mahmoud", email: "mahmoud@example.com" });
console.log("-----------------------------------------------------");
// example of arrow function with type annotations
let calculateArea = (width: number, height: number): number => {
    return width * height;
}    
console.log(`The area is: ${calculateArea(5, 10)}`);   
console.log("-----------------------------------------------------"); 
// example of arrow function with type inference
let calculatePerimeter = (width: number, height: number) => {
    return 2 * (width + height);
}  
console.log(`The perimeter is: ${calculatePerimeter(5, 10)}`);  
console.log("-----------------------------------------------------");
// example of arrow function with generics
function identity<T>(arg: T): T {
    return arg;
}    
console.log(`The identity is: ${identity<string>("Hello")}`);  
console.log(`The identity is: ${identity<number>(42)}`);
console.log("-----------------------------------------------------"); 
// example of Switch statement
let day: number = 3;
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
