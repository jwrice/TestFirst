function RPNCalculator(){
  // New: this__proto__ = createCalculator.prototype
  // return this

//RPNCalculator.prototype.value = function(){
//  return this;
//}

this.values = [];
// this.values = "";

RPNCalculator.prototype.push = function(val){
  var temp = this.values.length
  this.values[temp] = val
}

RPNCalculator.prototype.plus = function(){
	if (this.values.length < 2){
		throw "rpnCalculator is empty"
	}
  var sum1 = this.values.pop()
  var sum2 = this.values.pop()
  var temp = this.values.length
  this.values[temp] = sum2+sum1
}

RPNCalculator.prototype.minus = function(){
	if (this.values.length < 2){
		throw "rpnCalculator is empty"
	}
	var sum1 = this.values.pop()
  var sum2 = this.values.pop()
  var temp = this.values.length
  this.values[temp] = sum2-sum1
}

RPNCalculator.prototype.divide = function(){
	if (this.values.length < 2){
		throw "rpnCalculator is empty"
	}
	var sum1 = this.values.pop()
  var sum2 = this.values.pop()
  var temp = this.values.length
  this.values[temp] = sum2/sum1
}

RPNCalculator.prototype.times = function(){
	if (this.values.length < 2){
		throw "rpnCalculator is empty"
	}
	var sum1 = this.values.pop()
  var sum2 = this.values.pop()
  var temp = this.values.length
  this.values[temp] = sum2*sum1
}

RPNCalculator.prototype.value = function(){
	return this.values[this.values.length-1]
}

}

