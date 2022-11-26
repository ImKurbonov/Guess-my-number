let againBtn = document.querySelector('.again')
let number = document.querySelector('.number')
let guess = document.querySelector('.guess')
let checkBtn = document.querySelector('.check')
let message = document.querySelector('.message')
let score = document.querySelector('.score')
let heighscore = document.querySelector('.highscore')
let body = document.querySelector('body')

let gameScore = 20
let gameHighScore = 0
let gameOver = false
let randomNumber = Math.floor(Math.random() * 20 + 1)
console.log(randomNumber)

checkBtn.addEventListener('click', ()=> {
    let myNumber = +guess.value
    if(!gameOver) {
        if(myNumber) {
            if(randomNumber == myNumber) {
                body.style.backgroundColor = 'green'
                message.textContent = 'You are win 🥇'
                number.textContent = randomNumber
                gameScore ++
             
                if(gameScore > gameHighScore) {
                    gameHighScore = gameScore
                    heighscore.textContent = gameHighScore
                }
        
            } else if(myNumber > randomNumber) {
                message.textContent = "To down"
                gameScore --
                if(gameScore === 0) {
                    gameOver = true
                }
        
            } else if(myNumber < randomNumber) {
                message.textContent = "To up"
                gameScore --
                if(gameScore === 0) {
                    gameOver = true
                }
            }
            score.textContent = gameScore
            } else {
                message.textContent = "Type number"
            }
    }
})

againBtn.addEventListener("click", ()=> {
    body.style.backgroundColor = '#222'
    gameScore = 20
    score.textContent = gameScore
    message.textContent = 'Start guessing...'
    number.textContent = '?'
    guess.value = ''
    gameOver = false
})