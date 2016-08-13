function Dictionary() {
	this.datastore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear=clear;
}

function print(item, ...values) {
	console.log(item, ...values);
}

function add(key, value) {
	this.datastore[key] = value;
}

function find(key) {
	return this.datastore[key];
}


function remove(key) {
	delete this.datastore[key];
}

function showAll() {
	print(this.datastore)
	for (let item in this.datastore) {
		print(item + " -> " + this.datastore[item]);
	}
}


function count() {
	var n = 0;
	for (var key in Object.keys(this.datastore)) {
		++n;
	}
	return n;
}




function clear() {
	for each(var key in Object.keys(this.datastore)) {
		delete this.datastore[key];
	}
}

var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
print("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();