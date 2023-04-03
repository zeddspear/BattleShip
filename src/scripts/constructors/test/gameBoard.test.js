/* eslint-disable no-undef */
import { gameBoard } from '../gameBoard';

let testShips = [
  {
    name: 'Carrier', size: 5, x: 0, y: 0, orientation: 'y-axis',
  },
  {
    name: 'Battleship', size: 4, x: 2, y: 0, orientation: 'x-axis',
  },
  {
    name: 'Cruiser', size: 3, x: 9, y: 0, orientation: 'y-axis',
  },
  {
    name: 'Submarine', size: 3, x: 0, y: 9, orientation: 'x-axis',
  },
  {
    name: 'Destroyer', size: 2, x: 8, y: 9, orientation: 'x-axis',
  },
];


const testGameBoard = gameBoard();

for(let i =0;i<testShips.length;i++){
  if(testGameBoard.validatePosition(testShips[i])){
    testGameBoard.placeShip(testShips[i]);
    testShips.shift();
  }
}
  

test('gameboard has atleast one ship',()=>{ 
  expect(testGameBoard.hasShips()).toBe(true);
});

test('attack a hit',()=>{
  expect(testGameBoard.attack(2,0)).toBe('hit');
});

test('miss a attack',()=>{
  expect(testGameBoard.attack(2,3)).toBe('miss');
});

test('attack is invalid 1',()=>{
  expect(testGameBoard.attackCheck(2,0)).toBe(true);
});

test('attack is invalid 2',()=>{
  testGameBoard.attack(0,0);
  expect(testGameBoard.attackCheck(0,0)).toBe(true);
});