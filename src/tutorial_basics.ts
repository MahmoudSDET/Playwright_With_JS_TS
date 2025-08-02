
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

console.log("-----------------------------------------------------"); 
 // example of array with pop and push methods
let numbersArray: number[] = [1, 2, 3];
numbersArray.push(4);
console.log(`Array after push: ${numbersArray}`);
numbersArray.pop();
console.log(`Array after pop: ${numbersArray}`);
console.log("-----------------------------------------------------");  
// example of array with map method
let squaredNumbers: number[] = numbersArray.map(num => num * num);
console.log(`Squared numbers: ${squaredNumbers}`);
console.log("-----------------------------------------------------");
// example of array with filter method
let evenNumbers: number[] = numbersArray.filter(num => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);
console.log("-----------------------------------------------------");
// example of array with reduce method
let sumOfNumbers: number = numbersArray.reduce((acc, num) => acc + num, 0);
console.log(`Sum of numbers: ${sumOfNumbers}`);
console.log("-----------------------------------------------------"); 
// example of array with slice method
let slicedArray: number[] = numbersArray.slice(1, 3);
console.log(`Sliced array: ${slicedArray}`);
console.log("-----------------------------------------------------");
// example of array with splice method
let splicedArray: number[] = numbersArray.splice(1, 2, 10, 20);
console.log(`Array after splice: ${numbersArray}`);
console.log("-----------------------------------------------------");
//example of array with concat method
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
let concatenatedArray: number[] = array1.concat(array2);
console.log(`Concatenated array: ${concatenatedArray}`);
console.log("-----------------------------------------------------");
// example of array with join method
let joinedString: string = concatenatedArray.join(", ");
console.log(`Joined string: ${joinedString}`);
console.log("-----------------------------------------------------");
// example of array with indexOf method
let index: number = concatenatedArray.indexOf(4);
console.log(`Index of 4: ${index}`);
console.log("-----------------------------------------------------");
// example of array with includes method
let includesFour: boolean = concatenatedArray.includes(4);
console.log(`Includes 4: ${includesFour}`);
console.log("-----------------------------------------------------");
// example of array with find method
let foundNumber: number | undefined = concatenatedArray.find(num => num > 4);
console.log(`Found number greater than 4: ${foundNumber}`);
console.log("-----------------------------------------------------");
// example of array with findIndex method
let foundIndex: number | undefined = concatenatedArray.findIndex(num => num > 4);
console.log(`Index of number greater than 4: ${foundIndex}`);
console.log("-----------------------------------------------------");
// example of array with every method
let allEven: boolean = concatenatedArray.every(num => num % 2 === 0);
console.log(`All numbers are even: ${allEven}`);
console.log("-----------------------------------------------------");
// example of array with filter and map methods combined
let evenSquaredNumbers: number[] = concatenatedArray.filter(num => num % 2 === 0).map(num => num * num);
console.log(`Even squared numbers: ${evenSquaredNumbers}`);
console.log("-----------------------------------------------------");
// example of array wih shift and unshift methods
let shiftedArray: number[] = concatenatedArray.slice();
shiftedArray.shift();
shiftedArray.unshift(0);
console.log(`Shifted array: ${shiftedArray}`);
console.log("-----------------------------------------------------");
// example of array with forEach method
concatenatedArray.forEach(num => {  
    console.log(`Number: ${num}`);
});
console.log("-----------------------------------------------------");
// example of array with reduceRight method
let sumOfNumbersRight: number = concatenatedArray.reduceRight((acc, num) => acc + num, 0);
console.log(`Sum of numbers right: ${sumOfNumbersRight}`);
console.log("-----------------------------------------------------");
// example of array with flat method
let nestedArray: number[][] = [[1, 2], [3, 4], [5, 6]];
let flatArray: number[] = nestedArray.flat();
console.log(`Flat array: ${flatArray}`);
console.log("-----------------------------------------------------");
// example of array with flatMap method
let flatMappedArray: number[] = nestedArray.flatMap(arr => arr.map(num => num * 2));
console.log(`Flat mapped array: ${flatMappedArray}`);
console.log("-----------------------------------------------------");
// example of array with sort method
let sortedArray: number[] = concatenatedArray.slice().sort((a, b) => a - b);
console.log(`Sorted array: ${sortedArray}`);
console.log("-----------------------------------------------------");
// example of array with reverse method
let reversedArray: number[] = concatenatedArray.slice().reverse();
console.log(`Reversed array: ${reversedArray}`);
console.log("-----------------------------------------------------");
// example of array with fill method
let filledArray: number[] = new Array(5).fill(0);
console.log(`Filled array: ${filledArray}`);
console.log("-----------------------------------------------------");   
// example of array with copyWithin method
let copyWithinArray: number[] = concatenatedArray.slice();
copyWithinArray.copyWithin(1, 3, 5);
console.log(`Copy within array: ${copyWithinArray}`);
console.log("-----------------------------------------------------");
// example of array with toString method
let arrayToString: string = concatenatedArray.toString();
console.log(`Array to string: ${arrayToString}`);
console.log("-----------------------------------------------------");

// example of array with some method
let someEven: boolean = concatenatedArray.some(num => num % 2 === 0);
console.log(`Some numbers are even: ${someEven}`);

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

// example of IIFE function
(function(message: string): void {
    console.log(`IIFE function says: ${message}`);    
})("Hello, TypeScript!");