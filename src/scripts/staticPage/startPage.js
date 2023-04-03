import { createDom } from '../helperFunctions/Dom';

const startPage = ()=>{

  let startBody = createDom('div','startPage');

  let getDataNplay = createDom('div','getNplay');

  let heading = createDom('h1','gameHeading');
  heading.innerText = 'BattleShip';

  let imageDiv = createDom('div','imageDiv');

  startBody.appendChild(imageDiv);

  startBody.appendChild(heading);

  startBody.appendChild(getDataNplay);

  
  let nameInput = createDom('input','nameInput');
  nameInput.setAttribute('id','nameInput');
  let nameLable = createDom('lable','nameLable');
  nameLable.setAttribute('for','nameInput');
  nameLable.innerText = 'Enter Your Name';

  let startButton = createDom('button','startButton');
  startButton.innerText = 'Start';

  
  getDataNplay.appendChild(nameLable);
  getDataNplay.appendChild(nameInput);
  getDataNplay.appendChild(startButton);


  
  return startBody;
  

};

export {startPage};