function sum1()
{
    var x=10,y=5;
    var sum=x+y;
    document.write(sum);
}
sum1();

document.write("<br>");

//passing the parameter
function sum2(x,y)
{
    var sum=x+y;
    document.write(sum);
}
sum2(10,20);

document.write("<br>");

//passing string as parameter
function sum3(x,y)
{
    var sum=x+y;
    document.write(sum);
}
sum2("Welcome to ","JavaScript");

document.write("<br>");

//with return value
function sum4(x,y)
{
    var sum=x+y;
    return sum;
}
var output=sum4(5,9);
document.write(output);
