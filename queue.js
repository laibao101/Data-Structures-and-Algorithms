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
	return this.dataStore.shift();
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

function print(item,...values){
	console.log(item,...values);
}



/*
	1.test q
*/


const q=new Queue();

// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
// print(q.toString());
// q.dequeue();
// print(q.toString());
// print("Front of queue: " + q.front());
// print("Back of queue: " + q.back());





/*
	1.the problem  about dancing partner
*/


function Dancer(name,sex){
	this.name=name;
	this.sex=sex;
}



function getDancers(males,females){
	const names=read("partner.txt");
	for(let item of names){
		item=item.trim();
	}
	for(const item of names){
		const dancer=item.split(" ");
		
		const sex=dancer[0];
		const name=dancer[1];
		if(sex=="F"){
			females.enqueue(new Dancer(name,sex) );
		}else{
			males.enqueue(new Dancer(name,sex) );
		}
	}

}


function dance(males,females){
	print("The dancer partner are : \n");
	while(!females.empty() && !males.empty() ){
		const female=females.dequeue();
		print("Female dancer is : " + female.name);
		const male=males.dequeue();
		print("and the male dancer is : " + male.name);
	}
}


const males = new Queue();
const females = new Queue();
getDancers(males, females);
dance(males, females);
if (!females.empty()) {
    print(females.front().name + " is waiting to dance.");
 }
 if (!males.empty()) {
    print(males.front().name + " is waiting to dance.");
 }







