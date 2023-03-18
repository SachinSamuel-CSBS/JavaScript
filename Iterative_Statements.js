//For Loop

/*Syntax:
for(initialization;Condition;increment/decrement)
{

};*/

document.write("Multiplication of 10<br>");
for(var i=1;i<=10;i++)
{
    document.write(10*i,"<br>");
}

document.write("<br><br>Odd numbers between 1 to 10<br>");
for(var i=1;i<=10;i+=2)
{
    document.write(i,"<br>");
}


//While Loop
document.write("<br><br>Odd numbers between 1 to 50<br>");
var x=1;
while(x<=50)
{
    document.write(x," ");
    x+=2;
}

//do while Loop
var x=10;
do
{
    document.write("<br><br>do while loop will execute the statement aleast one time even the condition is false")
}while(x>20);
