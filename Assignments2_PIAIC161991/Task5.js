var a = Math.random();
var num1 = a * 10;
var num2 = num1 + 1;
var num3 = Math.floor(num2)

var Input = Number(prompt("Enter a number between 1 and 10"));

if(Input === num3){
    alert("Bingo! Correct answer")
}else if(Input + 1 === num3){
    alert("Close enough to the correct answer")
}else{
    alert("Wrong! Reload the page to try again")
}