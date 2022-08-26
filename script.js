//Make a function for computer to choose random number out of 1 2 and 3 then assign the number to rock paper, scissors
function getComputerChoice(){ 
    let x = Math.floor((Math.random() * 3) + 1);
    if (x === 1){
        var computer_choice = "rock";
    }else if (x === 2){
         computer_choice = "paper";
    }else {
         computer_choice = "scissors";
    }
    return computer_choice;
}
//store computer choice in a variable


//Make a prompt for the player for rock paper scissors and store it in a variable, make it case insensitive


//Make a function to play a round i.e. compare the result of computer's choice and players, and output win lose or tie
function playround(player_lower, comp_choice_variable){
    comp_choice_variable = getComputerChoice();
    var player_choice_case = prompt("rock paper or scissors?");
var player_lower = player_choice_case.toLowerCase();
    if(player_lower === comp_choice_variable){
        return("Its a tie!");
    }else if(player_lower === "rock" && comp_choice_variable === "paper" || player_lower === "paper" && comp_choice_variable === "scissors" || player_lower === "scissors" && comp_choice_variable === "rock"){
        return("You lose! computer chose " + comp_choice_variable);
    }else if(player_lower === "rock" && comp_choice_variable === "scissors" || player_lower === "paper" && comp_choice_variable === "rock" || player_lower === "scissors" && comp_choice_variable === "paper"){
        return("You win! computer chose " + comp_choice_variable);
    }
   
}

//Make a function to keep track of the total number of wins for computer and player, end at 5
function roundCount(){
   let keepgoing = true
   let i = 0;
   let c = 0;
while(keepgoing){
 let rond = playround();
if (rond.includes("lose")){c++};
if (rond.includes("win")){i++};
if(i === 5 || c === 5 ){keepgoing = false};
console.log( rond + " Player score " + i + " Computer score " + c)
if(i === 5){console.log("Player Wins")}
else if(c=== 5){console.log("Computer Wins")}
}

}
console.log(roundCount())