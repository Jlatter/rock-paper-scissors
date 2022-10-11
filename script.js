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
var playerWins = 0;
var computerWins = 0;
var element = document.getElementById("rock");
var element2 = document.getElementById("paper");
var element3 = document.getElementById("scissors");
function playround(player_lower, comp_choice_variable){
    comp_choice_variable = getComputerChoice();
    if(player_lower === comp_choice_variable){
        document.getElementById("player").innerHTML = "player wins " + playerWins;
        document.getElementById("computer").innerHTML = "computer wins " + computerWins;
        return document.getElementById("demo").innerHTML =("Its a tie!");      
    }else if(player_lower === "rock" && comp_choice_variable === "paper" || player_lower === "paper" && comp_choice_variable === "scissors"
     || player_lower === "scissors" && comp_choice_variable === "rock"){
       computerWins++;
       if(computerWins === 5){playerWins=0; computerWins = 0; document.getElementById("victory").innerHTML="Sorry you lose"}
       else{document.getElementById("victory").innerHTML=""};
       document.getElementById("computer").innerHTML = "computer wins " + computerWins;
       document.getElementById("player").innerHTML = "player wins " + playerWins;
        return document.getElementById("demo").innerHTML =("You lose! computer chose " + comp_choice_variable);        
    }else if(player_lower === "rock" && comp_choice_variable === "scissors" || player_lower === "paper" && comp_choice_variable === "rock" 
    || player_lower === "scissors" && comp_choice_variable === "paper"){
        playerWins++;
        if(playerWins === 5){playerWins=0; computerWins = 0; document.getElementById("victory").innerHTML="Congratulations you win!"}
        else{document.getElementById("victory").innerHTML=""};
        document.getElementById("player").innerHTML = "player wins " + playerWins;
        document.getElementById("computer").innerHTML = "computer wins " + computerWins;
        return document.getElementById("demo").innerHTML =("You win! computer chose " + comp_choice_variable);
    }
};  

element.addEventListener("click", event => playround("rock"));
element2.addEventListener("click", event => playround("paper"));
element3.addEventListener("click", event => playround("scissors"));