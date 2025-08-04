let a = prompt("Enter first number")

let b = prompt("Enter second number")


if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Invalid input, please enter numbers only");
}
let sum = parseInt(a) + parseInt(b)


try {
    
    console.log("Sum is: " + sum*x);
} catch (error) {
    console.log("Error ha")
}