/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";
var whoDid = "";
var weapon = "";
var solved = false;

if (room == "dining room" && suspect==="Mr. Parkes" ) {
    solved = true;
    weapon = "knife";
    whoDid = suspect + " did it in the "+room + " with the "+ weapon+"!";
    
} 

else if (room == "gallery" && suspect==="Ms. Van Cleve") {
    solved = true;
    weapon = "trophy";
    whoDid = suspect + " did it in the "+room + " with the "+ weapon+"!";
    
} 

else if (room == "billiards room" && suspect==="Mrs. Sparr") {
    solved = true;
    weapon = "pool stick";
    whoDid = suspect + " did it in the "+room + " with the "+ weapon+"!";
} 

else if (room == "ballroom" && suspect==="Mr. Kalehoff") {
    solved = true;
    weapon = "poison";
    whoDid = suspect + " did it in the "+room + " with the "+ weapon+"!";
    
}else{
    console.log("The case was not solved")
}

if (solved) {
	console.log(whoDid);
}

