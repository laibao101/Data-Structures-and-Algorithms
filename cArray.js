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
	this.selectionSort=selectionSort;
	this.insertionSort=insertionSort;
	this.shellSort=shellSort;
	this.gaps=[3,2,1];
	this.setGaps=setGaps;
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
		// print(this.toString());

	}
}


function selectionSort(){
	let min=0;
	for(let outer=0; outer< this.dataStore.length-1; outer++){
		min=outer;
		for(let inner=outer+1; inner<this.dataStore.length; inner++){
			if(this.dataStore[min]>this.dataStore[inner]){
				min=inner;
			}
		}
		swap(this.dataStore, outer, min);
	}
}


function insertionSort(){
	let min=0,inner;
	for(let outer=0; outer<this.dataStore.length; outer++){
		min=outer;
		for( inner=outer;this.dataStore[inner]<this.dataStore[inner-1] && inner>0; inner--){
			this.dataStore[inner]=this.dataStore[inner-1];
		}
		this.dataStore[inner]=this.dataStore[min];
	}
}

function shellSort() {
	for(let g=0; g<this.gaps.length; g++){
		debugger;
		for(let i=this.gaps[g]; i<this.dataStore.length; i++){
			let temp=this.dataStore[i],j=0;
			debugger;
			for( j=i; j>=this.gaps[g]&&this.dataStore[j-this.gaps[g]] >temp; j-=this.gaps[g]){
				this.dataStore[j]=this.dataStore[j-this.gaps[g]];
				debugger;
			}
			this.dataStore[j]=temp;
		}
	}
}



function setGaps(arr){
	this.gaps=arr;
}

// const numElements=100000000;  //1亿级别的数据量，只有插入排序还能在chrome上运行，耗时2000ms左右
// const numElements=100000;  //1亿级别的数据量，只有插入排序还能在chrome上运行，耗时2000ms左右
// const myNums=new CArray(numElements);
// myNums.setData();
// print(myNums.toString());
console.time("time1");
// myNums.bubbleSort();
console.timeEnd("time1");
// print( myNums.toString() );

print("------------")

// myNums.setData();
// print(myNums.toString());
console.time("time1");
// myNums.selectionSort();
console.timeEnd("time1");
// print(myNums.toString());

print("------------")

// myNums.setData();
// print(myNums.toString());
console.time("time1");
// myNums.insertionSort();
console.timeEnd("time1");
// print(myNums.toString());

print("------------")

// myNums.setData();
// print(myNums.toString());
console.time("time1");
// myNums.shellSort();
console.timeEnd("time1");
// print(myNums.toString());
const numElements=8;
const myNums=new CArray(numElements);
const arr=[61,85,19,88,68,8,70,29];
myNums.dataStore=arr;

myNums.shellSort();
print(myNums.toString());
print(myNums)
