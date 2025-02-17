let user_score=0;
let comp_score=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorePara=document.querySelector("#user_score")
const compscorePara=document.querySelector("#comp_score")

// # computer gen function
const GenCompChoice=()=>{
    const option=["rock","scissor","paper"];
    const randIDx=Math.floor(Math.random()*3);
    return option[randIDx];

};
// #DRAW GAME FUNCTION
const GameDraw=()=>{
    msg.innerText="Game was Draw !";
   msg.style.backgroundColor=" #081b31"
};

// SHOW WHO WIN FUNCTION
const showWinner=(UserWin)=>{
    if(UserWin){
        // console.log("You win");
        user_score++;
        userscorePara.innerText=user_score;
        msg.innerText="You win !";
        msg.style.backgroundColor="green";
    }else{
        // console.log("You lose")
        comp_score++;
        compscorePara.innerText=comp_score;
        msg.innerText="You lose !";
        msg.style.backgroundColor="red";

    }
}
// #game
const playGame=(Userchoice)=>{
  const CompChoice=GenCompChoice();
  console.log("Compoter Choice is",CompChoice );       
if(Userchoice===CompChoice){
    GameDraw();
} else{
    let UserWin=true;
    if(Userchoice==="rock"){
        //Paper,scissors
        UserWin=CompChoice==="paper"? false:true;
    }else if(Userchoice==="paper"){
    //Rock,scissors
    UserWin=CompChoice==="scissor"? false:true;
    }else{
        UserWin=CompChoice="rock"? false:true;
    }
   showWinner(UserWin);
}
};

choices.forEach((choice) =>{
   choice.addEventListener("click", () =>{ 
    const Userchoice = choice.getAttribute("id");
    console.log("you clinked =", Userchoice);
    playGame(Userchoice);
   });
});