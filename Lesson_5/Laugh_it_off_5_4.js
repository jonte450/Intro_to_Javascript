/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var laugh = "";
    for(var x = 0; x <num; x++){
    laugh = laugh + "ha";
    }
    laugh = laugh + "!";
    return laugh;
}

console.log(laugh(10));

