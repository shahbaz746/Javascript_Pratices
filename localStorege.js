// let Sname = document.getElementsByClassName("sh")[0];
// // console.log(Sname);
// localStorage.setItem("Sname", "Ali");
// // localStorage.getItem("Sname");
// let  Sname1 = localStorage.getItem("Sname");
// console.log(Sname1);
// Sname.innerHTML = Sname1;


// localStorage.setItem("score",20)
// let num = Number(localStorage.getItem("score"));
// console.log(num);
// console.log(typeof num);

// localStorage.setItem("username", "JohnDoe");

// function checkUsernameExists() {
//     return localStorage.getItem("username") !== null;
// }

// // Example usage
// if (checkUsernameExists()) {
//     console.log("Username exists in localStorage");
// } else {
//     console.log("Username does not exist in localStorage");
// }



// let arr = ["red","white","black","green"];
// localStorage.setItem("colors", JSON.stringify(arr));
// let storedColors = JSON.parse(localStorage.getItem("colors"));
// console.log(storedColors); // Output: ["red", "white", "black", "green"]

// let num = 30;
// localStorage.setItem("num", num);
// let retrievedNum = Number(localStorage.getItem("num"));

// let sh = document.getElementsByClassName("sh")[0];
// sh.innerHTML = `${retrievedNum}`

// function numIncrement(){
// num++;
// console.log(num);
// return num;
// }
// function click(){
//     numIncrement();
// }
// let num = 30;
// let sh = document.getElementsByClassName("sh")[0];
// let num = Number(localStorage.getItem("num")) || 30;
// sh.innerHTML = `${num}`;

// // function numIncrement() {
// //     num++;
// //     localStorage.setItem("num", num); // Save updated value
// //     sh.innerHTML = `${num}`; // Update UI
// //     console.log(num);
// // }

// function removeItem() {
//     localStorage.clear();
//     sh.innerHTML = "Local storage cleared";
// }

// function handleClick() {
//     removeItem();
// }

// let isDarkMode = true;
// function toggleDarkMode() {
//     isDarkMode = !isDarkMode;
//     document.body.style.backgroundColor = isDarkMode ? "black" : "white";
//     document.body.style.color = isDarkMode ? "white" : "black";
//     localStorage.setItem("darkMode", isDarkMode);
//     let dark = localStorage.getItem("darkMode");
//     console.log(dark);
// }
//  function handleClick() {
//     toggleDarkMode();
// }



// let input = document.getElementById("name").value;
    let input = document.getElementById("name").value;
    localStorage.setItem("name", input);
    let storedName = localStorage.getItem("name");
    console.log(storedName);
//     document.body.innerHTML += `<p class="sh">${storedName}</p>`;



let visits = localStorage.getItem("visits");

if (visits) {
    visits = Number(visits) + 1; // increment
} else {
    visits = 1; // first visit
}

// Store updated count
localStorage.setItem("visits", visits);

// Show in console
console.log(`You have visited this page ${visits} times.`);
