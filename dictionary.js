function Dictionary() {
	this.datastore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function print(item, ...values) {
	console.log(item, ...values);
}

function add(key, value) {
	this.datastore[key] = value;
	// this.datastore.push(key,value);
}

function find(key) {
	return this.datastore[key];
}


function remove(key) {
	delete this.datastore[key];
}

function showAll() {
	for (const key of Object.keys(this.datastore).sort()) {
		print(key + " -> " + this.datastore[key]);
	}
}


function count() {
	let n = 0;
	for (const key in this.datastore) {
		n++;
	}
	return n;
}



function clear() {
	delete this.datastore;
	this.datastore = new Array();
}



const pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
print("David's extension: " + pbook.find("David"));
print(pbook);
// pbook.remove("David");
pbook.showAll();
print(pbook.count());
// pbook.showAll();

const str = "laowang";
let i = 0;
while (i < 10) {
	document.write("<p>" + str + i + " : " + "000000" + i + "</p>");
	i++;
}

const contacts = new Dictionary();


contacts.read = function(file) {
	const readContacts = read(file);
	for (const [index, key] of readContacts.entries()) {
		readContacts[index] = key.split(":");
		contacts.add(readContacts[index][0].trim(), readContacts[index][1].trim());
	}

}

contacts.showSingle=function(str){
	contacts.find(str);
	print("find the item in contacts: ");
	print(str +" -> "+ contacts.datastore[str]);
}
contacts.read("contacts.txt");
contacts.showSingle("laowang7");

contacts.showAll();