//if else Statement
var x = 11;
if(x<10)
{
    document.write("The value is less than 10");
}
else
{
    document.write("The value is greater than 10");
}
document.write("<br>");

//else if Statement
var x = 10;
if(x<10)
{
    document.write("The value is less than 10");
}
else if(x==10)
{
    document.write("The value is equal to 10");
}
else
{
    document.write("The value is greater than 10");
}
document.write("<br>");

//Odd or Even Program
var x = 5;
if(x%2==0)
{
    document.write("Even number");
}
else
{
    document.write("Odd number");
}
document.write("<br>");

//check a number is positive,negative or zero
var x = 10;
if(x>0)
{
    document.write("Positive Number");
}
else if(x<0)
{
    document.write("Negative Number");
}
else
{
    document.write("Zero");
}
document.write("<br>");

//switch-case 

var month = 4;
switch (month)
{
    case 1:
        document.write("Janaury");
        break;
    case 2:
        document.write("February");
        break;
    case 3:
        document.write("March");
        break;
    case 4:
        document.write("April");
        break;
    case 5:
        document.write("May");
        break;
    case 6:
        document.write("June");
        break;
    case 7:
        document.write("July");
        break;
    case 8:
        document.write("August");
        break;
    case 9:
        document.write("September");
        break;
    case 10:
        document.write("October");
        break;
    case 11:
        document.write("November");
        break;
    case 12:
        document.write("December");
        break;
    default:
        document.write("Wrong Input");
}
document.write("<br>");

var month = "May";
switch (month)
{
    case "May":
        document.write("Fifth Month");
        break;
    case "June":
        document.write("Sixth Month");
        break;
    default:
        document.write("Wrong Input");
        break;
}
document.write("<br>");

var month = true;
switch (month)
{
    case true:
        document.write(1);
        break;
    case false:
        document.write(2);
        break;
}
