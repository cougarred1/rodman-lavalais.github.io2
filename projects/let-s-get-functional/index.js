// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./rodman-lavalais.github.io2/projects/let-s-get-functional
 *  
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
/**### 1: `maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter` */

//find the number of male customers in the array
        var maleCount = function(array) {
            //declare variable males and set it to new Array using .filter
            const males = array.filter(

                //sex => replaces return so it returns sex that equals 'male'
                sex => sex.gender === "male"
              );
              //return the numerical value of amount of males
              return males.length;
    };


////////////////////////////////////////////////

/**
 * ### 2: `femaleCount`
 - **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce` 
 */

 //find the number of female customers
var femaleCount = function(array) {
    let females = _.reduce(array, function(accumulator, current) {

        if (current.gender === 'female') {
            accumulator += 1;
        }
 return accumulator;
    }, 0);
   return females;
}

var oldestCustomer = function(array) {
 let oldest = _.reduce(array, function(accumulator, current){ 

    if (current.age > accumulator.age) {
        accumulator = current;
    }
return accumulator;
 });

return oldest.name;
//determine if current customer is older than accumulator
    //if true, return current
//else 
    //return accumulator
};

//invoke _.reduce(array)
//if seed is undefined // TRUE
//result = { name:  'Adele Mullin'... }
//iterating
    // 1
        // result = 



/**
 * 
### 4: `youngestCustomer`
 - **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:

 */
var youngestCustomer = function (array) {
    let youngest = array.reduce(function (youngestCust, currentCust) {
      if (currentCust.age < youngestCust.age) {
        return currentCust;
      } 
      return youngestCust;
    });
return youngest.name;
  };





var averageBalance; //skip this one


/* 6: `firstLetterCount`
 - **Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**: use .filter
 */
var firstLetterCount = function(array, letter) {
    let count = array.filter(function(customer) {
        return customer.name.charAt(0).toLowerCase() === letter.toLowerCase();
    }).length;
    return count;
};

var friendFirstLetterCount = function(array, name, letter) {
    let customer = array.find(function(customer) {
        return customer.name === name;
    });
    if (customer) {
        let count = customer.friends.filter(function(friend) {
            return friend.name.charAt(0).toLowerCase() === letter.toLowerCase();
        }).length;
        return count;
    }
    return 0;
};

var friendsCount = function(array, name){

    let output = array.reduce(function(accumulator, current){
        
        for (let i = 0; i < current.friends.length; i++){

            if (current.friends[i].name === name){
                accumulator.push(current.name);
            }

        }
return accumulator;

    }, []);



return output;
};

var topThreeTags = function(customers) {
    let counter = {};
  let final = [];
  
let acc = customers.reduce(function(accumulator, current){
 for (var i = 0; i < current.tags.length; i++){
   accumulator.push(current.tags[i]);
 } 
 let counter = {};
return accumulator;
},[]);
  
   acc.forEach(function(each){
   if (counter[each]){
     counter[each] += 1;
   } else {
     counter[each] = 1;
   }
   return counter;
 })
  //return counter;
for (var key in counter){
  final.push([key, counter[key]])
}
  //return final;
let ordered = final.sort(function(a, b){
    return b[1] - a[1];
  })
let done = [ordered[0][0], ordered[1][0], ordered[2][0]];
  return done;
  };


var genderCount = function(array){
    let sling = _.map(array, function(customer){
        return customer.gender;
    })
    let total = sling;
    let count = {};
    let fem = [];
    let mal = [];
    let non = [];
    for (var i = 0; i < total.length; i++){
        if (total[i] === 'female') {
            fem.push(total[i]);
        } else if (total[i] === 'male') {
            mal.push(total[i]);
        } else {
            non.push(total[i]);
        }
       
    }
        count.female = fem.length;
        count.male = mal.length;
        count['non-binary'] = non.length;
   return count;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
