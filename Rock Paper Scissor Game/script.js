let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
  choice.addEventListener("click", ()=>{
    let userChoice=choice.getAttribute("id");
    console.log("click" , userChoice);
    checkWinner(userChoice,compChoice());
  })
})

const compChoice =()=>{
  let comp = ['rock', 'paper', 'scissor'];
  let idx = Math.floor(Math.random()*3);
  return comp[idx];
}

const checkWinner = (user, comput)=>{
  if(user === comput){
    console.log("match Draw");
  }
  else{
    if(user === "rock" && comput === 'paper'){
      console.log("User Win");
    }
    else if(user === "rock" && comput === "Scissor"){
      console.log("user Win");
    }
    else if(user === 'paper' && comput === 'rock'){
     console.log("computer Win");
   }
   else if(user === 'paper' && comput === 'scissor'){
    console.log('computer Win');
   }
   else if(user === 'scissor' && comput === 'paper'){
    console.log('user Win');
   }
   else if(user === 'scissor' && comput === 'rock'){
    console.log('computer Win');
   }
   else if(comput === 'rock' && comput === 'paper'){
    console.log('computer Win');
   }
   else if(comput === 'rock' && comput === 'scissor'){
    console.log('computer Win');
   }
   
  }
}