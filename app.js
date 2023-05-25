// if and else statement, math.floor, math.random

prompt("What is your name?");
prompt("What is his/her name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

// alert("Your love score is " + loveScore + " %.")

if (loveScore > 80) {
    alert("Your love score is " + loveScore + "%." + " You are a good match!");
}
else if (loveScore > 40 && loveScore <= 80) {
    alert("Your love score is " + loveScore + "%." + " You are both sweet but this is not the right time.");
}
else if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%." + " You both have other priorities.");
}
else {
    alert("Your love score is " + loveScore + "%." + " I think you are good to be friends not lovers.");
}