var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function addElementToBegginingOfArray(ary, element){
  return [element,...ary]
}

function destructivelyAddElementToBegginingOfArray(ary, element){
  return chocolateBars.unshift(element)
}

console.log(addElementToBegginingOfArray(chocolateBars, "almond joy"));
console.log(chocolateBars);