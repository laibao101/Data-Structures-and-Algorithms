function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	//this.get = get;
}

function put(data) {
	const pos = this.simpleHash(data);
	this.table[pos] = data;
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
	var n = 0;
	print(this.table)
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i][0] != undefined) {
			print(i + ": " + this.table[i]);
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



var hTable = new HashTable();
hTable.buildChains = function() {
	for (var i = 0; i < this.table.length; ++i) {
		this.table[i] = new Array();
	}
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
	"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
}
hTable.showDistro()