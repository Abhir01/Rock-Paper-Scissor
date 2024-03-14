let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const reset = document.querySelector(".start");

const genCompChoice = () =>{ //random comp choice from this array
    const options = ["rock" , "scissors" , "paper"];
    const randomInd = Math.floor(Math.random()*3); // 0 se 3(excluded) ke beech me 
    return options[randomInd]; //return random choice
};

const drawGame = () =>{
    // console.log("DRAW");    
    msg.innerText = `Play Again ! DRAW !`;
    msg.style.backgroundColor = "rgb(96, 96, 125)"
};

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        // console.log("you");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Your ${userChoice} beats Computer's ${compChoice} ! You WIN !`;
        msg.style.backgroundColor = "green";
    }else{
        // console.log("comp");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer ${compChoice} beats Your ${userChoice} ! LOSER !`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => { //print user and compchoice
    // console.log("user choice = ",userChoice); //user ki direct mil ri hai ,,,, 
    const compChoice = genCompChoice(); //comp ke lie call kar re hai
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        // let userWin = true;
        // if(userChoice === "rock"){
        //     userWin = compChoice === "paper" ? false:true;
        // }else if(userChoice === "paper"){
        //     userWin = compChoice === "scissors" ? false:true;
        // }else{
        //     compChoice = "rock" ? false:true;
        // }
        let userWin = true;
        if(userChoice === "rock" && compChoice == "paper"){
            userWin = false;    
        }else if(userChoice === "rock" && compChoice == "scissors"){
            userWin = true;
        }else if(userChoice === "paper" && compChoice == "rock"){
            userWin = true;
        }else if(userChoice === "paper" && compChoice == "scissors"){
            userWin = false;
        }else if(userChoice === "scissors" && compChoice == "rock"){
            userWin = false;
        }else if(userChoice === "scissors" && compChoice == "paper"){
            userWin = true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) =>{ //userchoice
    // console.log(choice); //choice is individual div
    choice.addEventListener("click", () => { //user choice depend on click
        const userChoice = choice.getAttribute("id"); //jid div ko clicek karega uska id
        playGame(userChoice); //choice is passed to playGame
    });
});


const restBtn = reset.addEventListener("click" , () => {
    msg.innerText = "Choose Move";
    msg.style.backgroundColor = "";
    userScorePara.innerHTML = "0";
    compScorePara.innerHTML = "0";
    userScore = 0;
    compScore = 0;
})

