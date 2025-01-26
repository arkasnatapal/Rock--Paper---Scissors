// initially setting the score as 0 for both computer and user

let userScore = 0;
let CompScore =0;
//accessing score-board of user and computer 

let userScoreBoard = document.querySelector("#user-score");
let CompScoreBoard = document.querySelector("#comp-score");

//accessing the msg box
let msgwin =document.querySelector("#msg");
// game draw condition 
const gamedraw =() =>{
    console.log("game is draw");
    msgwin.innerText = " GAME DRAW ";
    msgwin.style.backgroundColor = "black";
    msgwin.style.color = "white";
}
// for playing game(FOR STARTING THE GAME BY TAKING USER CHOICE AND GENERATING COMPUTER'S CHOICE ---- func defined later (compturn))

const playgame = (userchoice) =>{
    console.log("user choice is",userchoice);
    const compchoice=compturn();
     // main syntax
     if(userchoice === compchoice){
        //drawgame
        gamedraw();
     }
     else{
        let userWin=true; // considering that the user won the match

        if(userchoice === "rock"){
            if(compchoice === "scissors"){
                userWin=true;
                userScore++;
                userScoreBoard.innerText = userScore;
                console.log("user won");
                msgwin.innerText = `You won!! your ${userchoice} beats ${compchoice}`;
                msgwin.style.backgroundColor = "green";
                msgwin.style.color = "white";
             }
             else{
                userWin=false;
                console.log("computer wins");
                CompScore++;
                CompScoreBoard.innerText = CompScore;
                msgwin.innerText = `You lost!! computer's ${compchoice} beats ${userchoice}`;
                msgwin.style.backgroundColor = "red";
                msgwin.style.color = "white";
             }
}

if(userchoice === "paper"){
    if(compchoice === "scissors"){
        userWin=false;
              console.log("computer wins");
              CompScore++;
              CompScoreBoard.innerText = CompScore;
                msgwin.innerText = `You lost!! computer's ${compchoice} beats ${userchoice}`;
                msgwin.style.backgroundColor = "red";
                msgwin.style.color = "white";
        
     }
     else{
        userWin=true;
        console.log("user wins");
        userScore++;
                userScoreBoard.innerText = userScore;
        msgwin.innerText = `You won!! your ${userchoice} beats ${compchoice}`;
                msgwin.style.backgroundColor = "green";
                msgwin.style.color = "white";
     }
}

if(userchoice === "scissors"){
    if(compchoice === "rock"){
        userWin=false;
        console.log("computer won");
         CompScore++;
                CompScoreBoard.innerText = CompScore;
        msgwin.innerText = `You lost!! computer's ${compchoice} beats ${userchoice}`;
                msgwin.style.backgroundColor = "red";
                msgwin.style.color = "white";
     }
     else{
        userWin=true;
        console.log("user wins");
        userScore++;
                userScoreBoard.innerText = userScore;
        msgwin.innerText = `You won!! your ${userchoice} beats ${compchoice}`;
                msgwin.style.backgroundColor = "green";
                msgwin.style.color = "black";
     }
}
     }
    }

// access the choices

let choices =document.querySelectorAll(".choice");

//individual access to choice

choices.forEach((choice) => {
    let userchoice=choice.getAttribute("id"); //to check the choice given by user
    choice.addEventListener("click", () => {
        playgame(userchoice);
    })
});

//now for computer's turn (GENERATING COMPUTER'S MIND) 
const compturn = ()=>{
    let options = ["rock", "paper", "scissors"];
    let takenchoice = Math.floor(Math.random()*3); //Math.random -- produces any random number from 0 to 1 (in decimal) ..... Math.floor --rounded off the figure to whole number... we do Math.random()*3 to produce random number between 0 to 2
    let ridx=options[takenchoice];
    console.log("the computer choice is ",ridx);
    return options[takenchoice];
}