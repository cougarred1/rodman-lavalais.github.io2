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
* indexOf:  Takes in an array and value and returns the index of array at the first occurence
, or -1 if the value isn't there
* @param {*} value : Function takes in an array, and a value
* @returns {*} value : Returns empty array, and first element in array
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