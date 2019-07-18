/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

var count_down = 60;

while(count_down>=0){
 if(count_down === 50){
     console.log("Orbiter transfers from ground to internal power (T-50 seconds)");
 }
 else if(count_down === 31){
     console.log("Ground launch sequencer is go for auto sequence start (T-31 seconds)")
 }
 else if(count_down === 16){
     console.log("Activate launch pad sound suppression system (T-16 seconds)");
 }
 
 else if(count_down === 10){
     console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
 }
 else if(count_down === 6){
     console.log("Main engine start (T-6 seconds)");
 }
 else if(count_down === 0)
     console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)");
 else{
     console.log("T-"+count_down+" seconds");
 }
 count_down--;
}

