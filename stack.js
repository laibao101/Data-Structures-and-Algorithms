

/*
	a simple stack with some method and some atrribute
	1.stack init        	initialize a stack.
	2.push      		push some elements into the stack.Meanwhile,the top pointer increases.
	3.peek			return the element the top pointer pointed. 
	4.pop			return the element the top pointer pointed,the top pointer decreases.
	5.clear			get the stack clear and put the top pointer top 0.
	6.length		return the total number of elements in the stack.
*/ 




function Stack() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.clear = clear;
        this.length = length;
}
function push(element) {
        this.dataStore[this.top++] = element;
}
function peek() {
        return this.dataStore[this.top-1];
   
}
function pop() {
        return this.dataStore[--this.top];
}
function clear() {
        this.top = 0;
}
function length() {
        return this.top;
}

let s=new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length() );
console.log( s.peek() );
let poped = s.pop();
console.log("the poped element is : " + poped);
console.log( s.peek() );
s.push("Cynthia");
console.log(s.peek() );  
s.clear();
console.log( "length : " + s.length() );
console.log( s.peek() );
s.push("Claython");
console.log(s.peek() )