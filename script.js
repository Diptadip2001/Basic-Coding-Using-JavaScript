// 1. Write a Program to reverse a string in JavaScript.

function reverseString(str) {
    let reverseStr='';
    for(let i=str.length-1; i>=0; i--){
        reverseStr+=str[i];
    }
    return reverseStr;
};
console.log(reverseString("hello"));
// 2. Write a Program to check whether a string is a palindrome string.

function pallindrome(str){
    str=str.toLowerCase();
     let reverseStr='';
    for(let i=str.length-1; i>=0; i--){
        reverseStr+=str[i];
    }
    if(reverseStr==str){
        return true;
    }
    return false;
}
console.log(pallindrome("malayalam"));

// Find the largest number in an array in JavaScript.

function largest(arr){
    let max=Number.MIN_VALUE;
    for(let i of arr){
        if(i>max){
            max=i;
        }
    }
    return max;
}
let b=[1,2,3,4,5];
console.log(largest(b));

// How Remove the first element from an array in JavaScript?
let b1=[1,2,3,4,5];
b1.shift();
console.log(b1);

// Write a Program to find a sum of an array?
let b2=[1,2,3,4,5];
let result=b2.reduce((acc,sum)=>acc+sum);
console.log(result);

// Write a Program to check if a number is prime or not?
function primeornot(b){
    for(let i=2;i<=Math.sqrt(b);i++){
        if(b%i==0){
            return false;
            break;
        }
        return true;
    }

}
let res=primeornot(41);
if(res){
    console.log("Prime")
}
else{
    console.log("Not Prime");
    
}

// Write a Program to print Fibonacci sequence up to n terms?
function fibonacci(n) {
  if (n <= 1) return n;
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fibonacci(5)); 
// Write a Program to find factorial of a number?

function fact(n){
    if(n==0||n==1){
        return 1;
    }
    return n* fact(n-1);
}
console.log(fact(5));

function freq(str) {
    // Remove spaces from the string and update it
    str = str.replace(/\s+/g, '');

    // Create a frequency map
    const frequencyMap = new Map();

    for (let char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
}

// Example usage
const str = "hello world";
const frequency = freq(str);

// Display the frequency of each character
frequency.forEach((count, char) => {
    console.log(`${char}: ${count}`);
});


let str1="apple,mango,banana";
console.log(str1.substring(4,1));
let str2=str1.slice(-4,-2);
console.log(str2.substring(-4,-2))//it will take as 0,0

function abc(arr){
    let frequencyMap=new Map();
    for(let i of arr){
        frequencyMap.set(i,(frequencyMap.get(i)||0)+1);
    }
    return frequencyMap;
}
let frequencyMapResult=abc([1,2,3,4,5]);
frequencyMapResult.forEach((count, data) => {
    console.log(`${data} : ${count}`);
    
})
//  Write a Program to convert Celsius to Fahrenheit in JavaScript?
 function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

// Write a Program to convert Fahrenheit to Celsius in JavaScript?
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
let fahrenheit1 = 77;
let celsius1 = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit1}°F is equal to ${celsius1}°C`);

// Write a Program to sort an array in Ascending Order in JavaScript?

let b4=[2,1,3,4,5];
b4.sort((a,b)=>a-b);
console.log(b4);
// Write a Program to sort an array in Descending Order in JavaScript?
let b3=[2,1,3,4,5];
b3.sort((a,b)=>b-a);
console.log(b3);

// Find the Intersection of Two Arrays in JavaScript?


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let intersection = arr1.filter(value => arr2.includes(value));
console.log(intersection);


// Find the Union of Two Arrays in JavaScript?

let arr3 = [1, 2, 3, 4, 5];
let arr4 = [4, 5, 6, 7, 8];
let union=[...new Set([...arr3,...arr4])];
console.log(union);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];
// let arr3 = [];
// let max=(arr1.length>arr2.length)?arr1:arr2;
// for(let i=0;i<max.length;i++){
//     arr3.push(arr1[i]);
//     arr3.push(arr2[i]);

//     }
//     console.log(arr3);
    
// Check if a Number is Even or Odd in JavaScript?
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEvenOrOdd(5));

// Write a Program to find the minimum value in an array in JavaScript?
function findMin(arr) {
    let min = Number.MAX_VALUE;
    for (let i of arr) {
        if (i < min) {
            min = i;
        }
    }
    return min;
}
let arr5 = [3, 1, 4, 1, 5, 9];
console.log(findMin(arr5));
// Check if a String Contains Another String in JavaScript?
function containsString(str, subStr) {
    return str.includes(subStr);
}
console.log(containsString("Hello, world!", "world")); 

// Find the First Non-Repeated Character in a String in JavaScript?

function firstNonRepeatedChar(str) {
    const frequencyMap = new Map();

    for (let char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    for (let char of str) {
        if (frequencyMap.get(char) === 1) {
            return char;
        }
    }

    return null;
}
console.log(firstNonRepeatedChar("swiss")); 

// Find the Longest Word in a String in JavaScript?
function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));

// Capitalize the First Letter of Each Word in a Sentence in JavaScript?

function capitalizeFirstLetter(str) { 
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); 
} 
console.log(capitalizeFirstLetter("hello world"));


// Convert an Array of Strings to Uppercase in JavaScript?
let arr6 = ["apple", "banana", "cherry"];
for(let i=0;i<arr6.length;i++){
    arr6[i]=arr6[i].toUpperCase();
}
console.log(arr6);
// Write a Program to reverse an array in JavaScript?

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
let arr7 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr7));

// Get the last element of an array in JavaScript?

let arr8 = [1, 2, 3, 4, 5];
let lastElement = arr8[arr8.length - 1];
console.log(lastElement);

// Remove falsy Values from an array in JavaScript?
let arr9 = [0, 1, false, 2, '', 3, null, 4, undefined, 5];
let filteredArr = arr9.filter(Boolean);
console.log(filteredArr);

// Check if Two Strings are Anagrams or not in JavaScript?
function areAnagrams(str1, str2) {
    if(str1.length===str2.length){
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
    }
}
console.log(areAnagrams("listen", "silent"));

// Find the maximum difference between two numbers in an array in JavaScript?

function maxDifference(arr) {
    let maxDiff = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const diff = Math.abs(arr[i] - arr[j]);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }
    return maxDiff;
}
let arr10 = [1, 2, 3, 4, 5];
console.log(maxDifference(arr10));


// Remove Duplicates from an Array in JavaScript?

function removeDuplicates(arr) {
    const uniqueArr = [];
    const frequencyMap = new Map();

    for (let i of arr) {
        if (!frequencyMap.has(i)) {
            uniqueArr.push(i);
            frequencyMap.set(i, 1);
        }
    }

    return uniqueArr;
}
let arr11 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr11));

// Count Vowels in a String in JavaScript?

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("Hello, World!"));
//  Get Unique Characters from a String in JavaScript?
function getUniqueCharacters(str) {
    const uniqueChars = new Set();

    for (let char of str) {
        uniqueChars.add(char);
    }

    return Array.from(uniqueChars).join("");
}
console.log(getUniqueCharacters("hello world"));
