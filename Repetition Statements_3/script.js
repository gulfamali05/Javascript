// //Print 1 to 100 Even Numbers
// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//     console.log("i = ", i);
// }

// Guessing the Number Game
let num = 25;
let userInput = prompt("Guess The Number:");
while(num != userInput){
   userInput = prompt("Invalid Number, Guess The Number Again");
}
console.log("Congratulations ! ,You Guess the correct number");