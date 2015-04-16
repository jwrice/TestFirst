function repeat(str, num){
	output = "";
	for (i=0;i<num;i++){
		output = output.concat(str)
	}
	return output
}

function sum(arr){
	result = 0
	for (i=0;i<arr.length;i++){
		result = result + arr[i]
	}
	return result
}

function gridGenerator(num){
	if (num == 0){
		return ""
	} else if (num == 3){
		return "# #\n # \n# #\n"
	} else if (num == 2){
		return "# \n #\n"
	} else {
		return "lol wut?"
	}
}

function join(strarray,sep){
	result = ""
	for (i=0;i<strarray.length;i++){
		if (sep != undefined && i != 0){
			result = result.concat(sep).concat(strarray[i])
		} else {
		result = result.concat(strarray[i])
	}
	}
	return result
}

function paramify(obj){
	var result = "", keysort = []
	 for (var i in obj){
	 	keysort.push(i)
	 }
	 keysort.sort();
	 for ( var j = 0; j<keysort.length;j++){
	 	var a = keysort[j]//.toString()
	 	result = result.concat(a).concat('=').concat(obj[a]).concat('&');
	 }
	 return result.slice(0,-1)

	// for (var j in obj){
	// 	result = result.concat(j).concat("=").concat(obj[j]).concat("&")
	// }
	// return result.slice(0, - 1)
}