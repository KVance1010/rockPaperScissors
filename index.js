var startGame = document.querySelector ("button");
var player1;
var player2;
var scoreBoard = {
    wins: 0,
    losses: 0,
    draws: 0
}


startGame.addEventListener(onclick, play);
function play (){
player1 = prompt("enter R for rock, P for paper, or S for scissors");
player2 = cpuChoice();

}

function cpuChoice(){
    player2 = Math.floor(Math.random() * (3-1+1))+1;
    switch(player2){
        case 1:
        player2 = "R";
        break;

        case 2:
        player2 = "P";
        break;

        case 3:
        player2 = "S";
        break;

        default:
         console.log("Somenthing with wrong")
    
    }

    return player2;

}