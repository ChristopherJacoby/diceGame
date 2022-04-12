let randomNumber1 = Math.floor(Math.random()*6+1);
let randomNumber2 = Math.floor(Math.random()*6+1);
let diceChange1 = `images/dice${randomNumber1}.png`;
let diceChange2 = `images/dice${randomNumber2}.png`;
let img1 = document.querySelector(".img1").setAttribute("src", diceChange1);
let img2 = document.querySelector(".img2").setAttribute("src", diceChange2);

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Tie!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}