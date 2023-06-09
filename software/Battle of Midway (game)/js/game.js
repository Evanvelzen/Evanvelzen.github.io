console.log('game.js loaded');

const boxes = document.querySelectorAll('.box');
const buttonToPlayer2 = document.querySelector('.button-to-player2');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const buttonToStartGame = document.querySelector('.button-start-game');
const battleship = document.querySelector('.battleship');
const patrolBoat = document.querySelector('.patrol-boat');
const carrier = document.querySelector('.carrier');
const destroyer = document.querySelector('.destroyer');
const Uboat = document.querySelector('.U-boat');
let click = 0;

battleship.addEventListener('click', selectedMove);
buttonToPlayer2.addEventListener('click',goToPlayer2Placement);
for (let index = 0; index < boxes.length; index++) {
    const box = boxes[index];
    box.addEventListener('click', function(){

    });
}



function goToPlayer2Placement(){
    leftSide.classList.add('invisible');
    rightSide.classList.remove('invisible');
    buttonToPlayer2.classList.add('collapse');
    buttonToStartGame.classList.remove('collapse');
    buttonToStartGame.classList.add('visible');
}

function selectedMove(){

    click = click + 1;

    console.log(click);

    if( click <= 1){
        battleship.classList.add('border');
    } else if( click <= 2 ){
        battleship.classList.add('border');
    } else if( click <= 3 ){
        battleship.classList.remove('border');
        click = 0;
    }

}