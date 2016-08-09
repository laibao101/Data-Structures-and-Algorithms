/*
	a simple queue for learning and exercising
	1.enqueue 		push a element into the back of the queue
	2.dequeue 		delete a element from the front of the queue
	3.front 		return the front element of the queue
	4.back			return the back element of the queue
	5.toString 		return all the elments of the queue
	6.empty			check if the queue is empty or not 
*/



function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element){
	this.dataStore.push(element)
}

functino dequeue(){
	return this.dataStore.shift();
}


function front(){
	return this.dataStore[0];
}

function front(){
	return this.dataStore[this.dataStore.length-1];
}

function toString(){
	let str="";
	for(const item of this.dataStore){
		str+=item+"\n";
	}
	return str;
}


function empty(){
	if(this.dataStore.length===0){
		return true;
	}else{
		return false;
	}
}