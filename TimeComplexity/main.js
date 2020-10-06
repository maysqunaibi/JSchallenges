
//
let greets = ["Hi", "welcome", "Hey", "Hello"];

let inverter = (array) => {
  let pointer = array.length - 1;
  for (let i = 0; i < pointer; i++) {
    let tempt = array[i];
    array[i] = array[pointer];
    array[pointer] = tempt;
    pointer--;
  }
  return array;
};
console.log(inverter(greets));
console.log(inverter(["Mai", "Malk"]));


let inverter2 = (array) => {
  if (array.length === 0){
    return []
    }
      return [array.pop()].concat(inverter2(array))
    }
console.log(inverter2([1,2,3,4,5,6,7]));
console.log(inverter2(["Mai", "Malk"]));


let getSum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
};

let getSumNested = (array) => {
  debugger
  let total = 0;
  for (let i = 0; i < array.length ; i++) {
    for (let j = 0; j < array[i].length; j++) {
     total += array[i][j]
  }
}
  return total;
};

console.log(getSumNested([[1,2,3],[1,2,3,4]]))









