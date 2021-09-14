Add =(a,b)=>{return a+b};
Subtr =(a,b)=>{return a-b};
Mult =(a,b)=>{return a*b};
Div =(a,b)=>{return a-b};

var choose=parseInt(prompt("Choose:\n1. Addition\n2.Subtraction\n3.Multiplication\n4.Division"));

const Number1=parseInt(prompt("Enter first number: "));
const Number2=parseInt(prompt("Enter second number: "));

var results;

switch(choose){
    case 1:
        results = Add(Number1,Number2);
        alert(results);
        break;

    case 2:
        results = Subtr(Number1,Number2);
        alert(results);
        break;

    case 3:
        results = Mult(Number1,Number2);
        alert(results);
        break;

    case 4:
        results = Div(Number1,Number2);
        alert(results);
        break;

    default:
        alert("Error choose only no. 1-4");
}
