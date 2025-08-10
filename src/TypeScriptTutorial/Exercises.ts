//example of remove duplicate elements from an array
const removeDuplicates = (arr: any[]): any[] => {
    return Array.from(new Set(arr));
} 
const numbersArrays: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbersArrays);
console.log(`Unique numbers: ${uniqueNumbers}`); 
console.log("-----------------------------------------------------");
// example of counting occurrences of elements in an array
const countOccurrences = (arr: any[]): Map<any, number> => {
    const occurrences = new Map<any, number>();
    arr.forEach(item => {
        occurrences.set(item, (occurrences.get(item) || 0) + 1);
    });
    return occurrences;
}
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const occurrences = countOccurrences(fruits);
console.log(
  `Occurrences: ${JSON.stringify(Object.fromEntries(occurrences))}`
);
console.log("-----------------------------------------------------");
// example of  count occurrences of elements in an array of numbers
const items = [1, 2, 1, 2, 3, 4, 3];
const countMap: Record<string, number> = {};

for (const item of items) {
  countMap[item] = (countMap[item] || 0) + 1;
}
console.log(countMap);
console.log("-----------------------------------------------------");
// example of finding the intersection of two arrays
const intersection = (arr1: any[], arr2: any[]): any[] => {
    return arr1.filter(item => arr2.includes(item));
}
const array3 = [1, 2, 3, 4, 5];
const array4 = [3, 4, 5, 6, 7];
const intersectionResult = intersection(array3, array4);
console.log(`Intersection: ${intersectionResult}`);
console.log("-----------------------------------------------------");   
// example of palindrome check
const isPalindrome = (str: string): boolean => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
}
const word = "A man, a plan, a canal: Panama!"; 
const palindromeCheck = isPalindrome(word);
console.log(`Is the message a palindrome? ${palindromeCheck}`);
console.log("-----------------------------------------------------");
// example of finding the longest word in a sentence
const findLongestWord = (str: string): string => {
    const words = str.split(" ");
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}
const sentence_2 = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence_2);
console.log(`Longest word: ${longestWord}`);
console.log("-----------------------------------------------------");
// example of finding the shortest word in a sentence
const findShortestWord = (str: string): string => {
    const words = str.split(" ");
    return words.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, words[0]);
}
const sentence_3 = "The quick brown fox jumps over the lazy dog";
const shortestWord = findShortestWord(sentence_3);
console.log(`Shortest word: ${shortestWord}`);
console.log("-----------------------------------------------------");
// example of reversing a string
const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
}
const sentence_4 = "Hello, TypeScript!";
const reversedSentence = reverseString(sentence_4);
console.log(`Reversed string: ${reversedSentence}`);
console.log("-----------------------------------------------------");
// example of checking if a string is an anagram
const isAnagram = (str1: string, str2: string): boolean => {
    const normalize = (str: string): string => {
        return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").sort().join("");
    }
  
    return normalize(str1) === normalize(str2); 
}
const str1 = "listen";
const str2 = "silent";
const anagramCheck = isAnagram(str1, str2);
console.log(`Are the strings anagrams? ${anagramCheck}`);
console.log("-----------------------------------------------------");
// example of converting a string to title case
const toTitleCase = (str: string): string => {
    return str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}
const sentence_5 = "hello, world!";
const titleCasedSentence = toTitleCase(sentence_5);
console.log(`Title-cased sentence: ${titleCasedSentence}`);
console.log("-----------------------------------------------------");
// example of checking if a string contains only digits
const isNumeric = (str: string): boolean => {
    return /^\d+$/.test(str);
}
const str_2 = "12345";
const numericCheck = isNumeric(str_2);
console.log(`Is the string numeric? ${numericCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string contains only letters
const isAlpha = (str: string): boolean => {
    return /^[a-zA-Z]+$/.test(str);
}
const str_3 = "Hello";
const alphaCheck = isAlpha(str_3);
console.log(`Is the string alpha? ${alphaCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string contains only letters and spaces
const isAlphaSpace = (str: string): boolean => {
    return /^[a-zA-Z\s]+$/.test(str);
}
const str_4 = "Hello World";
const alphaSpaceCheck = isAlphaSpace(str_4);
console.log(`Is the string alpha and space? ${alphaSpaceCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string contains only alphanumeric characters
const isAlphanumeric = (str: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(str);
}
const str_5 = "Hello123";
const alphanumericCheck = isAlphanumeric(str_5);
console.log(`Is the string alphanumeric? ${alphanumericCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string contains only lowercase letters
const isLowerCase = (str: string): boolean => {
    return /^[a-z]+$/.test(str);
}
const str_6 = "hello";
const lowerCaseCheck = isLowerCase(str_6);
console.log(`Is the string lowercase? ${lowerCaseCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string contains only uppercase letters
const isUpperCase = (str: string): boolean => {
    return /^[A-Z]+$/.test(str);
}
const str_7 = "HELLO";
const upperCaseCheck = isUpperCase(str_7);
console.log(`Is the string uppercase? ${upperCaseCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string is a valid email
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const email_1 = "hGk0t@example.com";
const emailCheck = isValidEmail(email_1);
console.log(`Is the email valid? ${emailCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string is a valid URL
const isValidURL = (url: string): boolean => {
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlRegex.test(url);
}
const url_1 = "https://www.example.com";
const urlCheck = isValidURL(url_1);
console.log(`Is the URL valid? ${urlCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string is a valid phone number
const isValidPhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(phone);

}
const phone_1 = "+1234567890";
const phoneCheck = isValidPhoneNumber(phone_1);
console.log(`Is the phone number valid? ${phoneCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string is a valid date
const isValidDate = (date: string): boolean => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/; // DD-MM-YYYY format
    return dateRegex.test(date);
}
const date_1 = "01-01-2023";
const dateCheck = isValidDate(date_1);
console.log(`Is the date valid? ${dateCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string is a valid time
const isValidTime = (time: string): boolean => {
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/; // HH:MM format
    return timeRegex.test(time);
}
const time_1 = "12:00";
const timeCheck = isValidTime(time_1);
console.log(`Is the time valid? ${timeCheck}`);
console.log("-----------------------------------------------------");
// example of checking if a string is a valid JSON
const isValidJSON = (json: string): boolean => {
    try {
        JSON.parse(json);
        return true;
    } catch (e) {
        return false;
    }   
}   
const json_1 = '{"name": "John", "age": 30}';
const jsonCheck = isValidJSON(json_1);
console.log(`Is the JSON valid? ${jsonCheck}`);
console.log("-----------------------------------------------------");

