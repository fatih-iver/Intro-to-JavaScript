/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x < 21) {

    var output = ""

    var divBy3 = x % 3 === 0;
    var divBy5 = x % 5 === 0;
    var divBy15 = divBy3 && divBy5;

    // check divisibility
    if(divBy15){
        output = "JuliaJames";
    }else if(divBy5)
        output = "James"
    else if(divBy3){
        output = "Julia";
    }else{
        output += x
    }


    // print Julia, James, or JuliaJames
    console.log(output);

    // increment x
    x += 1;

}
