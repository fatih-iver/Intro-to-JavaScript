/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

var message ="The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!";

message= message.replace("__________", adjective1);
message= message.replace("__________", adjective2);
message = message.replace("__________", adjective3);

var madLib = message;

console.log(madLib);

// your code goes here
