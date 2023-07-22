////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let array = [];
  if (start !== end && ((step > 0 && start <= end) || (step < 0 && start >= end))) {
    for (let i = start; (step > 0 ? i <= end : i >= end); i += step) {
      array.push(i);
    }
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var total = 0; // need to create a variable outside the loop scope
  for(var i in array){  
     total = total+array[i];  
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1;
  
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    
    start++;
    end--;
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return { value: element, rest: list };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (list === null) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
  if (value1 === value2) return true;
  if (typeof value1 !== 'object' || value1 === null || value2 === null) return false;
  
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return value1.length === value2.length && value1.every((v, i) => deepEqual(v, value2[i]));
  }
  
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);
  
  if (keys1.length !== keys2.length) return false;
  
  return keys1.every(key => deepEqual(value1[key], value2[key]));
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
