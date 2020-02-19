'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  // const haveSeen = {}
  // let currentNode = linkedlist.head

  // while(currentNode.next){
  //   if(haveSeen[currentNode.value]) return true

  //   haveSeen[currentNode.value] = true
  //   currentNode = currentNode.next
  // }
  // return false

  let turtle = linkedlist.head
  let rabbit = linkedlist.head

  do{
    try{
      turtle = turtle.next
      rabbit = rabbit.next.next
    }
    catch{
      return false
    }

    if(turtle === rabbit) return true
  } while(turtle !== rabbit && rabbit )

return false

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
