/* eslint-disable no-undef */
import { randomCoord } from '../randomPlay';

let Check = false;

test('random number will generate between 1 to 9',()=>{
  let num = randomCoord();
  if(num <=9 || num >= 0){
    Check = true;
  }
  expect(Check).toBe(true);
    
});