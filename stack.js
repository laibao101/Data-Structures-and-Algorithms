

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

// let s=new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// console.log("length: " + s.length() );
// console.log( s.peek() );
// let poped = s.pop();
// console.log("the poped element is : " + poped);
// console.log( s.peek() );
// s.push("Cynthia");
// console.log(s.peek() );  
// s.clear();
// console.log( "length : " + s.length() );
// console.log( s.peek() );
// s.push("Claython");
// console.log(s.peek() )


/*
        1.Number System Conversion

*/

// function mulBase(num,base){
//         const s=new Stack();
//         do{
//                 s.push(num%base);
//                 num=Math.floor( num/=base );
//         }while(num>0);
//         let converted="";
//         while(s.length()>0){
//                 converted+=s.pop();
//         }
//         return converted;
// }


// const num=32;
// const base=2;
// const newNum=mulBase(num,base);
// console.log( num + "converted to base" + base +" is" + newNum);
// const num1=125;
// const base1=8;
// const newNum1=mulBase(num1,base1);
// console.log( num1 + "converted to base" + base1 +" is" + newNum1);



/*
       2.isPalindrome

*/

// function isPalindrome(word){
//         const s=new Stack();
//         for(const wd of word){
//                 s.push(wd);
//         }
//         let rword="";
//         while(s.length()>0){
//                 rword += s.pop()
//         }
//         if(word==rword){
//                 return true;
//         }else{
//                 return false;
//         }
// }

// const word="hello";
// console.log( isPalindrome(word) );
// const word1="racecar";
// console.log( isPalindrome( word1 ) );












