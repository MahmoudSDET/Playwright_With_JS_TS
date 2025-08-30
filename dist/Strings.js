"use strict";
//example of Strings
let message = "Hello, TypeScript!";
console.log(message);
console.log("-----------------------------------------------------");
// example of Strings with single quotes
let singleQuoteMessage = 'This is a message with single quotes.';
console.log(singleQuoteMessage);
console.log("-----------------------------------------------------");
//example of Strings Multiline
let multilineMessage = `This is a message
that spans multiple lines.`;
console.log(multilineMessage);
console.log("-----------------------------------------------------");
// example of Strings with interpolation
let username = "Alice";
let greeting = `Hello, ${username}! Welcome to TypeScript.`;
console.log(greeting);
console.log("-----------------------------------------------------");
// example of Strings with escape characters
let escapedMessage = "He said, \"TypeScript is awesome!\"";
console.log(escapedMessage);
console.log("-----------------------------------------------------");
// example of Strings with template literals
let age = 30;
let templateMessage = `My name is ${username} and I am ${age} years old.`;
console.log(templateMessage);
console.log("-----------------------------------------------------");
// example of Strings with split method
let sentence = "TypeScript is a typed superset of JavaScript.";
let words = sentence.split(" ");
console.log(words);
console.log("-----------------------------------------------------");
// example of Strings with join method
let joinedWords = words.join(" ");
console.log(joinedWords);
console.log("-----------------------------------------------------");
// example of Strings with toUpperCase and toLowerCase
let upperCaseMessage = message.toUpperCase();
let lowerCaseMessage = message.toLowerCase();
console.log(upperCaseMessage);
console.log(lowerCaseMessage);
console.log("-----------------------------------------------------");
// example of Strings with includes method
let containsTypeScript = message.includes("TypeScript");
console.log(`Does the message contain "TypeScript"? ${containsTypeScript}`);
console.log("-----------------------------------------------------");
// example of Strings with indexOf method
let indexOfTypeScript = message.indexOf("TypeScript");
console.log(`Index of "TypeScript" in the message: ${indexOfTypeScript}`);
console.log("-----------------------------------------------------");
// example of Strings with slice method
let slicedMessage = message.slice(0, 5);
console.log(`Sliced message: ${slicedMessage}`);
console.log("-----------------------------------------------------");
// example of Strings with replace method
let replacedMessage = message.replace("TypeScript", "JavaScript");
console.log(`Replaced message: ${replacedMessage}`);
console.log("-----------------------------------------------------");
// example of Strings with trim method
let paddedMessage = "   Hello, TypeScript!   ";
let trimmedMessage = paddedMessage.trim();
console.log(`Trimmed message: "${trimmedMessage}"`);
console.log("-----------------------------------------------------");
// example of Strings with charAt method
let charAtIndex = message.charAt(0);
console.log(`Character at index 0: ${charAtIndex}`);
console.log("-----------------------------------------------------");
// example of Strings with length property
let messageLength = message.length;
console.log(`Length of the message: ${messageLength}`);
console.log("-----------------------------------------------------");
// example of Strings with startsWith and endsWith methods
let startsWithHello = message.startsWith("Hello");
let endsWithTypeScript = message.endsWith("TypeScript!");
console.log(`Does the message start with "Hello"? ${startsWithHello}`);
console.log(`Does the message end with "TypeScript"? ${endsWithTypeScript}`);
console.log("-----------------------------------------------------");
// example of Strings with toString method
let stringValue = message.toString();
console.log(`String value: ${stringValue}`);
console.log("-----------------------------------------------------");
// example of Strings with search method
let searchIndex = message.search("TypeScript");
console.log(`Index of "TypeScript" using search: ${searchIndex}`);
console.log("-----------------------------------------------------");
// example of Strings with concat method
let additionalMessage = " Let's learn together.";
let concatenatedMessage = message.concat(additionalMessage);
console.log(`Concatenated message: ${concatenatedMessage}`);
console.log("-----------------------------------------------------");
// example of Strings with substring method
let substringMessage = message.substring(0, 5);
console.log(`Substring message: ${substringMessage}`);
console.log("-----------------------------------------------------");
// example of Strings with repeat method
let repeatedMessage = message.repeat(2);
console.log(`Repeated message: ${repeatedMessage}`);
console.log("-----------------------------------------------------");
// example of Strings with padStart and padEnd methods
let paddedStartMessage = message.padStart(30, '*');
let paddedEndMessage = message.padEnd(30, '*');
console.log(`Padded start message: ${paddedStartMessage}`);
console.log(`Padded end message: ${paddedEndMessage}`);
// example of Strings with localeCompare method
let compareMessage = "Hello, World!";
let localeCompareResult = message.localeCompare(compareMessage);
console.log(`Locale compare result: ${localeCompareResult}`);
// example of Strings with valueOf method
let valueOfMessage = message.valueOf();
console.log(`Value of message: ${valueOfMessage}`);
// example of Strings with match method
let regex = /TypeScript/;
let matchResult = message.match(regex);
console.log(`Match result: ${matchResult}`);
