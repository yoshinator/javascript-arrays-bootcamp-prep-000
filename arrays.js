var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function addElementToBeginningOfArray(ary, element){
  return [element,...ary];
}

function destructivelyAddElementToBeginningOfArray(ary, element){
  ary.unshift(element)
  return ary;
}

function addElementToEndOfArray(ary, element){
  return [...ary,element];
}

function destructivelyAddElementToEndOfArray(ary, element){
  ary.push(element)
  return ary;
}

function accessElementInArray(ary,indexOfAry){
  return ary[indexOfAry];  
}

function destructivelyRemoveElementFromBeginningOfArray(ary){
  return ary.shift;
}

function removeElementFromBeginningOfArray(ary){
  return ary.slice(0,1);
}

function destructivelyRemoveElementFromEndOfArray(ary){
  return ary.pop();
}

function removeElementFromEndOfArray(ary){
  return ary.slice(0,-1);
}