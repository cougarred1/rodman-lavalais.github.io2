/**
 * FUNCTIONS
 * 
 * 0. Functions are blocks of code that can be reused 
 *  any number of times and called to perform specific tasks.
 * By enabling code to be reused , it reduces complexity
 * 
 * 1. Functions ahve two phases which include the function creation, 
 * and the exectuion, which is also known as the functon call
 * 
 * 2. The difference between a parameter and arguments
 * is the parameters are just place holders, for the actual values
 * that will used to test the function
 * 
 * 3. The syntax for a named function includes the function keyword
 * to define the function, the function name, the parameters, then 
 * the function body
 * 
 * 4. We can assign a function to a variable by using function
 * expression
 * 
 * 5. Functions can optionally take inputs by parameters, 
 * and specify outputs by returns, and calling function with
 * arguments
 * 
 * 6. When dealing with functions, we have global scopes and local scopes
 * 
 * 7. When a function returns a object that contains one or more inner functions,
 * that object is stored to a variable or in another object, and the closure remains as
 * long as its referenced
 */


// 1. Function Creation and function call
/**
 * function creation use used by the function
keyword and the function anme which is add

the function is executed by the function call
add();
 */
function add(x, y){

    return x + y;
}
add(5, 1);

// 2 . Parameters and arguments
/**
 * Parameters are place holders, which here is x and y
 * Arguments are the numbers passed into the function call
* 5 and 1.
 */
function subtract(x, y){

    return x - y;
}
add(5, 1);

// 3. Syntax for a named function
/**the function keyword, 
 * then the name
 * then the parameters,
 * then the curly braces which include the arguments
 * then return if needed and function call optionally
 * 
 */
function multiply(x, y){

    return x * y;
}
multiply(5, 1);

// 4. Assign function to variable
/**
 * You can assign function to a variable by 
 * using function expressions
 */
const variableName = function(parameters) {
    // Function body
    // Code to be executed
    // Optionally, return a value
  };

// 5. optionally take inputs and optionally return outputs
/**
 * we optionally take input by parameter names,
 * where here is x and y. then we optionally chose to
 * return it by the return keyword
 */
function multiply(x, y){

    return x * y;
}
multiply(5, 1);

// 6. Scope explained
/**
 * Globlal scopes are the 2 variables before the function
 * local is everything inside the curely brackets
 */
let newNum = 0;
var output = [];
function multiply(x, y){

    return x * y;
}
multiply(5, 1);

// 7. Closures

/**
 * This is a function that has only one closer,
 * which keeps track of a counter
 * 
 */

function createPrintFunction() {
    let counter = 0;
  
    function print() {
      counter++;
      console.log(`Print count: ${counter}`);
    }
  
    return print;
  }
