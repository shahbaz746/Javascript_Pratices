// // lets genrate a random colour in box

let randomColor = Math.random();
let box = document.querySelectorAll('.box');
for (let i = 0; i < box.length; i++) {
    if (randomColor < 0.33) {
        box[i].style.backgroundColor = "red";
    } else if (randomColor < 0.66) {
        box[i].style.backgroundColor = "green";
    } else {
        box[i].style.backgroundColor = "blue";
    }
}

Select an element by ID and change its text content.

box1 = document.getElementById('box');
box1.textContent = "Shahbaz Tofeeq";


// q2: Select all <p> tags and change their color to blue.
pra = document.querySelectorAll('p').forEach(e => {
  console.log(e);
  e.style.color = "blue";
});

// q3: Add a new <li> to an existing <ul> using createElement and appendChild.

let ul = document.querySelector('ul');
let li = document.createElement('li');
li.textContent = "About";
ul.appendChild(li);

q4: Remove an element from the page when a button is clicked.
let removeButton = document.querySelector('.remove-button');
removeButton.addEventListener('click', function() {
  let elementToRemove = document.querySelector('.element-to-remove');
  if (elementToRemove) {
    elementToRemove.remove();
  }
});

q5:Add a click event listener to a button that changes the page background color randomly.
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    document.body.style.backgroundColor = color;
    console.log(color);
  }
  return color;
}

console.log(getRandomColor());
getRandomColor();

let changeColorButton = document.querySelector('.change-color-button');
changeColorButton.addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();
});