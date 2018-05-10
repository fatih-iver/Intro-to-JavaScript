/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;

var widthSize;

if(shirtWidth < 20)
    widthSize = "S";
else if(shirtWidth < 22)
    widthSize = "M";
else if(shirtWidth < 24)
    widthSize = "L";
else if(shirtWidth < 26)
    widthSize = "XL";
else if(shirtWidth < 28)
    widthSize = "2XL";
else
    widthSize = "3XL";

var lengthSize;
    
if(shirtLength < 29)
    lengthSize = "S";
else if(shirtLength < 30)
    lengthSize = "M";
else if(shirtLength < 31)
    lengthSize = "L";
else if(shirtLength < 33)
    lengthSize = "XL";
else if(shirtLength < 34)
    lengthSize = "2XL";
else
    lengthSize = "3XL";

var sleeveSize;

if(shirtSleeve < 8.38)
    sleeveSize = "S";
else if(shirtSleeve < 8.63)
    sleeveSize = "M";
else if(shirtSleeve < 8.88)
    sleeveSize = "L";
else if(shirtSleeve < 9.63)
    sleeveSize = "XL";
else if(shirtSleeve < 10.13)
    sleeveSize = "2XL";
else
    sleeveSize = "3XL";
    
if(widthSize === lengthSize && lengthSize === sleeveSize)
    console.log(lengthSize);
else
    console.log("N/A");

// Write your if/else code here
