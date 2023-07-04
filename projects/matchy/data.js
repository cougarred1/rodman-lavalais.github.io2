/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//variable created name animal which is a empty 
var animal = {};

//create a property using dot notation, named species and assign it to 'Tiger'
animal.species = "Tiger";

//using bracket notation, create a property called 'name' and assign it any name I want
animal['name'] = "Rodman";

//using either notation give animal a property of called noises with a empty array
animal.noises = [];

console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//noises variable creating equaling empty array
var noises = [];

//use bracket notation to give noises its first element. a string representing sound it might make
noises[0] = "Roar";

//added another string representing another sound to the back of noises using the .push method
noises.push("Growl"); 

//uses the unshift method to add another sound "purr" to the beginning of the noises array
noises.unshift("purr");

//use bracket notation to add another element to the end of noises, without hardcoding
noises[noises.length] = "cry";

//console log the length of noises
console.log(noises.length);


//console log the entire array

console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//use bracket notation to assign our noises key on animal to our noises array
animal["noises"] = noises;

//add another noise to the 'noises' property on animal

  animal.noises.push("hello");

  console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * You can use bracket notation or dot notation
 *
 * 2. What are the different ways of accessing elements on arrays?
 *  Use bracket notation to reach each index
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];


//push animal we created into animals
animals.push(animal);

//console log animals
console.log(animals);

//create variable duck and assign it to given data
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

//push duck to animals
animals.push(duck);

//console log animals
console.log(animals);

var lion = {
  species: 'cat',
  name: 'beast',
  noises: ['beast roar', 'battle cry']
};

var chicken = {
  species: 'cockle doodle doo',
  name: 'rooster',
  noises: ['hi', 'bye'] 
};

//console log animals
console.log(animals);

//console log the length
console.log(animals.length);

animals.push(lion);

animals.push(chicken);




//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//chose this data structure, because for the info a array works good
var friends = [];

// 5. Write a function called `getRandom` that takes our `animals` array and returns a random `index` of the input array, using `Math.random`.
function getRandom(animals) {
  var randomIndex = Math.floor(Math.random() * animals.length);
  return randomIndex;
}

// 6. Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
var randomIndex = getRandom(animals);
var randomAnimal = animals[randomIndex];
friends.push(randomAnimal.name);

// 7. `console.log` `friends`.
console.log(friends);

// 8. Using bracket notation, add the `friends` list as a property also named `friends` on one of the animals in the `animals` array.
randomAnimal['friends'] = friends.slice();

// 9. console.log your work.
console.log(randomAnimal);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}