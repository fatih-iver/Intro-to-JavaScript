/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var T = 60;

while(T >= 0){

    var log;

    switch(T){

        case 50:
            log = "Orbiter transfers from ground to internal power";
            break;
        case 31:
            log = "Ground launch sequencer is go for auto sequence start";
            break;
        case 16:
            log = "Activate launch pad sound suppression system";
            break;
        case 10:
            log = "Activate main engine hydrogen burnoff system";
            break;
        case 6:
            log = "Main engine start";
            break;
        case 0:
            log = "Solid rocket booster ignition and liftoff!";
            break;
        default:
            log = "T-" + T + " seconds";
    }

    console.log(log);

    T -= 1;
}
