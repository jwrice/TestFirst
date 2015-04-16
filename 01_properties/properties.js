function setPropertiesOnObjLiteral(obj){
	obj.x = 7;
	obj.y = 8;
	obj.onePlus = function(z){
		return z+1
	}

}

function setPropertiesOnArrayObj(arr){
	arr.hello = function(){
		return "Hello!";
	}
	arr.full = "stack";
	arr[0] = 5;
	arr.twoTimes = function(z){
		return z*2
	}
}

function setPropertiesOnFunctionObj(func){
	return "I am a function object, all functions are objects! Function can have their own properties too!"
	func.year = 2015
	func.divideByTwo = function(num){
		return num/2
	}
	




}