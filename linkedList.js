
/*
	a simple linkedlist
*/


function Node(element){
	this.element=element;
	this.next=null;
}

function LList(){
	this.head=new Node("head");
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
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
	current.next=newNode;
}

function display(){
	const currNode=this.head;
	while( !( currNode.next == null) ){
		print(currNode.next.element);
		currNode=currNode.next;
	}
}

function LList() {
this.head = new Node("head");
this.find = find;
this.insert = insert;
//this.remove = remove;
this.display = display;
}
function find(item) {
var currNode = this.head;
while (currNode.element != item) {
currNode = currNode.next;
}
return currNode;
}
function insert(newElement, item) {
var newNode = new Node(newElement);
var current = this.find(item);
newNode.next = current.next;
current.next = newNode;
}
function display() {
var currNode = this.head;
while (!(currNode.next == null)) {
	print(currNode.next.element);
currNode = currNode.next;
}
}
// 主程序
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display()