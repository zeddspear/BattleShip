/* eslint-disable no-undef */
import { shipConstructor } from '../shipConstructor';

const Length = 3;

const testShip = shipConstructor('testShip',Length);

test(' Hit should return 1 ',()=>{
  expect(testShip.hit()).toBe(1);
});

test(' 2nd Hit should return 2 ',()=>{
  expect(testShip.hit()).toBe(2);
});

test(' isSunk() should return false ship floats',()=>{
  expect(testShip.isSunk()).toBe(false);
});


