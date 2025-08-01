// exammple of arrow function in class
class Person {
    constructor(public name: string, public age: number) {}

    greet = (): void => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }   
}
const person = new Person("Mahmoud", 25);
person.greet();
console.log("-----------------------------------------------------");
// example of arrow function with this context
const obj = {
    value: 42,
    getValue: function() {
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
    getValue: function() {
        return () => {
            console.log(`The value is: ${this.value}`);
        };
    }
}
obj2.getValue()?.(); // Call the arrow function to see the value
console.log("-----------------------------------------------------");
// example of optional with arrow function
const optionalFunction = (callback?: () => void): void => {
    if (callback) {
        callback();
    } else {
        console.log("No callback provided.");
    }
}
optionalFunction(() => {
    console.log("Callback executed.");
});
optionalFunction(); // No callback provided
console.log("-----------------------------------------------------");
// example of arrow function with nullish coalescing
const nullishFunction = (value: string | null | undefined): string => {
    return value ?? "Default Value";
}
console.log(`The value is: ${nullishFunction("Hello")}`);
console.log(`The value is: ${nullishFunction(null)}`);
console.log(`The value is: ${nullishFunction(undefined)}`);
console.log(`The value is: ${nullishFunction("")}`);
console.log("-----------------------------------------------------");
// example of arrow function with optional parameters
function greet_2(name?: string) {
  console.log(`Hello, ${name ?? "Guest"}`);
}
greet_2("Mahmoud");
greet_2(); // No name provided, will use default "Guest"
console.log("-----------------------------------------------------");
//example of overloading functions
function add(a: number, b: number): number; 
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}       
console.log(`The sum of numbers is: ${add(5, 10)}`);
console.log(`The concatenation of strings is: ${add("Hello, ", "TypeScript!")}`);
console.log("-----------------------------------------------------");
// example of overloading arrow functions
const addArrow: {
    (a: number, b: number): number;
    (a: string, b: string): string;
} = (a: any, b: any): any => {
    return a + b;
};
console.log(`The sum of numbers is: ${addArrow(5, 10)}`);
console.log(`The concatenation of strings is: ${addArrow("Hello, ", "TypeScript!")}`);
console.log("-----------------------------------------------------");
// example of promises
const fetchData = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            } else {
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
const fetchDataAsync = async (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            } else {
                reject("Invalid URL");
            }
        }, 1000);
    });
};
async function main() {
    try {
        const data = await fetchDataAsync("https://api.example.com/data");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
main();
console.log("-----------------------------------------------------");
// example of async/await with error handling
const fetchDataAsync2 = async (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            } else {
                reject("Invalid URL");
            }
        }, 1000);
    });
};
async function main2() {
    try {
        const data = await fetchDataAsync2("https://api.example.com/data");
        console.log(data);
    } catch (error) {
        console.error(error);
    }   
}
main2();
console.log("-----------------------------------------------------");
// example of async/await with multiple promises
const fetchDataAsync3 = async (urls: string[]): Promise<string[]> => {
    const promises = urls.map(url => 
        new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (url) {
                    resolve(`Data fetched from ${url}`);
                } else {
                    reject("Invalid URL");
                }
            }, 1000);
        })
    );
    return Promise.all(promises);
};  
async function main3() {
    try {
        const data = await fetchDataAsync3(["https://api.example.com/data1", "https://api.example.com/data2"]);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
main3();
 
console.log("-----------------------------------------------------");
// example of async/await with error handling in multiple promises
const fetchDataAsync4 = async (urls: string[]): Promise<string[]> => {
    const promises = urls.map(url => 
        new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (url) {
                    resolve(`Data fetched from ${url}`);
                } else {
                    reject("Invalid URL");
                }
            }, 1000);
        })
    );
    return Promise.all(promises);
};  
async function main4() {
    try {
        const data = await fetchDataAsync4(["https://api.example.com/data1", "https://api.example.com/data2"]);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
main4(); 
