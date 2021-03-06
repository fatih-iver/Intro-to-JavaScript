/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {

    // print lyrics using num
    var lyrics = num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!";

    // don't forget to check pluralization on the last line!
    if(num == 2 || num == 1){
        lyrics = lyrics.replace("1 bottles", "1 bottle");
    }

    console.log(lyrics);

    // decrement num
    num -= 1
}
