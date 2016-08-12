
/*
	a  simple doubly linked list.
*/


function Node(element){
	this.element=element;
	this.next=null;
	this.prev=null;
}

function LList(){
	this.head=new Node("head");
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
	// this.findPrevious=findPrevious;
	this.findLast=findLast;
	this.disReverse=disReverse;
}

function print(item,...values){
	console.log(item,...values);
}

function find(item){
	let currNode=this.head;
	while(currNode.element != item){
		currNode=currNode.next;
	}
	return currNode;
}


function insert(newElement,item){
	const newNode=new Node(newElement);
	const current=this.find(item);
	newNode.next=current.next;
	newNode.prev=current;
	current.next=newNode;
}

function remove(item){
	const currNode=this.find(item);
	if(currNode!=null){
		currNode.prev.next=currNode.next;
		currNode.next.prev=currNode.prev;
		currNode.next=null;
		currNode.prev=null;
	}
}


function findLast(){
	let currNode=this.head;
	while( currNode.next!=null){
		currNode=currNode.next;
	}
	return currNode;
}

function display(){
	let currNode=this.head;
	while( !( currNode.next == null) ){
		print(currNode.next.element);
		currNode=currNode.next;
	}
}

function disReverse(){
	let currNode=this.findLast();
	while(currNode.prev!=null){
		print(currNode.element);
		currNode=currNode.prev;
	}
}


const cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
print("-------------------");
cities.remove("Carlisle");
cities.display();
print("-------------------");
cities.disReverse();
