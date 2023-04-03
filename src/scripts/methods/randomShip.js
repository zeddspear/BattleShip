import { randomCoord } from './randomPlay';

const randomShipPlacing = (ship)=>{
  let x = randomCoord();
  let y = randomCoord();

  let orientation = 'x-axis';

  if(Math.random() > 0.5){
    orientation = 'y-axis';
  }

  return{
    name : ship.name,
    size: ship.size,
    x,
    y,
    orientation
  };
};

export {randomShipPlacing};