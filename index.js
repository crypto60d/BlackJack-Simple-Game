let player = {
    name: "Eva",
    chips: 130
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el") 
let addMoney = 100
let takeMoney = 100

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    } 
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You have got BlackJAck"
        hasBlackJack = true
    } else {
        message = "Youre out loser"
        isAlive = false
    }
    messageEl.textContent = message
}



function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

// LEARN TO COUNT IN JAVASCRIPT
// // LEARN TO CREATE A LOOP
// for ( let i = 10; i < 101; i += 10) {
//     console.log(i)
// }
// // DRY - Dont repeat yourself
// for ( let i = 0; i < messages.lenght; i += 1) {
//     console.log(messages[i])
// }
// THIS IS AN ARRAY BASED LOOP
// let cards = [7, 3, 9, 9, 2, 3] 
// for (let i = 0; i < cards.length; i += 1) {
//     console.log(cards[i])
// }
// let sentence = ["Hello ", "my ", "name ", "is ", "Eva"]
// let greetingEl = document.getElementById("greeting-el")
// let greeting = sentence + greetingEl
// for (let i = 0; i < sentence.length; i ++) {
//     greetingEl.textContent += sentence[i] + " "
//     }
// HOW CAN WE AVOID HARD-CODE AND GENERATE RANDOM NUMBERS
// let player1Time = 102
// let player2Time = 107
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
// let fastestRace = getFastestRaceTime()
// function totalRaceTime() {
//     return player1Time + player2Time
// }
// GENERATE RANDOM NUMBER
// let randomNumber = Math.random() * 6
// console.log(randomNumber)
// from 0 to 5 including 5 or from 0 to 6 not including 6
// it returns decimals only from 0 to 1 without including 1 its not really truly random,
//  for a machine it has some determination
// FLOORING THE NUMBER WITH MATH.FLOOR()
// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)
//floor takes away the decimals
// write down all the possible values randomNumber can hold now!
// let randomNumber = Math.floor( Math.random() * 6) + 1
// console.log(randomNumber)
// it holds 0 1 2 3 4 5 without decimals
// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }
// The logical AND operator
// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate.....")
// }
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution.....")
// }
// // the OR operator || = or
// let likesDocumentaries = false
// let likesStartups = true

// if (likesDocumentaries || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you might like!")
// }
// OBJECTS store data in depht- composite / complex data type
// key value pairs

// let player = {
//     name: "Eva",
//     chips: 130
// }

// playerEl.textContent =mplayer.name + ": $" + player.cjips
// let course = {
//     title: "Learn CSS grid for free",
//     lessons: 16,
//     creator: "Eva",
//     lenght: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log(course.lenght)
// CREATE AN OBJECT THAT REPRESENTS AN AIRBNB LISTING
// IT SHOULD CONTAIN AT LEAST ONE BOOLEAN, ONE STRING, ONE NUMBES, AND ONE ARRAY
// LOG OUT AT LEAST TWO OF THE KEYS USING DOT NOTATION
//  let airbnb = {
//      wholePlace: true,
//      name: "Castle",
//      price: 230,
//      tags: ["castle", "luxury"]
//  }
//  console.log(airbnb.price)
//  console.log(airbnb.name)

// CREATE A PERSON OBJECT THAT CONTAINS 3 KEYS NAME AGE AND COUNTRY
// CREATE A FUNCTION LOGDATA THAT USES THE PERSON OBJECT TO CREATE A STRING IN THE FOLLOWING FORMAT
// call the logdata() function to verify that it works
// let person = {
//     name: "Eva ",
//     age: 23,
//     country: "Spain"
// }
// function logData() {
//     console.log(person.name + "is " + person.age + " years old and lives in " + person.country )
// }
// logData()

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

let age = 20

if (age < 6) {
    console.log("Its Free!")
} else if (age < 17) {
    console.log("Child Discount")
} else if (age < 26) {
    console.log("Student Discount")
} else if (age < 66) {
    console.log("Full price")
} else {
    console.log("Senior Citizen Discount")
}
/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log(largeCountries[0])
console.log(largeCountries[1])
console.log(largeCountries[2])
console.log(largeCountries[3])
console.log(largeCountries[4])
