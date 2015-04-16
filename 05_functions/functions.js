// Functions.js
function concat_string(){
	strresult = "";
	for (i=0;i<arguments.length;i++){
		strresult = strresult.concat(arguments[i])
	}
	return strresult;
}

function yourFunctionRunner(){
	result = [];
	for (i=0;i<arguments.length;i++){
		result[i] = arguments[i]()
	}
	return result.join("")
}

function makeAdder(A){
	function adderOf2function(B){
		return A+B
	}
	return adderOf2function;
}

function once(f){
	var didNotRun = true//, temp;
	return function(){
		if (didNotRun){
			didNotRun = false
			return f();
			//return temp
		}
	}
}

function createObjectWithTwoClosures(){
	var increment = 0;
	var obj = {
		oneIncrementer: function(){
		increment++
	},
	tensIncrementer: function(){
		increment += 10
	},
	getValue: function (){
		return increment
	}
}
	return obj;
}