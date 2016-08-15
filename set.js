
/*
	a set
*/

function Set(){
	this.dataStore=[];
	this.add=add;
	this.remove=remove;
	this.size=size;
	this.union=union;
	// this.intersect=intersect;
	this.subset=subset;
	this.difference=difference;
	this.show=show;
	this.contains=contains;
}



function add(data){
	if(this.dataStore.indexOf(data)<0){
		this.dataStore.push(data);
		return true;
	}else{
		return false;
	}
}

function print(val,...str){
	console.log(val,...str);
}


function remove(data){
	const pos=this.dataStore.indexOf(data);
	if(pos>-1){
		this.dataStore.splice(pos,1);
		return true;
	}else{
		return false;
	}
}

function show(){
	return this.dataStore;
}


// const names = new Set();
// names.add("David");
// names.add("Jennifer");
// names.add("Cynthia");
// names.add("Mike");
// names.add("Raymond");
// if (names.add("Mike")) {
// 	print("Mike added")
// }else {
// 	print("Can't add Mike, must already be in set");
// }

// print(names.show());

// let removed = "Mike";

// if (names.remove(removed)) {
// 	print(removed + " removed.");
// }else {
// 	print(removed + " not removed.");
// }

// names.add("Clayton");
// print(names.show());
// removed = "Alisa";
// if (names.remove("Mike")) {
// 	print(removed + " removed.");
// }else {	
// 	print(removed + " not removed.");
// }


function contains(data){
	if(this.dataStore.indexOf(data)>-1){
		return true;
	}else{
		return false;
	}
}

function union(set){
	const tempSet=new Set();
	for(const item of this.dataStore){
		tempSet.add(item);
	}
	for(const item of set.dataStore){
		if(!tempSet.contains(item)){
			tempSet.dataStore.push(item)
		}
	}
	return tempSet;

}


function size(){
	return this.dataStore.length;
}

function subset(set){
	if(this.size()>set.size()){
		return false
	}else{
		for(const item of this.dataStore){
			if(!set.contains(item)){
				return false;
			}
		}
	}
	return true;

}

function difference(set){
	const tempSet=new Set();
	for(const item of this.dataStore){
		if(!set.contains(item)){
			tempSet.add(item)
		}
	}
	return tempSet;
}

// const cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// const dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Jonathan");
// let it = new Set();
// it = cis.union(dmp);
// print(it.show());

// const it = new Set();
// it.add("Cynthia");
// it.add("Clayton");
// it.add("Jennifer");
// it.add("Danny");
// it.add("Jonathan");
// it.add("Terrill");
// it.add("Raymond");
// it.add("Mike");
// const dmp = new Set();
// dmp.add("Cynthia");
// dmp.add("Raymond");
// dmp.add("Jonathan");
// if (dmp.subset(it)) {
// 	print("DMP is a subset of IT.");
// }
// else {
// 	print("DMP is not a subset of IT.");
// }

const cis = new Set();
const it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
let diff = new Set();
diff = cis.difference(it);
print("[" + cis.show() + "] difference [" + it.show()+ "] -> [" + diff.show() + "]");





