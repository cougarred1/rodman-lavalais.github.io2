/**
 * VARIABLES
 * 
 * 0: Variables are name cotainers for data in javascript, which are used to store values. Variables are 
 identifiers that can store or implement data like numbers, strings, boolean, arrays, objects, etc. Variables
 can be changed later on depended on how they're declared.
 * 
 * 1: Declaration and assignment: To create a variable in javascript we must create it using one of three decorative keywords
 var, let, or const. Followed by the name of our variable.
 * 
 * 2. There are 2 steps to creating a variable: Declaring and assigning.
 * 
 * 3. Hoisting: when using the function keyword, that function is brought to the top of your code, regardless
  where you have it. When declaring a variable with var , hoistinf also brings the declared variable to the top also, 
  however it doesn't bring the value assigned and assign it as undefined instead.

 */

//1. Declaration 

//The variable here is just declared, and not assigned. which makes it undefined,
var age;
console.log(age); //prints => undefined 

//2. Assignment
//age is now assigned the number 35 as it's value
age = 35;
console.log(age); //prints => 35

//3. Re-assignment
//updating the value of the value that has already 
age = 100;
console.log(age); //prints => 100

//4. Hoisting
//the console reads the variable declaration first, but not the value with it.
console.log(age);

var age = 7; //prints => undefined.
