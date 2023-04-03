
// for making board in HTML
const makeBoard = (board)=>{

  if(board.classList.contains('.preBox')){
    for(let i=0;i<100;i++){
      const newCell1 = document.createElement('div');
      newCell1.id = `template-cell${i}`;
      newCell1.dataset.index = i;
      newCell1.classList.add('cell','column');
      board.appendChild(newCell1);
    }
  }else if(board.classList.contains('playerBoard')){
    for(let i=0;i<100;i++){
      const newCell1 = document.createElement('div');
      newCell1.id = `player1-cell${i}`;
      newCell1.dataset.index = i;
      newCell1.classList.add('cell','column');
      board.appendChild(newCell1);
    }
  }else{
    for(let i=0;i<100;i++){
      const newCell1 = document.createElement('div');
      newCell1.id = `computer-cell${i}`;
      newCell1.dataset.index = i;
      newCell1.classList.add('cell','column');
      board.appendChild(newCell1);
    }
  }
 






  // let  boardHtml = '';
  /*for(let i=0;i<10;i++){
    boardHtml += '<div class="row">';
    for(let j=0;j<10;j++){
      if(board.classList.contains('playerBoard')){
        boardHtml += `<div class='column' id="player-cell${i}${j}" data-coord='${i}${j}'></div>`;
      }else if(board.classList.contains('preBox')){
        boardHtml += `<div class='column temp-cell' id = "template-cell${i}${j}" data-coord='${i}${j}'></div>`;
      }
      else{
        boardHtml += `<div class='column' data-coord='${i}${j}'></div>`;
      }
    }
    boardHtml += '</div>';
  }
  board.innerHTML = boardHtml;*/
};

export {makeBoard};