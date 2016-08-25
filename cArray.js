function CArray(numElements){
	this.dataStore=[];
	this.pos=0;
	this.numElements=numElements;
	this.insert=insert;
	this.toString=toString;
	this.clear=clear;
	this.setData=setData;
	this.swap=swap;
	for(let i=0; i<numElements; i++){
		this.dataStore[i]=i;
	};
	this.bubbleSort=bubbleSort;
}

function print(val,...str){
	console.log(val,...str);
}


function setData(){
	for(let [item,index] of this.dataStore.entries()){
		this.dataStore[index]=Math.floor( Math.random() * ( this.numElements +1 ));
	}
}

function clear(){
	for(let item of this.dataStore){
		item=0;
	}
}

function insert(element){
	this.dataStore[this.pos++]=element;
}

function toString(){
	let str='';
	for(const item of this.dataStore){
		str += item + " ";
	}
	return str;
}

function swap(arr,index1,index2){

	[arr[index1],arr[index2]]=[arr[index2],arr[index1]];
}


// const numElements=100;
// const myNums=new CArray(numElements);
// myNums.setData();
// print( myNums.toString() );

function bubbleSort(){
	const numElements=this.dataStore.length;
	for(let outer=numElements; outer>=2; outer--){
		for(let inner=0; inner<=outer-1; ++inner){
			if(this.dataStore[inner] > this.dataStore[inner+1]){
				swap(this.dataStore,inner,inner+1);
			}
		}
		print(this.toString());

	}
}

const numElements=10;
const myNums=new CArray(numElements);
myNums.setData();
print(myNums.toString());
myNums.bubbleSort();
print( myNums.toString() );


