var a = Number(prompt("Marks obtained in subject 1"));
var b = Number(prompt("Marks obtained in subject 2"));
var c = Number(prompt("Marks obtained in subject 3"));
var d = Number(prompt("Enter total Marks"));

var TotalMarksObtained = a + b + c 
var Percentage = TotalMarksObtained / d * 100
document.write("<h1>Marks Sheet</h1><br><br><br>");

document.write("Total marks: " + d + "<br>");

document.write("Percentage: " + Percentage + "%<br>");

document.write("Grade: ");

if(Percentage >= 80){
    document.write("A-one");
}else if(Percentage >= 70){
    document.write("A");
}else if(Percentage >= 60){
    document.write("B");
}else if(Percentage < 60){
    document.write("Fail");
}


document.write("<br>Remarks: ")
if(Percentage >= 80){
    document.write("Excellent");
}else if(Percentage >= 70){
    document.write("Good");
}else if(Percentage >= 60){
    document.write("You need to improve");
}else if(Percentage < 60){
    document.write("Sorry");
}