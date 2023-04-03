/* eslint-disable no-undef */
import { returnXY } from '../returnXY';

test('return cords array',()=>{
  let index = 34;
  expect(returnXY(index)).toStrictEqual([4,3]);
});