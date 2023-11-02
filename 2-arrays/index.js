/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */
/** initialise variable list1 to array containing apples, bananas
 * initialise variable list2 to array containing bananas, pears
 * then concat the two arrays to variable called list3 with list1 then list 2
 */
var list1 = ["apples", "oranges"];
var list2 = ["bananas", "pears"];
var list3 = (list1.concat(list2));
console.log(list3);


/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 *  
 */
/**
 * initialise variable colors to a 2 demensional array containing
 * 

│ 'red'  │ 'blue'  │ 'green' │ 'yellow' │
│ 'pink' │ 'white' │ 'black' │ 'orange' │
console log out the sentence _white_ is lighter than _pink_ and _black_.
 */
var colors = [
    ["red", "blue", "green", "yellow"],
    ["pink", "white", "black", "orange"]
];
console.table(colors);
var light = colors[1][1];
var dark = colors[1][0];
var darker = colors[1][2];
console.log(light + " is lighter than " + dark + " and " + darker + ".");   
