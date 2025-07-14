// chapter 1

// q1

// const shahbaz ={
//     name:"Shahbaz",
//     "phone number": "0309178762",
//     marks: 100,
// }
// console.log(shahbaz);


// q2
// let s = "shahabaz";
// let s1 = 12;
// let s2 = s + s1;
// console.log(s2);  Output: "shahabaz12"
// console.log(typeof s2); // Output: "string"

// q3
// const person = {
//     name: "Shahbaz"
// }
// person.age = 234;
// console.log(person); Output: 234

// q4
// const dis = {
//     apple: "A fruit that is red, green, or yellow.",
//     book: "A set of written or printed pages bound together.",
//     cat: "A small domesticated animal that purrs.",
//     door: "A movable barrier for entering or leaving a room.",
//     egg: "A round or oval object laid by a bird."
// }
// console.log(dis);




// chapter 2

// let age = prompt("Enter your age:");
// if (age >= 10 && age <= 20) {
//     console.log("Age lies between 10 and 20");
// }

// q2
// let n = prompt("Enter a number:");
// if (n % 2 === 0 && n % 3 === 0) {
//     console.log("The num is divisiable by both 2 and 3");
    
// }
// else if (n % 2 === 0) {
//     console.log("The num is divisiable by 2");
    
// }
// else if (n % 3 === 0) {
//     console.log("The num is divisiable by 3");

// }

// q3
// let age = prompt("Enter your age:");
// if(age > 18){
//     console.log("You can drive");
// }
// else {
//     console.log("You cannot drive");
// }


// q1
// let num = 10;
// let userInput = prompt("plese enter a number");
// while(userInput != num) {
//     if (userInput < num) {
//         console.log("The number is too low");
//     } else if (userInput > num) {
//         console.log("The number is too high");
//     }
//     else if(userInput === num){
//        alert("conragulation you enter a correct number");
//     }
//     userInput = prompt("pls enter the number again you enter wrong number" + userInput );
// }


// string questions 
// q1
let str = "Shahbaz Rajput";
console.log(str.length); // Output: 14
console.log(str.startsWith("Sh"))
console.log(str.endsWith("ut"));
console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase());
console.log(str.trim()); // Output: "Shahbaz Rajput"
console.log(str.indexOf("S"))
console.log(str.lastIndexOf("t")); // Output: 6
console.log(str.length - 1)
console.log(str.length)
console.log(str.slice(5))
console.log(str.substring(5))
console.log(str.join("-"))
console.log(str.reverse()); // Output: "tupjaR zabahS"