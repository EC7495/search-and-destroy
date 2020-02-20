'use strict';

// Complete this algo

const reverseIndexOf = (array, value) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) return i;
  }

  return -1;
};

const minJumps = (arr, maxJumps = arr[0]) => {
  if (arr.length < 2) return 0;
  else if (arr.length - 1 <= maxJumps || arr.length === 2) return 1;
  else {
    const allowedJumps = arr.slice(1, maxJumps + 1);
    maxJumps = Math.max(...allowedJumps);
    const index = reverseIndexOf(allowedJumps, maxJumps) + 1;
    const newArray = arr.slice(index, arr.length);
    return minJumps(newArray, maxJumps) + 1;
  }
};

module.exports = minJumps;
