var Time = Number(prompt("Enter time"));
if(Time >= 0000 && Time < 1200){
    document.write("Good Morning!")
}else if(Time >= 1200 && Time < 1700){
    document.write("Good afternoon!")
}else if(Time >=1700 && Time <2100){
    document.write("Good evening!");
}else if(Time >= 2100 && Time <2359){
    document.write("Good night!");
}