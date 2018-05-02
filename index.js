function init(){
    let player1PreviousResults = [];
    let player2PreviousResults = [];
    let round = 0;

    const player1DrawBtnId = 'draw-btn1';
    const player1StayBtnId = 'stay-btn1';
    const player1ScoreId = 'score-player1';
    const player1DrawBtnElement = document.getElementById(player1DrawBtnId);
    const player1StayBtnElement = document.getElementById(player1StayBtnId);
    const player1ScoreElement= document.getElementById(player1ScoreId);

    const player2DrawBtnId = 'draw-btn2';
    const player2StayBtnId = 'stay-btn2';
    const player2ScoreId = 'score-player2';
    const player2ScoreElement = document.getElementById(player2ScoreId);
    const player2DrawBtnElement =  document.getElementById(player2DrawBtnId);
    const player2StayBtnElement = document.getElementById(player2StayBtnId);

    const roundElement = document.getElementById('round');
    window.startNewGame = startNewGame;
    window.draw = draw;
    window.stay = stay;
    startNewGame();

    function startNewGame(){
        player1PreviousResults = [];
        player2PreviousResults = [];
        round = 0;
        player1ScoreElement.innerHTML = 0;
        player2ScoreElement.innerHTML = 0;
        roundElement.innerHTML = 0;
    }

    function draw(player){
        if(player === 1){
            play(player1PreviousResults, player);
        }
        else{
            play(player2PreviousResults, player);
        }
    }

    function stay(player){
        if(player === 1){
            round++;
            roundElement.innerHTML = round;
            player1ToggleDisabled();
        }
        else{
            round++;
            roundElement.innerHTML = round;
            player2ToggleDisabled();
        }
    }

    function player1ToggleDisabled(){
        player1StayBtnElement.disabled = true;
        player1DrawBtnElement.disabled = true;
        player2DrawBtnElement.disabled = false;
        player2StayBtnElement.disabled = false;
    }

    function player2ToggleDisabled(){
        player2DrawBtnElement.disabled = true;
        player2StayBtnElement.disabled = true;
        player1StayBtnElement.disabled = false;
        player1DrawBtnElement.disabled = false;
    }

    function play(previousResults, player){
        let currentResult = Math.floor((Math.random() * 13) + 1);
        previousResults.push(currentResult);
        let sum = 0;
        previousResults.forEach((result)=>{
            sum += result;
        });
        if(player === 1){
            player1ScoreElement.innerHTML = sum;
            player1ToggleDisabled();
        }
        else{
            player2ScoreElement.innerHTML = sum;
            player2ToggleDisabled();
        }
        round++;
        roundElement.innerHTML = round;
        if(sum === 21){
            alert(`Player ${player} result: ${sum}, Blackjack! You won! Let's play again!`);
            startNewGame();
        }
        else if(sum > 21){
            alert(`Player ${player} result: ${sum} --> Burned! You lost! Let's play again!`);
            startNewGame();
        }
    }
}