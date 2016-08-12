
/*
	a  simple doubly linked list.
*/


function Node(element){
	this.element=element;
	this.next=null;
}

function LList(){
	this.head=new Node("head");
	// this.find=find;
	this.insert=insert;
	// this.remove=remove;
	this.display=display;
	// this.findPrevious=findPrevious;
	head.next=this.head;
}


function display(){
	let currNode=this.head;
	while(currNode.next!=this.head){
		print(currNode.element);
		currNode=currNode.next;
	}
}

function print(item,...values){
	console.log(item,...values);
}

function insert(newElement,item){
	const newNode=new Node(newElement);
	const current=this.find(item);
	newNode.next=current.next;
	current.next=newNode;
}