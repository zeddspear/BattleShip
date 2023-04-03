import { createDom } from '../helperFunctions/Dom';
import { makeBoard } from '../helperFunctions/createBoardHTML';

const preparationrender = ()=>{

  let preparation = createDom('div','preparation');
    
  let heading = createDom('h1','preHead');
  heading.innerText = 'Place Your Fleet...';
  preparation.appendChild(heading);

  let axis = createDom('button','axis');
  axis.setAttribute('id','axis');
  axis.innerText = 'X-Axis';

  preparation.appendChild(axis);

  let preBoard = createDom('div','preBoard');
  let board = createDom('div','preBox');
  makeBoard(board);
  preBoard.appendChild(board);
  
  preparation.appendChild(preBoard);

  return preparation;


};

export {preparationrender};