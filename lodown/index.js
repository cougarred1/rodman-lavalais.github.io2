'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * identity: Takes in a value and returns it unchanged
 * @param {*} value : Function takes in any input value
 * @returns {*} value : Function returns input value unchanged
 */
function identity(value) {
    return value;
}

module.exports.identity = identity;
/** 
* typeOf: Takes in a value and returns it as a string
* @param {*} value : Function takes in any input value
* @returns {*} value : Function the value as a string
*/
_.typeOf = function(value){
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'object'){
        return 'object';
    } else if (typeof value === 'string') {
        return 'string'
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (typeof value === 'function') {
        return 'function';
    }
}

module.exports.typeOf = typeOf;
/////////////////////////////////////////////////////////
/** 
* first: Takes in an array and number, and return [] if !array, and return the first element in array if !number
* @param {*} value : Function takes in an array, and a number
* @returns {*} value : Returns empty array, and first element in array
*/
_.first = function(array, number) {

    if (!Array.isArray(array)) {
        return [];
    } else if (!number){
        return array[0];
    } else if (number > array.length) {
        return array;
    } else {
        let items = [];
        
        for (let x = 0; x < number; x++) {
            items.push(array[x]);
        }
      return items;  
    }
    
}
module.exports.first = first;
///////////////////////////////////////////////////////////////////////
/** 
* last: if <array> is not an array, return []
if <number> is not given or not a number,  return the last element in <array>
* @param {*} value : Function takes in an array, and a number
* @returns {*} value : Returns empty array, and first element in array
*/
_.last = function(array, number) {
    if (!Array.isArray(array)) {
        return [];
    } else if (!number){
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        let items = [];
        
        for (let x = 1; x <= number; x++) {
            items.push(array[x]);
        }
      return items;  
    }
}
module.exports.last = last;
/////////////////////////////////////////////////////////
/** 
* indexOf:  Method to find the index of a specified value in an array
* @param {Array} array : the array to search in
* @param {*} value : the value to search for
* @returns {number}  : The index of the first occurence of the valuein the array
or -1 if not found
*/

_.indexOf = function(array, value) {

    for (let x = 0; x < array.length; x++) {
        if (value === array[x]) {
        return x;
        }
     
    
        }
       return -1; 
    }

module.exports.indexOf = indexOf;   
///////////////////////////////////////////////

/** 
* contains: Checks if the array contains the value, and returns false if not
 * @param {Array} array - The array to search in.
* @param {*} value - The value to search for.
 * @returns {boolean} - True if the value is found in the array, false otherwise.
 */
_.contains = function(array, value) {
    let storage = [];

   for (let x = 0; x < array.length; x++) {
    if (array[x] === value) {
        storage.push(array[x]);
    } 
   }
   return (storage[0] === value? true : false);
 }

 module.exports.contains = contains;
 //////////////////////////////////////////////////
 /**
 * each: Checks if collection is an array or object, deciding whether to call 
 <function> for each element or property
 * @param {collection}  : takes in collection for a conditional statement
 @param {function}  : Calls the function, either once for each element or property
 * @returns {*} value : Function returns input value unchanged
 */

 _.each = function(collection, func){

    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        func(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        func(collection[key], key, collection)
      }

    }
}
module.exports.each = each;
///////////////////////////////////////////////////////

/**
 * unique: takes in an array and returns a new array with duplicates removed
 * @param {array}  : An array of elements
 * @returns {array}  : array with duplicates removed

_.unique = function(array) {
    let dupe = [];

    for (let x = 0; x < array.length; x++) {
        if (_.indexOf(dupe, array[x]) === -1) {
            dupe.push(array[x]);

        }
        
    }
    return dupe;
}

module.exports.unique = unique; 
///////////////////////////////////////////////
/**
 * filter: Returns new array containing only the elements for which the function returned true
 * @param {array, func} value : Function takes an array and function
 * @returns {*} value : Function returns a new array when the function returns true
 */
_.filter = function(array, func){
    let newArray = [];
    //for loop created to iterate each element in passing arguments
    for (let x = 0; x < array.length; x++) {
        //calling function for each element(array[x], the index (x), and the array)
        if (func(array[x], x, array)) {
            //if calling the function returned true, push new array of elements
             newArray.push(array[x])
        }
    
    
     }
    //return array;
     return newArray;
    
    }

    module.exports.filter = filter;
    //////////////////////////////////////////////

    /**
 * reject: returns a new array containing only the elements where the function returned false
 * @param {array, function} value : Function takes an array to iterate
 * @returns {*} value : returns new array of values where the function call returned false
 */
    _.reject = function(array, func) {
        let newArray = [];
        
        //iterate through each element
        for (let x = 0; x < array.length; x++) {
        //call function for 
            if (!func(array[x], x, array)){
        
                newArray.push(array[x]);
                //
        
            }
        
            }
            return newArray;
        }
module.exports.reject = reject;

/**
 * partition: akes in an array and return true if there are elements, and return false otherwie
 * @param {Array, func}  : Takes in an array iterating through each element
 * @returns {Array} : Return new array made up of sub arrays
 */

_.partition = function(array, func) {
    //2 sub arrays
    let truthy = [];
    
    let falsy = [];
    //iterate through each element in array
    for (let x = 0; x < array.length; x++) {
        //if there are elements in this function
        if (func(array[x], x, array)) {
            //return truthy;
            truthy.push(array[x]);
            //otherwise return falsy
         } else {
            falsy.push(array[x]);
         }
    
        }
        //return both sub arrays
        return [truthy, falsy];
    }
 module.exports.partition = partition;

 /**
 * map: Tests to see if collection is in an array, if so we iterate through each element
 pushing the elements into the newaRRAY 
 * @param {Collection} : Takes in a collection to iterate through element
 * @returns {*} value : returns newArray with the elements pushed into it
 */
 _.map = function(collection, func){
    let newArray = [];
    //check to see if collection is an array
     if (Array.isArray(collection)) {
        //if so iterate through each element
        for (let x = 0; x < collection.length; x++) {
    //Push the elements of the function into the newArray
        newArray.push(func(collection[x], x, collection));
    
      } 
        
        } else {
            for (let key in collection) {
                if (collection.hasOwnProperty(key)) {
                    newArray.push(func(collection[key], key, collection));
                }
            }
        }
    return newArray;
    }

module.exports.map = map;

/**
 * pluck: Takes in an array of objects and return the array containing the value 
 of property in array elements
 * @param {array of objects} value : Use .map to iterate over each element in array of objects
 * @returns {properies} value : Return element properties
 */

_.pluck = function(array, prop) {

    return _.map(array, function(element) {
        return element[prop];
    });
    
    };

module.exports.pluck = pluck;

/**
 * every: Returns true if if the return value of calling <function> for every
 element is true
 * @param {collection}  : Iterate through the collection
 * @returns {boolean} value : Returns boolean depending on whether the value of calling
 <function> is true or false
 */

 _.every = function(collection, func) {
    if (typeof func !== 'function') {
        // Case when function is not provided
        for (var i = 0; i < collection.length; i++) {
          if (!collection[i]) {
            return false;
          }
        }
        return true;
      }
    
      var checkFalsy = function(value) {
        return !value;
      };
    
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          var result = func(collection[i], i, collection);
          if (checkFalsy(result)) {
            return false;
          }
        }
      } else if (typeof collection === 'object') {
        for (var key in collection) {
          if (collection.hasOwnProperty(key)) {
            var result = func(collection[key], key, collection);
            if (checkFalsy(result)) {
              return false;
            }
          }
        }
      }
      return true;
    
};

module.exports.every = every;

/**
 * some: returns boolean depending on whether the value of calling <function> is true
 * @param {collection, func} : takes in and iterates through collection
 * @returns {boolean} : returns boolean depending on whether the function call
 is atleast true for one element
 */
 _.some = function (collection, func) {

    if (typeof func !== 'function') {
        // Case when function is not provided
        for (var i = 0; i < collection.length; i++) {
          if (collection[i]) {
            return true;
          }
        }
        return false;
      }
    
      var checkTruthy = function(value) {
        return !!value;
      };
    
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          var result = func(collection[i], i, collection);
          if (checkTruthy(result)) {
            return true;
          }
        }
      } else if (typeof collection === 'object') {
        for (var key in collection) {
          if (collection.hasOwnProperty(key)) {
            var result = func(collection[key], key, collection);
            if (checkTruthy(result)) {
              return true;
            }
          }
        }
      }
    
      return false;
}

module.exports.some = some;
/**
 * reduce: Applies a function to each element of an array, reducing it to a single value.
 * @param {Array} array : The array to be reduced.
 *  @param {Function} func : The function to be invoked for each element.
  It should accept four arguments: previous result, current element,
  @param {*} [seed] : The initial value used as the "previous result" for the first iteration.
 * @returns {*} : The final result obtained after applying the callback function to all elements.
 *
 */

  _.reduce = function(array, func, seed){
    let result;
    //determine if reduce did NOT receive a seed value
    if (seed === undefined) {
        result = array[0];
        for (let x = 1; x < array.length; x++) {
            result = func(result, array[x], x, array)
        }
    } else {
        result = seed;
        for (let x = 0; x < array.length; x++) {
            result = func(result, array[x], x, array);
            //reassign result to result of invoking callback function
    
        }
    }
    return result;
    }

    module.exports.reduce = reduce;

    /**
 * extend: Returns a updated object, with all 3 preevious objects joiend togther a one
 * @param {Object} object : The first object input
 * @param {Object} object : Second object passed in behind the first
 *  * @param {Object} object : Third object passed in 
 * @returns {Object}  : Returned updated object with all 3 assigned
 */

    _.extend = function(obj1, obj2, obj3) {

      return Object.assign(obj1, obj2, obj3);
      
      
      }

      