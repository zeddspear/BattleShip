// Creating HTML tags in JS with less headache
const createDom = (tag,...classes)=>{

  const newDom = document.createElement(tag);

  if(classes.length === 0){
    return newDom;
  }else{
    classes.forEach((string)=> { return newDom.classList.add(string);});
    return newDom;
  }


};

export {createDom};