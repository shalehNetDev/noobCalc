let result= document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
function add(){
    let number1=parseFloat(document.getElementById("numb1").value)
    let number2=parseFloat(document.getElementById("numb2").value)
    let sum = number1+number2
    result.textContent= "Sum: " + sum
}
function subtract(){
    let number1=parseFloat(document.getElementById("numb1").value)
    let number2=parseFloat(document.getElementById("numb2").value)
    let subt=number1-number2
    result.textContent= "subtract: "+subt
}
function divide(){
    let number1=parseFloat(document.getElementById("numb1").value)
    let number2=parseFloat(document.getElementById("numb2").value)
    let division=number1/number2
    result.textContent= "division: "+ division
}
function multiply(){
    let number1=parseFloat(document.getElementById("numb1").value)
let number2=parseFloat(document.getElementById("numb2").value)
    let multiplication=number1*number2
    result.textContent= "multiplication: " + multiplication
}