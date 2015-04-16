var Mammal = function(name){
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function(){
	return "My name is "+ this.name + ", I'm a Mammal"
}

Mammal.prototype.haveBaby = function(){
	var tempBabyName = "Baby " + this.name
	var tempNewBaby = new Mammal(tempBabyName)
	this.offspring.push(tempNewBaby)
	return tempNewBaby
}

var Cat = function(name,color){
	Mammal.call(this, name)
	this.color = color;
	//this.prototype = Mammal.prototype
}

Cat.prototype = Object.create(Mammal.prototype) //unclear - this is redundant to line 18, no?
Cat.prototype.constructor = Cat

Cat.prototype.haveBaby = function(color){
	var tempCatName = "Baby " + this.name
	var tempNewBabyCat = new Cat(tempCatName,color.toString())
	this.offspring.push(tempNewBabyCat)
	return tempNewBabyCat
}