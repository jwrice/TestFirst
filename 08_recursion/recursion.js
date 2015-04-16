var factorialIterative = function(num){
	var output = 1
	for (var i = 1; i<=num;i++){
		output *= i
	}
	return output
}

var factorial = function(num){
	if (num === 0){
		return 1
	}

	return num * factorial(num-1)
}

var fib = function(num){
	if (num === 0 | num === 1){
		return 1
	} return fib(num-1) + fib(num-2)
}

var type = function(input){
	var shift = Object.prototype.toString.call(input).toString()
	return shift.slice(0,shift.length-1).split(" ")[1]
}

var stringify = function(input){
	var typeInput = type(input)
	if (typeInput == 'undefined' || typeInput == 'null'){
		typeInput = typeInput.toLowerCase();
	} else {
	}

}