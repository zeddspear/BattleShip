// this function will return cords on some index

const returnXY = (index)=>{
  let x = 0 ;
  let y = 0 ;

  x = index % 10;
  y = Math.floor(index/10);

  return [x,y];
};

export {returnXY};