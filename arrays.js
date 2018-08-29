var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function addElementToBegginingOfArray(ary, element){
  return [element,...ary];
}

function destructivelyAddElementToBegginingOfArray(ary, element){
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

