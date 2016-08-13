
/*
	a  simple circular linked list.
	based on linkedList, add some methods and some attributes.
	1.change insert, remove,display methods
	2.make the head.next = this.head
	3.advance 			this method makes node to some place front
	4.back				this method makes node to some place behind
	5.findLast			this method returns the back node of the list
	6.findNext 			this method returns the next node of current node 
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
	this.head.next=this.head;
	this.advance=advance;
	this.findLast=findLast;
	this.findNext=findNext;
	this.back=back;
	this.show=show;
}


function display(){
	let currNode=this.head.next;
	while(currNode.next!=this.head.next){
		print(currNode.element);
		currNode=currNode.next;
	}
}

function print(item, ...values) {
	console.log(item, ...values);
}

function find(item){
	let currNode=this.head;
	while( currNode.next!=this.head && currNode.element != item){
		currNode=currNode.next;
	}
	if(currNode.element!=item){
		return false;
	}
	return currNode;
}

function insert(newElement){
	const newNode=new Node(newElement);
	const current=this.findLast();
	newNode.next=current.next;
	current.next=newNode;
}


function findPrevious(item){
	let currNode=this.head;
	while( currNode.next.element != item && currNode.next !=this.head){
		currNode=currNode.next;
	}
	return currNode;
}

function remove(item){
	const currNode=this.find(item);
	const prev=this.findPrevious(item);
	if(currNode!=this.head){
		prev.next=currNode.next;
		currNode.next=null;
	}
};


function findLast(){
	let currNode=this.head;
	while( currNode.next!= this.head){
		currNode=currNode.next;
	}
	return currNode;
}

function advance(item,n){
	let currNode=this.find(item);
	const isMove=currNode;
	let prev=this.findPrevious(item);
	if(prev==this.head){
		return false;
	}
	prev.next=currNode.next;
	while(n!=-1){
		currNode=prev;
		prev=this.findPrevious(currNode.element);
		n--;
	}
	isMove.next=currNode.next;
	currNode.next=isMove;
}


function findNext(item){
	
}

function back(item,n){
	let currNode=this.find(item);
	const isMove=currNode;
	let prev=this.findPrevious(item);

	let back=currNode.next;

	prev.next=currNode.next;

	while(n!=0){
		back=back.next;
		n--;
	}
	prev=this.findPrevious(back.element);
	prev.next=isMove;
	isMove.next=back;

}

function show(item){
	return this.find("item").element;
}

const cities = new LList();
cities.insert("Conway");
cities.insert("Russellville");
// print(cities);
cities.insert("Xiaowang");
cities.insert("Laowang");
cities.display();

cities.advance("Laowang",2);
print("----------");
// print(cities);
cities.display();

print("--------------");
cities.back("Laowang",2);
cities.display();


print("-----------");
cities.advance("Laowang",2);
cities.display();