/*40个人，没到3个杀一个，求最后存活的两个人的位置*/

const str = "laowang";
const arr = [];
for (let i = 0; i < 40; i++) {
	arr[i] = str + i;
}

const people = new LList();

for (const item of arr) {
	people.insert(item);
}


function threeKilled(list, node) {
	let currNode = node;
	let count = 1;
	while (count < 3) {
		if (currNode != list.head) {
			count++;
		}
		currNode = currNode.next;


	}
	print(currNode)
	const next = currNode.next;
	list.remove(currNode.element);
	return next; //返回下一个要开始数到1的人
}



function getLength(list) {
	let currNode = list.head;
	let count = 0;
	while (currNode.next.element != "head") {
		currNode = currNode.next;
		count++;
	}
	return count;
}
let pos = people.head;
while (getLength(people) != 2) {
	pos = threeKilled(people, pos);

}

print(people);

//so in the first and the 32th can not be killed