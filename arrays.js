var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");

addElementToBegginingOfArray(ary, element){
  return [element,...ary]
}

destructivelyAddElementToBegginingOfArray(){
  
}

console.log(addElementToBegginingOfArray(chocolateBars, "almond joy"))
