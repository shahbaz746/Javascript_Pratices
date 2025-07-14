for (let i = 0; i < 100; i++) {
    console.log(i);
    
}

let obj = {
    name: "Shahbaz",
    age: 19,
    marks:23

}

for (const key in obj) {
    console.log(key)
}

let shahbaz = "Shahbaz Rajput"

for (c of shahbaz) {
    console.log(c)
}

let a = 5;
while (a<10) {
    console.log(a)
    a++
}


let a = 6;
do {
    console.log(a)
    a++
} while (a>10);



loops questions in for loop

q1

for(let i = 1; i<= 100; i++){
console.log(i);
}


q2
for(let i = 1; i<=20; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

q3\
let n = 5;
for(let i = 1;i<=10;i++)
    {
        console.log(`${n} * ${i} = ${n*i}`);
    for(let j = 1; j<=5; j++){
        console.log(`${i} * ${j} = ${i*j}`)
        console.log(i + " * " + j + " = " + (i * j));
    }
}

q3
let n = 0;
for (let i = 1; i <= 100; i++) {
    n += i;
    console.log(n);
    
}

q4

for(let i = 0;i> n.length; i++){
        console.log(n[i]);
    }
    
    let n = "shahbaz"
    let reversed = "";
for (let i = n.length - 1; i >= 0; i--) {
  reversed += n[i];
  console.log(reversed);
}


intermediate question
let ob = {
    shahbaz: 98,
    ali: 90,
    ahmed: 95
}

for (const key in ob) { {
        const val = ob[key];
        console.log(val)
        
    }
}
for(let i = 0; i < Object.keys(ob).length; i++){
    let key = Object.values(ob)[i];
    console.log(`${key}`);
}

for(let i=0; i<ob.length; i++){
    let key = Object.keys(ob)[i];
    console.log(` ${value[ob]}`);
}



question about function
function saqure(a) {
    return a * a;
    // console.log(a * a);
    
}
saqure(5);
console.log(saqure(5)); // Output: 25
console.log(saqure(25)); // Output: 25
console.log(saqure(53)); // Output: 25
console.log(saqure(54)); // Output: 25
console.log(saqure(55)); // Output: 25
console.log(saqure(56)); // Output: 25
console.log(saqure(57)); // Output: 25

function largerOn(a, b) {
    if (a > b){
        return a;}
    else {
        return b;
    }
}
console.log(largerOn(5, 10)); // Output: 10
console.log(largerOn(5, 120)); // Output: 10
console.log(largerOn(53, 10)); // Output: 10
console.log(largerOn(5, 140)); // Output: 10
console.log(largerOn(445, 10)); // Output: 10

 function reverseString(name) {
    let reversed = "";
    for (let i = name.length - 1; i >= 0;i--){
        reversed += name[i];
    }
    return reversed;
}

let result = reverseString("shahbaz");
console.log(result); // Output: "zabhahs"

console.log(reverseString("shahbaz")); // Output: "zabhahs"
console.log(reverseString("hello")); // Output: "olleh"


function allNumber(a,b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
    
}
let numbers = allNumber(5, 10);
console.log(numbers); // Output: [1, 2, 3, 4,


function multiplication(n){
    let result = [];
    for (let i = 1; i<= 10; i++){
        result.push(`${n} * ${i} = ${n * i}`);
    }
    return result;

}
let table = multiplication(5);
console.log(table); // Output: ["5 * 1 = 5", "5 *


function checkVowels(a) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = [];
    for (let char of a.toLowerCase()) {
        if (vowels.includes(char)) {
            result.push(char);
        }
    }
    return result;
    
}

let vowelsInString = checkVowels("Shahbaz");
console.log(vowelsInString); // Output: ["a", "a"]


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
    
}

let fact = factorial(5);
console.log(fact); // Output: 120