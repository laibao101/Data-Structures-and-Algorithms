
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
	this.findPrevious=findPrevious;
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
	let currNode=this.head;
	while( !( currNode.next == null) ){
		print(currNode.next.element);
		currNode=currNode.next;
	}
}


function findPrevious(item){
	let currNode=this.head;
	while(!( currNode.next == null) && (currNode.next.element != item)){
		currNode=currNode.next;
	}
	return currNode;
}

function remove(item){
	const prevNode=this.findPrevious(item);
	if(!(prevNode.next == null)){
		// prevNode.next=this.head.next;
		prevNode.next=prevNode.next.next;
	}
}


// 主程序
// const cities = new LList();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Alma", "Russellville");
// cities.display()




/*
	1.test remove 
*/

 var cities = new LList();
     cities.insert("Conway", "head");
     cities.insert("Russellville", "Conway");
     cities.insert("Carlisle", "Russellville");
     cities.insert("Alma", "Carlisle");
     cities.display();
     cities.remove("Carlisle");
     print("---------------------")
     cities.display();


