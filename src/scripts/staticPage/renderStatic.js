import { startPage } from './startPage';
import { appendMain } from './mainPage';
import { preparationrender } from './preparation';


const Page = (()=>{

  const renderPagewithStart = (body)=>{
    body.appendChild(startPage());
  };

  const renderPageMain = (body)=>{
    body.appendChild(appendMain());
  };

  const renderPrepration = (body)=>{
    body.appendChild(preparationrender());
  };

  return {
    renderPagewithStart,
    renderPageMain,
    renderPrepration
  };
})();


export {Page};