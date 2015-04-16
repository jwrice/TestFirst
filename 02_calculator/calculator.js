function createCalculator(){
  var calc = {};
  calc.number = 0
  calc.value = function(){
    return calc.number
  }
  calc.add = function(num){
    calc.number += num
    return calc.number
  }
  calc.subtract = function(num){
    calc.number -= num
    return calc.number
  }
  return calc;
}

function value(){
}