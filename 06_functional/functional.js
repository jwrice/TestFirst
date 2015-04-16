// 06_Functional 
var doubler = function(num){
	return num*2
}

var map = function(array, func){
	var newVal = [];
	for (var i = 0; i< array.length; i++){
		newVal[i] = func(array[i])
	}
	return newVal
}

var filter = function(array, func){
	var output = []
	for (var i = 0; i < array.length; i++){
		if (func(array[i]) == true){
			output.push(array[i])
		}
	}
	return output;
}

var contains = function(input, test){
	var isTrue = false
	if (Array.isArray(input) == Array){
		for (var i = 0; i< input.length; i++){
			if (input[i] == test){
				isTrue = true
			}

		}
	} else if (typeof(input) == 'object'){
		for (var prop in input){
			if (test == input[prop]){
				isTrue = true
			}
		}
	} return isTrue
}

var countWords = function(str){
	return str.split(" ").length
}

var reduce = function (array, startVal, combineFunc){
	var current = startVal
	for (var i = 0; i< array.length; i++){
		current = combineFunc(current, array[i])
	}
	return current
}

var countWordsInReduce = function(start,words){
	// var wordSum = 0
	// for (var i = 0; i< words.length; i++){
	// 	wordSum += countWords(words)
	// }
	return start+words.split(" ").length
}

var sum = function(arr){
	return reduce(arr, 0, function(current,next){
		return current+next})
}

var every = function(arr,func){
	var isTrue = true
	for (var i = 0; i< arr.length; i++){
		if (func(arr[i])==false){
			isTrue = false
		}
	}
	return isTrue
}

var any = function(arr,func){
	var isTrue = false
	for (var i = 0; i< arr.length; i++){
		if (func(arr[i])==true){
			isTrue = true
		}
	}
	return isTrue
}