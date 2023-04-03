import { PlayerFactory } from '../constructors/player';
import { Page } from '../staticPage/renderStatic';
import { display } from './display';
import { returnXY } from '../methods/returnXY';


const eventListeners = (()=>{
  const body = document.querySelector('.content');

  const startEvent = ()=>{
    const startBTN = document.querySelector('.startButton');

    startBTN.addEventListener('click',()=>{
      const player1 = PlayerFactory('Admiral');
      const player2 = PlayerFactory('Computer');
      
      let playerName = document.querySelector('#nameInput');

      if(playerName.value !== ''){
        player1.name = playerName.value;
      }
      
      body.innerHTML = '';

      Page.renderPrepration(body);

      display.placeShips(player1,player2);

      

    });

  };


  // intilization of main game
  const gameinit = (player1,player2,gameBoard1,gameBoard2)=>{
    const body = document.querySelector('.content');
    body.innerHTML = '';
  
    Page.renderPageMain(body);
  
    const player1Name = document.querySelector('.playerName');
    const player2Name = document.querySelector('.computerName');
  
    player1Name.innerText = player1.name;
    player2Name.innerText = player2.name;
  
    const player1Board = document.querySelector('.playerBoard');
    const player2Board = document.querySelector('.computerBoard');
  
    const player1cells = player1Board.children;
    const player2cells = player2Board.children;
      
    for(let i=0;i<player1cells.length;i++){
      const  {index}  = player1cells[i].dataset;
      let coords = returnXY(index);
      player1cells[i].className = '';
      player1cells[i].classList.add('cell','column',`${gameBoard1.checkCell(coords)}`);

      player2cells[i].addEventListener('click',(e)=>{
        display.cellChecked(e.target,gameBoard1,gameBoard2,player1,player2);
      });

      const playAgainBTN = document.querySelector('.playAgainbtn');

      playAgainBTN.addEventListener('click',()=>{location.reload();});

    }
        
      
  
  };


  
  return{
    startEvent,
    gameinit,
  };
 
})();
  

export {eventListeners};

