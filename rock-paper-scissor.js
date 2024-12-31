let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userSc = document.querySelector("#user-score");
const CompSc = document.querySelector("#computer-score");

const genCompChoice = () =>{
    //rock, paper, scissor
    const options=["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>{
    console.log("game was draw");
    msg.innerText = "Game Draw, Play Again";
    msg.style.backgroundColor = "#081b31"
};


const showWinner = (userWin) =>{
    if(userWin){ 
        userScore++;
        console.log("You won");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
        userSc.innerText = userScore;
    }else{
        comScore++;
        console.log("You loose");
        msg.innerText = "You loose";
        msg.style.backgroundColor = "red";
        CompSc.innerText = comScore;
    }
};

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice)
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice )

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userWin=true;
        if(userChoice ==="rock"){
            //scissor. paper
            userWin= compChoice === "paper" ? false:true;
        }else if( userChoice==="paper"){
            //rock , scissor
            userWin= compChoice==="scissor"? false: true;
        }else {   //user have scissor
            //rock, paper
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin);
    }
    
};

choices.forEach( (choice) =>{

    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
      
        playGame(userChoice);
    });
});