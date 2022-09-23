let cards = [];
let sum = 0;
let message = "";
let hasBlackjack = false;
let isAlive = false;
let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    name: " Arif",
    chips: 0
}

let playerEl = document.getElementById("player-el");


function getrandcard() {
    randNumber = Math.floor(Math.random() * 13) + 1;

    if (randNumber === 1) {
        return 11;
    } else if (randNumber > 10) {
        return 10;
    } else {
        return randNumber;
    }
}

function startgame() {
    let firstCard = getrandcard();
    let secondCard = getrandcard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    hasBlackjack = false;
    player.chips = 0;
    renderGame();
}

function renderGame() {

    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! you've got Blackjack!";
        hasBlackjack = true;
        player.chips += 100;

    } else {
        message = "You've out of the game!";
        isAlive = false;
    }
    messageEL.textContent = message;
    playerEl.textContent = player.name + ": $" + player.chips;
}

function newcard() {
    console.log(isAlive)
    console.log(hasBlackjack)
    if (isAlive === true) {
        if (hasBlackjack === false) {
            let card = getrandcard();
            cards.push(card)
            sum += card;
            renderGame()
        }

    }

    messageEL.textContent = message;
}