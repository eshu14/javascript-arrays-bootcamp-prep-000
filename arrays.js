var chocolateBars=["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(arr,element){
  arr1=[...arr];
  arr1.unshift(element);
  return arr1;
};
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
};
function addElementToEndOfArray(array,element){
  arr1=[...array];
  arr1.push(element);
  return arr1;

};
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;

};
function accessElementInArray(array,index){
  console.log(array[index]);
};
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
};
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr){
  var arr1=arr.slice(0, arr.length - 1);
  return arr;
};
function removeElementFromBeginningOfArray(arr){
  var arr1=arr.slice(1);
  return arr1;
};
