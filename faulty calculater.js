let random = Math.random();
let num1 = prompt("Enter first number");
let operator = prompt("Enter operator (+, -, *, /)");
let num2 = prompt("Enter second number");

let opreation = {
    '+':  "-",
    '-':  "+",
    '*':  "/",
    '/':  "**"

}

if(random > 0.1){
    alert('The answer is: ' + eval(num1 + opreation[operator] + num2));
}
else{
    alert('The answer is: ' + eval(num1 + operator + num2));
}