var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function addElementToBeginningOfArray(ary, element){
  return [element,...ary];
}

function destructivelyAddElementToBeginningOfArray(ary, element){
  return ary.unshift(element);
}

function addElementToEndOfArray(ary, element){
  return [...ary,element];
}

function destructivelyAddElementToEndOfArray(ary, element){
  return ary.push(element);
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