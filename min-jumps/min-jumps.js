'use strict';

// Complete this algo
const minJumps = arr => {
  let start = arr[0]
  let startIndx = 0
  let minJump =0

  while(startIndx < arr.length-1){
     start = Math.max(...arr.slice(startIndx +1, start +1))
     startIndx = arr.indexOf(start,startIndx)
     minJump++
  }


  return minJump
};

module.exports = minJumps
