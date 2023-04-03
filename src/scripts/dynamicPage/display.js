import { gameBoard } from '../constructors/gameBoard';
import { returnXY } from '../methods/returnXY';
import { randomShipPlacing } from '../methods/randomShip';
import { eventListeners } from './events';



const display = (()=>{


  const updatePlayerGameboard = (cellData) =>{
    const cellElement = document.getElementById(`player1-cell${cellData.x+cellData.y*10}`);
    
    cellElement.classList.add(cellData.value);
  };

  const hasWon = (playerName)=>{
    const transparent = document.querySelector('.transparent');
    const playAgainDiv = document.querySelector('.playAgain');
    const winner = document.querySelector('.winner');

    transparent.style.opacity = '100%';
    playAgainDiv.style.opacity = '100%';
    transparent.style.visibility = 'visible';
    playAgainDiv.style.visibility = 'visible';
    transparent.style.zIndex = '1';
    playAgainDiv.style.zIndex = '2';
    winner.innerText = `${playerName} has won!`;


  };

  const hasGameEnded = (gameBoard1,gameBoard2)=>{
    if(!gameBoard1.hasShips()) return 2;
    if(!gameBoard2.hasShips()) return 1;
    return false;
  };

  // cell clicked and check the attack possibility

  const cellChecked = (cell,gameBoard1,gameBoard2,player1,player2)=>{
    const coord = returnXY(cell.dataset.index);
    if(gameBoard2.attackCheck(coord[0],coord[1])){
      cell.classList.add(gameBoard2.attack(coord[0],coord[1]));
      if(hasGameEnded(gameBoard1,gameBoard2) === 2){
        hasWon(player2.name);
      }


      updatePlayerGameboard(player2.takeTurn(gameBoard1));

      if(hasGameEnded(gameBoard1,gameBoard2) === 1){
        hasWon(player1.name);
      }


    }
  };



  // append ships classes on gameboard

  const drawShips = (gameboard)=>{
    const templateGameBoard = document.querySelector('.preBox');
    const cells = templateGameBoard.children;
    for(let i=0;i<cells.length;i++){
      const  {index}  = cells[i].dataset;
      let coords = returnXY(index);
      cells[i].className = '';
      cells[i].classList.add('column','cell',`${gameboard.checkCell(coords)}`);
    }
  };



  // Place ships in board

  const placeShips = (player1,player2) =>{

    const axisChangeBtn = document.querySelector('.axis');

    let orientation = 'x-axis';

    axisChangeBtn.addEventListener('click',(e)=>{
      if(orientation === 'x-axis'){
        orientation = 'y-axis';
        e.target.innerText = 'y-axis';
      }else{
        orientation = 'x-axis';
        e.target.innerText = 'x-axis';
      }
    });

    const ships = [
      {
        name:'Carrier',
        size: 5,
      },
      {
        name:'BattleShip',
        size:4,
      },
      {
        name:'Cruiser',
        size:3,
      },
      {
        name:'Submarine',
        size:3,
      },
      {
        name:'Distroyer',
        size:2,
      },
      {
        name:'Scouter',
        size:2,
      }

    ];

    let ShipAI = ships.slice();

   

    const gameBoard1 = gameBoard();
    const gameBoard2 = gameBoard();

    const newCell = document.querySelectorAll('.cell');

    newCell.forEach(cell => cell.addEventListener('click',(e)=>{
      
      const position = returnXY(e.target.dataset.index);
      ships[0].x = position.shift();
      ships[0].y = position.shift();
      ships[0].orientation = orientation;
      if(gameBoard1.validatePosition(ships[0])){
        gameBoard1.placeShip(ships.shift());
        drawShips(gameBoard1);
      }
      if(ships.length === 0){
        
        while(ShipAI.length > 0){
          const newShip = randomShipPlacing(ShipAI[0]);
          if(gameBoard2.validatePosition(newShip)){
            gameBoard2.placeShip(newShip);
            ShipAI.shift();
          }
        }
        setTimeout(()=>{eventListeners.gameinit(player1,player2,gameBoard1,gameBoard2);},500);
      }
      
    }));
    

  };

  return{
    placeShips,
    cellChecked,
  };

})();

export {display};



