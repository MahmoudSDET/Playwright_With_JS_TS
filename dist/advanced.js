"use strict";
var _a;
// exammple of arrow function in class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet = () => {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        };
    }
}
const person = new Person("Mahmoud", 25);
person.greet();
console.log("-----------------------------------------------------");
// example of arrow function with this context
const obj = {
    value: 42,
    getValue: function () {
        return () => {
            console.log(`The value is: ${this.value}`);
        };
    }
};
obj.getValue()(); // Call the arrow function to see the value
console.log("-----------------------------------------------------");
// example of arrow function with optional chaining
const obj2 = {
    value: 42,
    getValue: function () {
        return () => {
            console.log(`The value is: ${this.value}`);
        };
    }
};
(_a = obj2.getValue()) === null || _a === void 0 ? void 0 : _a(); // Call the arrow function to see the value
console.log("-----------------------------------------------------");
// example of optional with arrow function
const optionalFunction = (callback) => {
    if (callback) {
        callback();
    }
    else {
        console.log("No callback provided.");
    }
};
optionalFunction(() => {
    console.log("Callback executed.");
});
optionalFunction(); // No callback provided
console.log("-----------------------------------------------------");
// example of arrow function with nullish coalescing
const nullishFunction = (value) => {
    return value !== null && value !== void 0 ? value : "Default Value";
};
console.log(`The value is: ${nullishFunction("Hello")}`);
console.log(`The value is: ${nullishFunction(null)}`);
console.log(`The value is: ${nullishFunction(undefined)}`);
console.log(`The value is: ${nullishFunction("")}`);
console.log("-----------------------------------------------------");
// example of arrow function with optional parameters
function greet_2(name) {
    console.log(`Hello, ${name !== null && name !== void 0 ? name : "Guest"}`);
}
greet_2("Mahmoud");
greet_2(); // No name provided, will use default "Guest"
console.log("-----------------------------------------------------");
function add(a, b) {
    return a + b;
}
console.log(`The sum of numbers is: ${add(5, 10)}`);
console.log(`The concatenation of strings is: ${add("Hello, ", "TypeScript!")}`);
console.log("-----------------------------------------------------");
// example of overloading arrow functions
const addArrow = (a, b) => {
    return a + b;
};
console.log(`The sum of numbers is: ${addArrow(5, 10)}`);
console.log(`The concatenation of strings is: ${addArrow("Hello, ", "TypeScript!")}`);
console.log("-----------------------------------------------------");
// example of promises
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            }
            else {
                reject("Invalid URL");
            }
        }, 1000);
    });
};
fetchData("https://api.example.com/data")
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.error(error);
});
console.log("-----------------------------------------------------");
// example of async/await   
const fetchDataAsync = async (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            }
            else {
                reject("Invalid URL");
            }
        }, 1000);
    });
};
async function main() {
    try {
        const data = await fetchDataAsync("https://api.example.com/data");
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
main();
console.log("-----------------------------------------------------");
// example of async/await with error handling
const fetchDataAsync2 = async (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            }
            else {
                reject("Invalid URL");
            }
        }, 1000);
    });
};
async function main2() {
    try {
        const data = await fetchDataAsync2("https://api.example.com/data");
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
main2();
console.log("-----------------------------------------------------");
// example of async/await with multiple promises
const fetchDataAsync3 = async (urls) => {
    const promises = urls.map(url => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            }
            else {
                reject("Invalid URL");
            }
        }, 1000);
    }));
    return Promise.all(promises);
};
async function main3() {
    try {
        const data = await fetchDataAsync3(["https://api.example.com/data1", "https://api.example.com/data2"]);
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
main3();
console.log("-----------------------------------------------------");
// example of async/await with error handling in multiple promises
const fetchDataAsync4 = async (urls) => {
    const promises = urls.map(url => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            }
            else {
                reject("Invalid URL");
            }
        }, 1000);
    }));
    return Promise.all(promises);
};
async function main4() {
    try {
        const data = await fetchDataAsync4(["https://api.example.com/data1", "https://api.example.com/data2"]);
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
main4();
//# sourceMappingURL=advanced.js.map