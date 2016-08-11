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

function dequeue(){
	//use two varibale , use min to save the smallest code which is used to express the priority. use priority to record the smallest code ` place.

	let min=this.dataStore[0].code;
	let priority=0;
	for(const [index,item] of this.dataStore.entries()){
		if(item.code<min){
			min=item.code;
			priority=index;
		}
	}
	return this.dataStore.splice(priority,1);
}

function front(){
	return this.dataStore[0];
}

function back(){
	return this.dataStore[this.dataStore.length-1];
}

function toString(){
	let str="";
	for(const item of this.dataStore){
		str += item.name + " code: "
                  + item.code + "\n";
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

function print(item,...values){
	console.log(item,...values);
}


function Patient(name,code){
	this.name=name;
	this.code=code;
}

let p = new Patient("Smith",5);
let ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones",6);
ed.enqueue(p);

p = new Patient("Fehrenbach",6);
ed.enqueue(p);
p = new Patient("Brown",1);
ed.enqueue(p);
p = new Patient("Ingram",1);
ed.enqueue(p);
print(ed.toString());
let seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
//下一轮
 seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name); 
console.log("Patients waiting to be seen: "); 
console.log(ed.toString());
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name); 
console.log("Patients waiting to be seen: ");
console.log(ed.toString());














