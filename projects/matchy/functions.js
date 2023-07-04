/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].name === name) {
        return animals[i]; // Return the animal's object if the name matches
      }
    }
    
    return null; // Return null if no animal with that name exists
  }
  



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function replace(animals, name, replacement) {
      
    for (let i = 0; i < animals.length; i++) {
      
      if (animals[i].name === name) {
        
        animals[i] = replacement;
        
        break;
      }
    }
  }
  


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
      if (animals[i].name === name) {
        animals.splice(i, 1);
        break; // Exit the loop after removing the animal
      }
    }
  }

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
  
    //  length > 0
    if (animal.name.length < 0) {
      return;
    }
  
      if (animal.species.length < 0){
        return; 
      }
  
  
  
    // Check if the animal name is unique
    var isNameUnique = false;
    for (var i = 0; i < animals.length; i++) {
      if (animals[i].name === animal.name) {
        isNameUnique = true;
        break;
      }
    }
    
    
    if (isNameUnique) {
      return;
    }
  
    // All conditions pass, add the new animal to the animals Array
    animals.push(animal);
  }



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
