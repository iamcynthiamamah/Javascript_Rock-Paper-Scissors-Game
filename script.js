
const totalScore = {computerChoice: 0, playerScore: 0}



//A FUNCTION THAT RANDOMELY SELECTS BETWEEN ROCK, PAPER AND SCISSORS AND RETURN THE STRING

document.querySelectorAll('.buttons') //selects the button elements with the class of .buttons
function getComputerChoice(){
    
    const arrayss = ['Rock', 'Paper', 'Scissors' ]
    console.log(arrayss);
    for(i = 0; i < arrayss.length; i++ )
    {
       let ran = Math.floor(Math.random(arrayss[i]) * arrayss.length)
       return arrayss[ran];
        
    }
    };

    const computerChoice = getComputerChoice();
    
//========================ALTERNATIVE METHOD
// function getComputerChoice(){
    
//     const arrayss = ['Rock', 'Paper', 'Scissors' ]
//        let ran = Math.floor(Math.random() * arrayss.length)
//        return arrayss[ran];
        
//     };
//     const computerChoice = getComputerChoice()
//     console.log(computerChoice)





//FUNCTION THAT  COMPARES PLAYERCHOICE AND COMPUTER CHOICE AND RETURNS THE SCORE ACCORDINGLY
function getResult(playerChoice, computerChoice){

    if(playerChoice == computerChoice){
        return 0;
    }
    else if(playerChoice == 'Rock' && computerChoice == 'Paper'){
        return 1;
    }

    else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        return 1;
    }

    else if(playerChoice == 'Paper' && computerChoice == 'Scissors'){
        return 1;
    }

    else{
        return -1
    }
}
const score = getResult('Scissors', computerChoice)
//console.log(score)



//SHOWRESULT FUNCTION, UPDATES THE DOM  to 'you win'or 'you lose' and displays it

const results = document.getElementById('result')
const playScore = document.getElementById('play-score')
const hands = document.getElementById('hands')

function showResult(score, playerChoice, computerChoice){
    if(score == 1){
        results.innerText = 'You Won!'
        playScore.innerText = `Your score: ${totalScore['playerScore']}`
        hands.innerText = `👨 ${playerChoice} vs 🖥️ ${computerChoice}`
                   
       
    }

    else if(score == 0){

        playScore.innerText = `Your score: ${totalScore['playerScore']}`
        hands.innerText = `👨 ${playerChoice}  vs  🖥️ ${computerChoice}`
        results.innerText = `It's a draw `          
       
    }

    else{


        playScore.innerText = `Your score: ${totalScore['playerScore']}`
        hands.innerText = `👨 ${playerChoice} vs 🖥️ ${computerChoice}`
        results.innerText = `You Lose!`          
       
    }
   
    
}




//FUNCTION ONCLICKRPS what will happen when a user clicks rock, papaer or scissors

 btns = document.querySelectorAll('.fist')

//      function OnClickRPS(playerChoice){
//         console.log({playerChoice})
//     const computerChoice = getComputerChoice()
//     console.log({computerChoice})
//     const scores = getResult(playerChoice, computerChoice)
//     totalScore['playScore'] += scores
//     console.log({scores})
//     showResult(scores, playerChoice, computerChoice)
//     }

 //=========================ALTERNATIVE METHOD=====================
    function OnClickRPS(playerChoice){
                const computerChoice = getComputerChoice()
               const scores = getResult(playerChoice, computerChoice)
               totalScore['playerScore'] += scores
               const show = showResult(scores, playerChoice, computerChoice );
            
 }




//FUNCTION PLAYGAME
function playGame(){
    const rpsbtns = document.querySelectorAll('.fist')
   

    rpsbtns.forEach(fist => {
        fist.onclick = () => OnClickRPS(fist.value)
    })
    endGame(totalScore)
}



//FUNCTION ENDGAME
const cont = document.querySelector('.resultsContainer')
const stop = document.querySelector('.endGameButton')

function endGame(totalScore){
    
stop.addEventListener('click', () => {
    totalScore['playerScore'] = 0;
    playScore.innerText = ` `
    hands.innerText = ` `
    results.innerText = ` `
    })
}

playGame()



// const navOnScroll = document.querySelector('nav')
// window.addEventListener('scroll', function(){
//     navOnScroll.classList.toggle('window-scroll', window.scrollY > 0)













//<button class="fist" value="rock">✊<img  class="fis" src="/images/fist-removebg-preview (1).png"></button>
  //          <button class="fist" value="paper"><img  class="fis" src="/images/fist3-removebg-preview.png"></button>
    //        <button class="fist" value="scissors"><img  class="fis" src="/images/victory2.png"></button>