/* 1. Write a program to display the city name if the string 
begins with "Los" or "New" otherwise return "The city name 
does not begin with Los or New".  */

/* 2. Write a program to compute the sum of three elements 
of a given array of integers. The length of the array must 
be 3.  
* **Example**
* [5, 10, 15] ➞ 30 */
let a2 = [20 + 30 +60];
let total2 = 0;

for (let i = 0; i < a2.length; i++) {
    console.log(a2); /* 110 */
}

/* 3. Given two strings, firstName and lastName, return a 
single string in the format "last, first".
* **Examples**
* "John", "Doe" ➞ "Doe, John"
* "Mary", "Jane" ➞ "Jane, Mary" */
let firstName = "Alisio";
let lastName = "Delgado";

if(lastName || firstName){
console.log(`${lastName} ${firstName}`);/* Delgado Alisio */
}

/* 4. Write a program that takes an integer and returns true 
if it's divisible by 100, otherwise return false.
* **Examples**
* 1 ➞ false
* 1000 ➞ true
* 100 ➞ true */

let a4 = 1000;
let b4 = 100;

if(a4 % 100 === 0) {
    console.log(`${a4} is divisible by 100`);
} else if (a4 % 100 != 0) {
console.log(false);
}
/* 
Using a4 = 50 console.log (false)
Using a4 = 1000 console.log(1000 is divisible by 100)
*/

/* 5. Write a program that adds a string 
to each item 
in an array.
* **Examples & Expected output**
* ["clever", "meek", "hurried", "nice"], "ly" ➞ 
["cleverly", "meekly", "hurriedly", "nicely"]
* ["new", "pander", "scoop"], "er" ➞ 
["newer", "panderer", "scooper"]
* ["bend", "sharpen", "mean"], "ing" ➞ 
["bending", "sharpening", "meaning"] */

let a5 = ["clever", "meek", "hurried", "nice"];
a5 = a5.map(i => '#' + i);
console.log(a5);
/* [ '#clever', '#meek', '#hurried', '#nice' ]
*/


/* 6. Write a program that checks whether a number is 
even or odd and returns "even" for even numbers and 
"odd" for odd numbers.
* **Examples & Expected Output**
* 3 ➞ "3 is odd"
* 146 ➞ "146 is even"
* 19 ➞ "19 is odd" */

for (i = 1; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}
/* 0 is even
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd
10 is even
11 is odd
12 is even
13 is odd
14 is even
15 is odd
16 is even
17 is odd
18 is even
19 is odd
20 is even
21 is odd
22 is even
23 is odd
24 is even
25 is odd
 */


/* 8. Make a variable with the string value of "maria jane 
jones". Convert each first letter to uppercase. Make sure 
your code works for any three names e.g. "john james smith".  */
let a8 = "john james smith";
console.log(a8.toUpperCase(0));

/* let str = "Hello World";
console.log(str.toUpperCase()); */



/* 
9. Write a program that takes a string and returns the word count. The string will be a sentence.
* **Examples Expected output**
* "This is an example" ➞ 4
* "One more example for good measure" ➞ 6
* "JavaScript is fun, right?" ➞ 4 */

let a9 = "Alisio";
let b2 = 5;
if(a9){
console.log(`${b2}`);
}

/* Now I realize is wrong
I was trying to make number 10 but no time. Thanks for the test!
I will try to make it faster next time */


