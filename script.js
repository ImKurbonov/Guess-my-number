const between = document.querySelector('.between')
const againBtn = document.querySelector('.again')
const number = document.querySelector('.number')
const guess = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')

let randomNumber = Math.floor(Math.random() * 20) + 1
console.log(randomNumber)
let gameScore = 20
let gameHighScore = 0
let gameOver = false

checkBtn.addEventListener('click', ()=> {
    let myNumber = +guess.value
    if(!myNumber) {
        message.textContent = 'Type any number'
    } else {
        if(myNumber < randomNumber) {
            document.body.style.backgroundColor = '#222'
            score.textContent = gameScore
            gameScore--
            message.textContent = 'To up'
            if(gameScore == 0) {
                gameOver = true
            }
    
        } else if(myNumber > randomNumber) {
            document.body.style.backgroundColor = '#222'
            score.textContent = gameScore
            gameScore--
            message.textContent = 'To down'
            if(gameScore == 0) {
                gameOver = true
            }
    
        } else if(myNumber == randomNumber) {
            document.body.style.backgroundColor = '#60b347'
            message.textContent = 'You are win..🥇'
            number.textContent = myNumber
    
            if(gameHighScore < gameScore) {
                gameHighScore = gameScore
                highscore.textContent = gameHighScore
            }
        }
    }
})

againBtn.addEventListener('click', ()=> {
    document.body.style.backgroundColor = '#222'
    number.textContent = '?'
    message.textContent = 'Start guessing...'
    guess.value = ''
    gameScore = 20
    score.textContent = gameScore
})