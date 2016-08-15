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
	let hash=-1;
	hash=this.simpleHash(key);
	if(hase>-1){
		for(const [index,item] of this.table.entries()){
			if(item==key){
				return this.values[index];
			}
		}
	}
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
	for (let i = 0; i < this.table.length && ( typeof this.table[i]!= "undefined" ); ++i) {
		const pos=this.table[i]
		print(i + ": " + this.values[pos]);
	}
}

let hTable = new HashTable();

let someNames = ["David", "Jennifer", "Donnie", "Raymond",
	"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];



for(const [index,item] of someNames.entries()){
	hTable.put(index,item)
}


hTable.showDistro()




