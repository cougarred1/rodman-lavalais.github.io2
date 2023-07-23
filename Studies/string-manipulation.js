/**
 * STRING MANIPULATION
 * 
 * 0. String Manipulation are built in methods and techniques provided by Javascript,
 * allowing us to perform different actions on sttrings
 * 
 * 1. Operators used - The operators used commonly in string manipulation are +
 * 
 * 2. String methods - string methods are methods used to manipulaton strings
 */



//1. Operators Used
// + Operator is used to combine two or more strings together 
const str1 = "Hello";
const str2 = "Guys";
const result = str1 + " " + str2;

// String Methods
//string methods common used are .concat, .length, .toLowerCase(), toUpperCase()

//concat
const concatenated = str1.concat(" ", str2);

//.length
const myString = "Hello, Guys!";
const length = myString.length;

//toLowerCase & toUpperCase()
const myString = "Hello, Nerds!";
const lowercase = myString.toLowerCase(); 

const uppercase = myString.toUpperCase();
