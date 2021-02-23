var mypass = "urmom";
var bot = prompt("Enter password");
if(mypass === bot){
    document.write("Correct! The password your entered matches the original password");
}else if(bot === ""){
    document.write("please enter your password");
}else if(mypass !== bot){
    document.write("incorrect password");
}