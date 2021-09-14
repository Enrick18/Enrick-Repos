function Add(){
    let numOne=parseInt(document.getElementById("firstNum").value);
    let numTwo=parseInt(document.getElementById("secNum").value);

    let result=parseInt(numOne+numTwo);

    document.getElementById("Text").innerHTML = result;
}

function Subtract(){
    let numOne=parseInt(document.getElementById("firstNum").value);
    let numTwo=parseInt(document.getElementById("secNum").value);

    let result=parseInt(numOne-numTwo);

    document.getElementById("Text").innerHTML = result;


}

function Multip(){
    let numOne=parseInt(document.getElementById("firstNum").value);
    let numTwo=parseInt(document.getElementById("secNum").value);

    let result=parseInt(numOne*numTwo);

    document.getElementById("Text").innerHTML = result;


}

function Divi(){
    let numOne=parseFloat(document.getElementById("firstNum").value);
    let numTwo=parseFloat(document.getElementById("secNum").value);

    let result=parseFloat(numOne/numTwo);

    document.getElementById("Text").innerHTML = result;


}

document.getElementById("Add").addEventListener("click",Add);
document.getElementById("Sub").addEventListener("click",Subtract);
document.getElementById("Mult").addEventListener("click",Multip);
document.getElementById("Div").addEventListener("click",Divi);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
