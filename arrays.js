var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//return new array and not modify orig
function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array];
  return newArray;
}

//return modified original array
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
