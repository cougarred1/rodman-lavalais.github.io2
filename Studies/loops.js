/**
 * LOOPS
 * 
 * 0. loops are used to repeatedly execute a block 
 * of code based on a condition or a set number of iterations.
 * They are useful for repeating tasks and iterating
 * over arrays or other data structures. 
 * 
 * 1. For loop iterates through a specificied number of iterations. It includes a start, stop and update
 * While loop repeatedly loops as long as the condition is true.
 * For loop is used to iterate through properties of object, can't use on arrays
 * 
 * 2 & 3 Combined. To count up to a limit, then count back down to 0, it will take two for loops
 * 
 * 4. We can use for in loop to iterate over object
 * 
 * 
 */

// 1. While Loops
/**
 * This function will repeat until i is no longer smaller than 5
 */
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// For loop
/**
 * The loop here repeats for a specific number of iterations
 */
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// For in loop
// This is the loop for iterating through objects, can't be used on arrays
const person = {
    name: "Rodman",
    age: 24,
    city: "New Orleans"
  };
  
  for (const key in person) {
    console.log(key + ": " + person[key]);
  }

  // 2 & 3. Creating a loop that counts forward then comes back to 0
/**
 * This function uses two loops to first found from zero
 * to the limit listen. Then after than being done the function
 * then goes from the limit all the way back to zero one by one
 */
  function countForwardAndBackward(limit) {
    // Forward counting
   
    for (let i = 0; i <= limit; i++) {
      console.log(i);
    }
  
    // Backward counting
 
    for (let j = limit; j >= 0; j--) {
      console.log(j);
    }
  }

  // 4. Loop over an object
/**
 * This function iterates over the keys 
 * in the personTwo object
 */
  const personTwo = {
    name: "Rodman",
    age: 24,
    city: "New Orleans"
  };
  
  for (const key in personTwo) {
    console.log(key + ": " + personTwo[key]);
  }