import { createDom } from '../helperFunctions/Dom';
import { makeBoard } from '../helperFunctions/createBoardHTML';

const appendMain = ()=>{

  // Code for main content HTML 
  let mainDiv = createDom('div','mainDiv');

  let makeYourMove = createDom('h1','makeYourMove');
  makeYourMove.innerText = 'Make Your Move ...';
  mainDiv.appendChild(makeYourMove);

  let content = createDom('div','mainContent');

  let playerContainer = createDom('div','playerContainer');
  let playerName = createDom('span','playerName');
  playerName.innerText = 'Admiral';

  playerContainer.appendChild(playerName);

  let playerBoard = createDom('div','playerBoard');
  makeBoard(playerBoard);
  playerContainer.appendChild(playerBoard);
  

  let computerContainer = createDom('div','computerContainer');
  let computerName = createDom('span','computerName');
  computerName.innerText = 'Computer';

  computerContainer.appendChild(computerName);

  let computerBoard = createDom('div','computerBoard');
  makeBoard(computerBoard);
  computerContainer.appendChild(computerBoard);
  
  content.appendChild(playerContainer);
  content.appendChild(computerContainer);
  mainDiv.appendChild(content);

  let footer = createDom('div','footer');

  let foot = createDom('span','creator');
  foot.innerHTML = 'Made by Zeddspear <a href="https://github.com/zeddspear" target="_blank"><i class="fab fa-github"></i></a>';

  footer.appendChild(foot);

  let transparentDiv = createDom('div','transparent');
  mainDiv.appendChild(transparentDiv);

  let endDiv = createDom('div','playAgain');
  let winnerSpan = createDom('span','winner');
  winnerSpan.innerText = 'Player has won.';
  let playAgainBtn = createDom('button','playAgainbtn');
  playAgainBtn.innerText = 'Play Again';

  endDiv.appendChild(winnerSpan);
  endDiv.appendChild(playAgainBtn);

  mainDiv.appendChild(footer);

  mainDiv.appendChild(endDiv);

  return mainDiv;

};

export {appendMain};