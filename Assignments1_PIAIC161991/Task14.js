var a = 2 , b = 1;


document.write("a  is " +  a + "<br>");
document.write("b   is " + b + "<br>" );



document.write("<br><br><br>Output at each stage <br> --a; " + --a +"<br>--a - --b;" + (a - --b) + "<br>--a - --b + ++b;" + (a - b + ++b) + "<br> --a - --b + ++b + b--; " + (c = a - b + b + b--));

document.write(" <br><br> Result is "+ c);
