<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Random Number Guessing Game</title>
</head>
<body>
<h1>Guess the Random Number!</h1>
<p>Open the console (F12) to play.</p>

<script>
    // generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("I’ve picked a random number between 1 and 100.");
    console.log("Can you guess what it is? Type your guess like this: guess(42)");

    function guess(number) {
        if (number < randomNumber) {
            console.log("Too low! Try again.");
        } else if (number > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`🎉 Correct! The number was ${randomNumber}. Well done!`);
        }
    }
</script>
</body>
</html>