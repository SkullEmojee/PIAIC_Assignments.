var Input1st = Number(prompt("Enter 1st number"));
var Input2nd = Number(prompt("Enter second number"));
var InputOp = prompt("Enter a mathematical operation (+ , _ , * or /")

if(InputOp == "+"){
    document.write(Input1st + Input2nd);
}else if(InputOp == "-"){
    document.write(Input1st - Input2nd);
}else if(InputOp == "*"){
    document.write(Input1st * Input2nd);
}else if(InputOp == "/"){
    document.write(Input1st / Input2nd);
}
