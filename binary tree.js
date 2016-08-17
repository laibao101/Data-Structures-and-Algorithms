

/*
	a binary tree
*/


function Node(element,lchild,rchild){
	this.element=element;
	this.lchild=lchild;
	this.rchild=rchild;
	this.show=show
}

function show(){
	return this.element;
}

function BST(){
	this.root=null;
	this.insert=insert;
	this.inOrder=inOrder;
	this.preOrder=preOrder;
	this.postOrder=postOrder;
	this.getMin=getMin;
	this.getMax=getMax;
	this.find=find;
	this.get=get;
	this.remove=remove;
	this.hasLchild=hasLchild;
	this.hasRchild=hasRchild;
	this.isLeaves=isLeaves;
	this.allNode=allNode;
	this.count=0;
	this.inDeep=inDeep;
	this.nodeStack=[];
	this.countWords=countWords;
}

function print(val,...str){
	console.log(val,...str);
}

function insert(element){
	this.count++;
	const n=new Node(element,null,null);
	if(this.root==null){
		this.root=n;
	}else{
		let current=this.root;
		let parent;
		while(1){
			parent=current;
			if(element<=current.element){
				current=current.lchild;
				if(current==null){
					parent.lchild=n;
					break
				}
			}else{
				current=current.rchild;
				if(current==null){
					parent.rchild=n;
					break;
				}
			}

		}
	}
}

function inOrder(node=this.root){
	if(!(node==null)){
		inOrder(node.lchild);
		print(node.show()+ " ");
		inOrder(node.rchild);
	}
}

function preOrder(node=this.root){
	if( node!=null ){
		print(node.show() + " ");
		preOrder( node.lchild );
		preOrder( node.rchild );
	}
}

function postOrder(node=this.root){
	if( node!=null ){
		postOrder( node.lchild );
		postOrder( node.rchild );
		print( node.show() + " " )
	}
}


function getMin(){
	return this.get("lchild");
}

function getMax(){
	return this.get("rchild");
}

function get(childDir){
	let parent=this.root;
	while(parent[childDir] != null){
		parent=parent[childDir];
	}
	return parent.element;
}


function find(element){
	let parent=this.root;
	while(parent!=null){
		if(element==parent.element){
			return parent;
		}else if(element<parent.element){
			parent=parent.lchild;
		}else{
			parent=parent.rchild;
		}
	}
	return null;
}

function remove(element){
	if( this.find( element) == null) return false;
	this.count--;
	let current;
	let parent=this.root;
	if(element == parent.element){
	//the element is the root

	}else if(element < parent.element){
	//the element is on the left of the root
		current=parent.lchild;
		while(current != null){
			if(current.element==element){
				//the node is the lchild of its parent
				if(  parent.lchild!=null && parent.lchild.element == element){
					// the node we want to remove is leaves
					if( this.isLeaves( this.find(element) ) ){
						parent.lchild=null;
						return true;
					}else{
					//the node is not leaves
						if( this.hasRchild(current) ){
						//the node has a rchild
							parent.lchild=current.rchild;
							current.rchild.lchild=current.lchild;
							current.lchild=null;
							current.rchild=null;
							return true;
						}else{
						//the node has a lchild
							parent.lchild=current.lchild;
							current.lchild=null;
							return true;
						}
					}
				}else{
				//the node is rchild of its parent
					//the node is leaves
					if( this.isLeaves( this.find( element ) ) ){
						parent.rchild=null;
						return true;
					}else{
					//the node is not leaves
						if( this.hasRchild(current) ){
							parent.rchild=current.rchild;
							current.rchild.lchild=current.lchild;
							current.rchild=null;
							current.lchild=null;
							return true;
						}else{

						}

					}
				}
				
			}else if(element < current.element ){
				parent=current
				current=current.lchild;
			}else{
				parent=current;
				current=current.rchild;
			}
		}
	}else{
	//the element is on the right of the root
		current=parent.rchild;
		while(current!=null){
			if(current.element==element){
			//current element is the element we want to remove
				if(parent.lchild!=null && parent.lchild.element==element){
				//the element we want to remove is the lchild
					if( this.isLeaves( this.find( element ) ) ){
					//the node we want to remove is leaves
						parent.lchild=null;
						return true;
					}else{
					//the node we want to remove is not leaves
						if( this.hasRchild(current) ){
						//the node has a rchild
							parent.lchild=current.rchild;
							current.rchild.lchild=current.lchild;
							current.rchild=null;
							current.lchild=null;
							return true;
						}else{
						//the node has a lchild
							parent.lchild=current.lchild;
							current.lchild=null;
							return true;
						}
					}
				}else{
				//the element we want to remove is the rchild
					if( this.isLeaves( this.find(element) ) ){
					//the node we want to remove is leaves
						parent.rchild=null;
						return true;
					}else{
					//the node we want to remove is not leaves
						if( this.hasRchild(current) ){
						//the node has a rchild
							parent.rchild=current.rchild;
							current.rchild.lchild=current.lchild;
							current.rchild=null;
							current.lchild=null;
							return true;
						}else{
						//the node has a lchild
							parent.rchild=current.lchild;
							current.lchild=null;
							return true;
						}
					}
				}
			}
			else if (element<current.element) {
			//current element is bigger than the element we want to remove
				parent=current;
				current=current.lchild;
			}else{
			//current element is smaller than the element we want to remove
				parent=current;
				current=current.rchild
			}

		}
	}
		
}

function hasLchild(node){
	return node.lchild != null ? true : false;
}

function hasRchild(node){
	return node.rchild != null ? true : false;
}

function isLeaves(node){
	return this.hasLchild(node)==false && this.hasRchild(node)==false ? true : false;
}

function allNode(){
	return this.count;
}

function inDeep(node=this.root){
	if(node!=null){
		this.nodeStack.push(node);
		this.inDeep(node.lchild);
		this.inDeep(node.rchild);
	}
	return this.nodeStack;
}


function countWords(word){
	const arr=this.inDeep();
	let count=0;
	for(const item of arr){
		if(item.element==word){
			count++;
		}
	}
	return count;
}


const nums = new BST();
nums.insert(30);
nums.insert(45);
nums.insert(16);
nums.insert(23);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(24);
nums.insert(25);
nums.insert(32);

// print("Inorder traversal: ");
// nums.inOrder();
// print("Preorder traversal: ");
// nums.preOrder();

// print("Posteorder traversal: ");
// nums.postOrder();

print("the min is :", nums.getMin());
print("the min is :", nums.getMax());

print("the node include 3 is :", nums.find(3))
print("the node 23 is leaves:", nums.isLeaves( nums.find(23) ))

// print( nums.remove( 45) );
// print( nums.remove( 4) );

print("Inorder traversal: ");
nums.inOrder();

print("all node :  ",nums.inDeep())

const arr=read("word.txt");
for(const item of arr){
	nums.insert(item.trim());
}

print(nums.countWords("pen"))