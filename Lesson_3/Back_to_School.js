/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 *
 *
 */
 

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary = 0;

switch(education){
case "no high school diploma":
    console.log("In 2015, a person with no high school diploma earned an average of $25,636/year.");
    break;
case "a high school diploma":
    console.log("In 2015, a person with a high school diploma earned an average of $35,256/year.");
    break;
case "an Associate's degree":
    console.log("In 2015, a person with an Associate's degree earned an average of $41,496/year.");
    break;
case "a Bachelor's degree":
    console.log("In 2015, a person with a Bachelor's degree earned an average of $59,124/year.");
    break;
case "a Master's degree":
    console.log("In 2015, a person with a Master's degree earned an average of $69,732/year.");
    break;
case "a Professional degree":
    console.log("In 2015, a person with a Professional degree earned an average of $89,960/year.");
    break;
case "a Doctoral degree":
    console.log("In 2015, a person with a Doctoral degree earned an average of $84,396/year.");
    break;
}

