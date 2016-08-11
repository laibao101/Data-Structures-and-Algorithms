


/*
	a simple bidirectional queue, baseed on queue.
	add two methods
	1.enqueue_front 		push a element into the queue and put the element into the front of the queue
	2.dequeue_back 			return a element from the back of the  queue and delete it
*/

function BidirectionalQueue() {
	this.dataStore = [];
	this.enqueue = tools.enqueue;
	this.dequeue = tools.dequeue;
	this.front = tools.front;
	this.back = tools.back;
	this.toString = tools.toString;
	this.empty = tools.empty;
	this.enqueue_front=tools.enqueue_front;
	this.dequeue_back=tools.dequeue_back;
}


const tools={
	enqueue:function(element){
		this.dataStore.push(element)
	},
	dequeue:function(){
		return this.dataStore.shift();
	},
	front:function(){
		return this.dataStore[0];
	},
	back:function(){
		return this.dataStore[this.dataStore.length-1];
	},
	toString:function(){
		let str="";
		for(const item of this.dataStore){
			str+=item+"\n";
		}
		return str;
	},
	empty:function(){
		if(this.dataStore.length===0){
			return true;
		}else{
			return false;
		}
	},
	enqueue_front:function(element){
		this.dataStore.unshift(element);
	},
	dequeue_back:function(){
		return this.dataStore.pop();
	}


}



function print(item,...values){
	console.log(item,...values);
}



const q=new BidirectionalQueue();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
print(q.toString());
q.dequeue_back();
print(q.toString());
q.enqueue_front("John");
print(q.toString());
