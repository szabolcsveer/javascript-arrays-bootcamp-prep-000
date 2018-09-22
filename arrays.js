var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

var x = ["foo"];

const one = [1];
function addElementToBeginningOfArray(x, one){
  return [one, ...x];
}

function destructivelyAddElementToBeginningOfArray(x,one){
  return x.unshift(one);
  
}
function addElementToEndOfArray(x,one){
  return [...x,one];
}
function destructivelyAddElementToEndOfArray(x,one){
  return x.push("foo");
}
var n = [1, 2, 3];
function accessElementInArray(n,i){
  return n[2];
}

function destructivelyRemoveElementFromBeginningOfArray(x){
  return x.shift(x);
}
function removeElementFromBeginningOfArray(x){
  return x.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(x){
  return x.pop(1);
  }
function removeElementFromEndOfArray(x){
  return x.slice(0);
}
