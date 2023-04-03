import { shipConstructor } from './shipConstructor';

const gameBoard = ()=>{

  // creating 10X10 array
  const grid = new Array(10);
  for(let i=0;i<10;i++){
    grid[i]= new Array(10);
    for(let j=0;j<10;j++){
      grid[i][j] = 'empty';
    }
  }

  
  // eslint-disable-next-line no-unused-vars
  let shipCellCount = 0;
  

  // Place the ship in x-axis grid squares

  const placeShip = (ship)=>{
    
    shipCellCount += ship.size;
    const newship = shipConstructor(ship.name,ship.size);

    if(ship.orientation === 'x-axis'){
      // places the ship object on the grid
      for(let i = ship.y;i<ship.y+ship.size;i++){
        grid[ship.x][i] = newship;
      }
    }else{
      // places the ship object on the grid
      for (let i = ship.x; i < ship.x + ship.size; i += 1) {
        grid[i][ship.y] = newship;
      }
    }
  };

  const validatePosition = (ship)=>{
    if(ship.orientation === 'x-axis'){
      for(let i = ship.y; i < ship.y+ship.size;i++){
        if(typeof grid[ship.x][i] === 'undefined') return false;
        if(typeof grid[ship.x][i] === 'object') return false;
      }
    }else{
      for (let i = ship.x; i < ship.x + ship.size; i++) {
        if (i > 9 ) return false;
        if ((typeof grid[i][ship.y] === 'object')) return false;
      }
    }
    return true;
  };

  const hasShips = () =>{
    return shipCellCount > 0;
  };

  const attackCheck = (x,y)=>{
    if((grid[x][y] === 'miss')){
      return false;
    }else if(grid[x][y] === 'hit'){
      return false;
    }else{
      return true;
    }
  };

  const attack = (x,y)=>{
    if(typeof grid[x][y] === 'object' ){
      grid[x][y].hit();
      grid[x][y] = 'hit';
      shipCellCount -=1;
      return grid[x][y];
    }
    else if(grid[x][y] === 'empty'){
      grid[x][y] = 'miss';
      return grid[x][y];
    }
  };

  const checkCell = (coords)=>{
    if(typeof grid[coords[0]][coords[1]] === 'object'){
      return 'ship';
    }
    return 'empty';
  };




  return {
    placeShip,
    validatePosition,
    checkCell,
    attack,
    attackCheck,
    hasShips,

  };


};

export {gameBoard};