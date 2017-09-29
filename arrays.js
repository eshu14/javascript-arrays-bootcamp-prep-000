var chocolateBars=["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(arr,element){
  arr1=[...arr];
  arr1.unshift(element);
  return arr1;
};
function destructivelyAddElementToBeginningOfArray(element,arr){
  arr.push(element);
  return arr;
};
function addElementToEndOfArray(arr,element){
  arr1=[...arr];
  arr1.push(element);
  return arr1;

};
function destructivelyAddElementToEndOfArray(arr,element){
  arr.push(element);
  return arr;

};
function accessElementInArray(arr,index){
  console.log(arr[index]);
};
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
};
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr){
  var arr1=arr.slice(0, arr.length - 1);
  return arr;
};