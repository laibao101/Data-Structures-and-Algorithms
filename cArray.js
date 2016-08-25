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
	}
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
	arr[index1,index2]=arr[index2,index1];
}


const numElements=100;
const myNums=new CArray(numElements);
myNums.setData();
print( myNums.toString() );
