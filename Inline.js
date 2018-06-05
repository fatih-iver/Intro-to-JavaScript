/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

var haha = function(num){
    return num === 0 ? "" : "ha" + haha(num-1);
}

// your code goes here
// call the emotions function here and pass in an
emotions("happy", function(num){
    return haha(num) + "!";
});
// inline function expression
