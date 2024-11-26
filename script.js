let userName = prompt("Hello, What is your name?")
let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')

userName
    ? (greeting.interText = `Hello, ${userName}!`)
    : (greeting.innerText = 'Hello stranger!')


function shakeMagic8Ball() {
    //get user qustion
    let userQuestion = prompt('What do you want to ask the eight ball?')


    // do not Touch
    let randomNumber = Math.floor(Math.random() * 8)
    let eightBall = ''
    let imageChoice = ''
    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain'
            imageChoice = ''
            break;
        case 1:
            eightBall = 'It is decidedly so'
            break;
        case 2:
            eightBall = 'Reply hazy try again'
            break;
        case 3:
            eightBall = 'Cannot predict now'
            break;
        case 4:
            eightBall = 'Do not count on it'
            break;
        case 5:
            eightBall = 'My sources say no'
            break;
        case 6:
            eightBall = 'Outlook not so good'
            break;
        case 7:
            eightBall = 'Signs point to yes'
        default:
            console.log(`There appears to be a problem ${userName}! Please contact nine bal services.`)
    }

    console.log(`Magic Eightball: ${eightBall}`)
    responseText.innerText = `${userName} has asked ${userQuestion} to the almighty eightball. The eight ball replied ${eightBall}!`

    responseImg.src = imageChoice
}
