


/*40个人，没到3个杀一个，求最后存活的两个人的位置*/

const str="laowang";
const arr=[];
for(let i=0; i<40; i++){
	arr[i]=str+i;
}

const people=new LList();

for(const item of arr){
	people.insert(item);
}


function threeKilled(list,node){
	let currNode=node;
	let count=1;
	while(count<=2){
		currNode=currNode.next;
		count++;
	}
	print(currNode)
	const next=currNode.next;
	list.remove(currNode.element);
	return next;  //返回下一个要开始数到1的人
}	



function getLength(list){
	let currNode=list.head;
	let count=0;
	while(currNode.next.element!="head"){
		currNode=currNode.next;
		count++;
	}
	return count;
}
let pos=people.head.next;
while(getLength(people)!=2){
	while(pos.next!=people.head){
		pos=threeKilled(people,pos);
	}
	pos=people.head.next;
	print(getLength(people));
}

print(people);

//so in the first and the 25th can not be killed

