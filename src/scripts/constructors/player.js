import { randomCoord } from '../methods/randomPlay';

const PlayerFactory = (playerName)=>{
  const name = playerName;

  const takeTurn = (gameboard,x,y)=>{
    // check if computer turn and makes a random move if not makes a player turn
    if(x === undefined && y === undefined){
      let newX = randomCoord();
      let newY = randomCoord();

      while (!gameboard.attackCheck(newX, newY)) {
        newX = randomCoord();
        newY = randomCoord();
      }
      return{
        value:gameboard.attack(newX,newY),
        x:newX,
        y:newY,
      };
    }
    return gameboard.attack(x,y);
  };



  return{
    name,
    takeTurn,
  };
};

export {PlayerFactory};