 export {};
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

function fetchDataWithCallback(callback:any){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (callback) {
            resolve(callback("Data fetched successfully"));
        } else {
            reject("No callback provided");
        }
    }, 1000);
}); 

}

fetchDataWithCallback((message: string) => {
    console.log(message);
})
.catch((error: string) => {
    console.error(error);
});


// calling with async/await
async function fetchDataWithCallbackAsync(callback: any) {
    try {
        const result = await fetchDataWithCallback(callback);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchDataWithCallbackAsync((message: string) => {
    return message;
});
console.log("-----------------------------------------------------");
function fetchDataWithCallbackAsync2(callback?: any){
    // This function simulates fetching data with an optional callback
    // If a callback is provided, it will be executed after the data is fetched
    return new Promise((resolve)=> {
        setTimeout(() => {
            if (callback) {
                console.log("Callback is provided");
                const data= "Data fetched successfully";
                resolve(data);
            } else {
                resolve("No callback provided");
            }
        }, 1000);
        
    })
}
// calling with promises with then/catch
fetchDataWithCallbackAsync2(() => {
    console.log("Callback executed");
}).then((result: unknown) => {
    console.log(result);
}).catch((error: string) => {
    // ...
});
console.log("-----------------------------------------------------");
//calling with promises with async/await with callback with IIFFE
(async () => {
  try {
    const data = await fetchDataWithCallbackAsync2(() => {
      console.log("Callback executed");
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
// Declare a named async function
async function runFetchData() {
  try {
    const data = await fetchDataWithCallbackAsync2(() => {
      console.log("Callback executed");
    });
    console.log("Final Result:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// ✅ Call the function explicitly
runFetchData();
// calling with promises with async/await without callback
(async () => {
  const data = await fetchDataWithCallbackAsync2();
  console.log(data);
})();

console.log("-----------------------------------------------------");

// calling with async/await without callback 2
async function callingWithAsync() {
  const result = await fetchDataWithCallbackAsync2();
  console.log("Result:", result);
}

callingWithAsync();
console.log("-----------------------------------------------------");