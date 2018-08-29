var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function addElementToBegginingOfArray(ary, element){
  return [element,...ary]
}

function destructivelyAddElementToBegginingOfArray(){
  
}

addElementToBegginingOfArray(chocolateBars, "almond joy");
