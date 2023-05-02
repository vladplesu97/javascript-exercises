const add = function(num , num2) {
	return num + num2;
};

const subtract = function(num , num2) {
	return num - num2
};

const sum = function(arr) {
	let sum = 0 ;
    for (let i = 0 ; i < arr.length ; i++){
      sum += arr[i];
    }

    return sum
};

const multiply = function(arr) {
  let mtp = 1 ;
  for (let i = 0 ; i < arr.length ; i++){
    mtp = arr[i] * mtp;
  }

  return mtp
};

const power = function(num , num2) {
	return Math.pow(num , num2);
};

const factorial = function(num) {
	if(num === 0 )
        return 1;
    let fact = 1;
    for(let i = 1 ; i <= num ; i++){
        fact = fact * i;
    }

    return fact

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
