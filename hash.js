function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	//this.get = get;
}

function put( data) {
	const pos = this.simpleHash(data);
	let index=0;
	if (typeof this.table[pos][index] == "undefined") {
		this.table[pos][index] = data;
	}
	else {
		while (typeof this.table[pos][index] != "undefined") {
			++index;
		}
		this.table[pos][index + 1] = data;
	}
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
	for (let i = 0; i < this.table.length; ++i) {
		for(let j=0; j<this.table[i].length; j++){
			if (typeof this.table[i][j] != "undefined") {
				print(i + ": " + this.table[i][j]);
			}
		}
	}
}

// const someNames = ["David", "Jennifer", "Donnie", "Raymond",
// 	"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
// ];
// const hTable = new HashTable();
// for (const item of someNames) {
// 	hTable.put(item);
// }
// print(hTable)
// hTable.showDistro();



/**
	1.to save students` score 
*/

function getRandomInt(max, min) {
	return Math.floor(Math.random() * Math.abs(max - min + 1)) + min;
}

function genStuData(arr) {
	const len = arr.length
	for (let i = 0; i < len; ++i) {
		let num = "";
		for (let j = 1; j <= 9; ++j) {
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		// debugger;
		arr.push(num);
	}

}



// const numStudents = 10;
// const arrSize = 97;
// const idLen = 9;
// const students = new Array(numStudents);
// genStuData(students);
// print("Student data: \n");
// for (const item of Object.keys(students)) {
// 	print(students[item].substring(0, 8) + " " +
// 		students[item].substring(8));
// }
// print("\n\nData distribution: \n");
// const hTable = new HashTable();
// for (const item of Object.keys(students)) {

// 	hTable.put(students[item]);
// }
// print(hTable)
// hTable.showDistro();



let hTable = new HashTable();
hTable.buildChains = function() {
	for (let i = 0; i < this.table.length; ++i) {
		this.table[i] = new Array();
	}
}
hTable.buildChains();
let someNames = ["David", "Jennifer", "Donnie", "Raymond",
	"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];



for(const item of someNames){
	hTable.put(item)
}

hTable.showDistro()