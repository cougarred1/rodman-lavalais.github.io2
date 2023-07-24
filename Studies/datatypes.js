/**
 * DATA TYPES
 * 
 * 0. Data types are pieces of data that tells 
 * the computer how to interpret its value.
 * 
 * 1. Number - Represents numeric values .
 * 
 * 2. String -  textual data, enclosed in single ('') or double ("") quotes
 * 
 * 3. Boolean - Represents true or false values
 * 
 * 4. Array -   an ordered collection of elements, which can be of any data type.
 * 
 * 5. Object -  a collection of key-value pairs, allowing you to store and access multiple values by their keys.
 * 
 * 6. Function -  a reusable block of code that can be invoked with zero or more arguments
 * 
 * 7. Undefined - A variable has not been assigned a value
 * 
 * 8. Null - Intentional absence of any object value
 * 
 * 9. NaN - Number that's not a legal number
 * 
 * 10. Infinity and -Infinity They are used to represent numbers
 *  that are beyond the largest (positive infinity) or smallest 
 * (negative infinity) representable numbers in JavaScript.
 * 
 * 11. Simple vs Complex - Simple can only be stored on one value
 * at a time. Complex data structures can hold collections of values and have dynamic sizes.
 * 
 * 12. When you assign a primitive value, the actual value of the data 
 * is stored in the variable. Complex values does not store the actual value of the data.
 */



// 1. Number
// The value holds a numeric value
let hello = 400;

// 2. String
// data sounded by quotes
let city = "New Orleans";

// 3. Boolean
//results as true
(10 > 9);

// 4. Array
// A variable holding ordered collection
//of elements
let food = ['protein', 'fruit', 'veggies'];

// 5. Object
//represents a collection of key value pairs
//allowing us to store and access multiple values by their keys
let items = {
    Book: 'Transformers',
    Food: 'Cake',
    Awesome: true
}

// 6. Function
//a block of code that is reusable
//can be invoked with zero or more arguments
function add(x, y){
    return x + y;
}

// 7. Undefined
//Counter wasn't assigned a value so it will be undefined
let counter;
console.log(counter);

// 8. null

console.log(null == undefined);

// 9. NaN
//This is an invalid number
console.log('a'/2);

// 10. Infinity and -infinity
//The value Infinity (positive infinity) is greater than any other number.
const maxNumber = Math.pow(10, 1000);

// 11. and 12. Simple and Complex
/**
 * Simple has a direct value stored in it
 * While arr2 does not store the exact value,
 * it holds the reference
 */
//Simple 
let num1 = 10;

//Complex const
let arr1 = [1, 2, 3];
const arr2 = arr1;

