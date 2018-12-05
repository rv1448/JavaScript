var a = new Array('a','b','c');

console.log(" Before Array ", a);

// Use shift remove the first elements of the array -- remove 
a.shift();
console.log(" After Array shift", a);

// unshift is to add the elements to the array -- add 
a.unshift('apple','mango');
console.log(" After Array unshift ", a);

// Reverse with reverse all the elements in the array 
a.reverse();
console.log(" After Array Reverse ", a);
a.reverse();
 
// pop removes end of the array -- remove at the end of the array
a.pop();
console.log(" After popping :) ", a);
  
// Push will add elements to the end of the array 
a.push('dolphin','HTTPS://extension')
console.log(" After popping :) ", a);

// returns items in the array as separated by the argument provided to the method
var thisarray = a.join(',');
console.log("Joined by comma delimited", thisarray);
 