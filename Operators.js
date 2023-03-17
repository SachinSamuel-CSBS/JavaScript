//Arthmetic Operator

var x=6;
var y=4;
document.write("Arthmetic Operator<br>")
document.write("Addition\n",x+y);
document.write("\nSubration\n",x-y);
document.write("\nmultiplication\n",x*y);
document.write("\nDivision\n",x/y);
document.write("\nModulus\n",x%y);

var z=5;
document.write("<br>Increment\n",++z);
document.write("\nDecrement\n",--z);

//Assignment Operator

document.write("<br><br>Assignment Operator<br>");
var a=10;
var b=a;
document.write("Value of b is ",b);
var c=21;
c+=9;
document.write("\nValue of c is ",c);

//String Operator

document.write("<br><br>String Operator<br>");
var str1 ="Hello";
var str2 ="World ";
document.write(str1+""+str2);

var str3 ="Welcome";
str3+=" to JavaScript";
document.write(str3);

//Conditional Operator

document.write("<br><br>Conditional Operator<br>");
var x = 10;
var y = (x<=50)?"True":"False";
document.write(y);
document.write(" The value is ",(x<=50)?"Lesser":"Greater");

//Logical Operator

document.write("<br><br>Logical Operator<br>");
var x=10;
var y=20;
document.write(x>5&&y<30," ");
document.write(x>5||y<30," ");
document.write(!(x==y)," ");

//Comparison Operator

document.write("<br><br>Comparison Operator<br>");
var a=10;
document.write(a==20," ");
document.write(a===20," ");
document.write(a<20," ");
document.write(a<=20," ");
document.write(a>=20," ");
document.write(a>=20," ");
document.write(a>=20," ");

//TypeOf Operator

document.write("<br><br>TypeOf Operator<br>");
var n=30;
var str="Sachin";
var flag=true;
var p;
var abc=null;
document.write(typeof(n)," ");
document.write(typeof(str)," ");
document.write(typeof(flag)," ");
document.write(typeof(p)," ");
document.write(typeof(abc)," ");

//Bitwise Operator

document.write("<br><br>Bitwise Operator<br>");
var x=5;
var y=1;
document.write(x&y," "); 
document.write(x|y," "); 
document.write(x^y," "); 
document.write(~x," "); 
