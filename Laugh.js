/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    return haha(num) + "!";
}

var haha = function(num){
    return num === 0 ? "" : "ha" + haha(num-1);
}/* finish the function expression */

console.log(laugh(3));
