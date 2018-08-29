var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function addElementToBegginingOfArray(ary, element){
  return [element,...ary]
}

function destructivelyAddElementToBegginingOfArray(){
  
}

console.log(addElementToBegginingOfArray(chocolateBars, "almond joy"));
