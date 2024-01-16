let userScore = 0 ;
let computerScore = 0 ;
let msg = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user_Score");
const computerScorePara = document.querySelector("#computer_score");

const genComputerChoice = () => {
    // Rock Paper Scissor
    const options = ["rock","paper","scissors"];
    const rndIdx = Math.floor(Math.random()* 3) ;
    return options[rndIdx];

}
const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText="Game was Draw! Try Again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        // console.log("Yow win");
        msg.innerText=`Hurray! You Won, Your's ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText=userScore;

    }
    else{
        // console.log("You loose");
        msg.innerText=`Sorry! You Lost, Computer's ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScorePara.innerText=computerScore;

    }
}

const playGame = (userChoice) => {
    // console.log("UserChoice = ", userChoice);
    const computerChoice = genComputerChoice();
    // console.log("Computer choice = " , computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin =computerChoice==="paper" ? false: true ;
    }
    else if(userChoice==="paper"){
        userWin=computerChoice==="scissors" ? false : true;
    }
    else {
        userWin=computerChoice==="rock" ? false : true;
    }
    showWinner(userWin,userChoice,computerChoice);
}
};

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice)
    });
});



