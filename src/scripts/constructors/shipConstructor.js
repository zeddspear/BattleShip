const shipConstructor = (name,length)=>{
  const shipName = name;
  const shipLength = length;
  let hits = 0;

  const hit = ()=>{
    hits += 1;
    return hits;
  };

  const isSunk = ()=>{
    if(hits >= shipLength){
      return true;
    }
    return false;
  };

  return{
    name : shipName,
    length : shipLength,
    hits,
    hit,
    isSunk
  };

};

export {shipConstructor};