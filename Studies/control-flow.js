/**
 * CONTROL FLOW
 * 
 * 0. Control Flow refers to the order or path in which code is 
 * executed to the program. Based on the conditons set by us, it 
 * determines how the statements or blocks of code are executed.
 * 
 * 1. If statements - The if statement allows code we set to executed 
 * based on our condition. If the condition is true, the code inside the
 * if block executes. If not, the code inside the else block does
 * 
 * 2. Else-if - The else if statement allows our code built within it to 
 * execute, if the argument didn't meet the if statement criteria
 * 
 *3. Else statements - Else statement is the code that executes, if the if statement
 nor the else-if statements code blocks executed. It's a last resort 
 situation

 4. Switch statements - The switch statement allows one of multiple 
 code blocks to be executed. It provides a value, then that value is tested
 by all the cases shown. Which ever statement passes the value, that 
 block of code is executed.
 */

 // 1. If Statements -
 //The variable 3 passes the statement, so the code executes 
 let number = 3;
if (number > 0) {
  console.log("Positive");
} 

// 2. Else-if statements - 
/**
 * The variable doesn't pass the first statement, so it
 * gets passed to the second which it does pass. So that block
 * of code executes
 */
let numTwo = -10;
if (numTwo > 0) {
  console.log("Positive");
} else {
  console.log("Non-positive");
}

// 3. Else statements - 
/**
 * The variable doesnt pass the if, nor the else if statement
 * so last resort is passing to the else statement
 * which that code executes
 */
const numThree = -1;
if (numThree > 3) {
  console.log("Bigger than 3");
} else if (numThree < -10) {
  console.log("Smallet than negative 10");
} else {
    console.log("The number matches no criteria");
}

// 4. Switch statements - 
/**
 * The variable selects with code block to be
 * executed, that has a case that matches it's values. 
 */
const color = "Red";
switch (day) {
  case "Blue":
    console.log("We like Blue");
    break;
  case "Red":
    console.log("We like Red");
    break;
  default:
    console.log("These colors suck");
}