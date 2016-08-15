function HashTable() {
	this.table =  new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
	this.values=[];
}

function put(key,data) {
	let pos = this.simpleHash(data);
	if (typeof this.values[pos] == "undefined") {
		this.table[key] = pos;
		this.values[pos]=data;
	}
	else {
		while (typeof this.values[pos] != "undefined") {
			++pos;
		}
		this.table[key] = pos;
		this.values[pos]=data;
	}
}


function get(key){
	// let hash=-1;
	// if(hash>-1){
		const keys=Object.keys(this.table);
		for(const [index,item] of keys.entries()){
			if(item==key){
				hash= this.table[item];
				return this.values[hash];
			}
		}
		
	// }
	return "undefined";
}


function simpleHash(string) {
	const H = 37;
	let total = 0;
	for (let i = 0; i < string.length; ++i) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length - 1;
	}
	return Number.parseInt(total);
}

function print(item, ...values) {
	console.log(item, ...values);
}

function showDistro() {
	for (let i = 0; i < this.table.length && ( typeof Object.keys(this.table)[i]!= "undefined" ); ++i) {
		const tablePos=Object.keys(this.table)[i];
		const pos=this.table[tablePos];
		print(tablePos + ": " + this.values[pos]);
	}
}

// let hTable = new HashTable();

// let someNames = ["David", "Jennifer", "Donnie", "Raymond",
// 	"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
// ];



// for(const [index,item] of someNames.entries()){
// 	hTable.put(index,item)
// }


// hTable.showDistro()

// print(hTable.get("David"))


/*
	1.crate a dictionary to save words ang the interprets of them , to program must have two parts. the first one is 
	to read a group words and the interprets ,put the into the table. The second one is show the interprets when 
	user type a word into.
*/


const hTable=new HashTable();
const words=read("words.txt");
// print(words);
for(let [index,item] of words.entries()){
	words[index]=item.split("、")[1].split(":");
}
// print(words)

for(const [index,item] of words.entries()){
	hTable.put(item[0],item[1]);
}

// print(hTable);
// hTable.showDistro();

// print(hTable.get("organized"))

window.onload=function(){
	const box=document.querySelector("#box");
	const oInp=document.querySelector("input");
	oInp.onkeyup=function(){
		const val=this.value;
		const res=hTable.get(val);
		if( res !="undefined"){
			box.innerHTML=res;
		}
	}
}




