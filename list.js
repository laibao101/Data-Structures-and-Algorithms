function List() {
		this.listSize = 0;
		this.pos = 0;		//指针，
		this.dataStore = []; // 初始化一个空数组来保存列表元素
		this.clear = clear;  //清空列表
		this.find = find;	//查找元素
		this.toString = toString;  //输出列表
		this.insert = insert;	//插入元素到指定位置
		this.append = append;	//向列表添加一个元素
		this.remove = remove;	//删除指定元素
		this.front = front;		//将列表指针移动到列表首部
		this.end = end;			//将列表指针移动到列表尾部	
		this.prev = prev;		//将列表指针向前移动一个位置
		this.next = next;		//将列表指针向后移动一个位置
		this.currPos = currPos;  //返回列表指针当前位置
		this.moveTo = moveTo;	//将列表指针移动到指定位置
		this.getElement = getElement; 	//返回当前指针指向的元素
		this.length = length;   //列表中元素的总数
		this.contains = contains;   //判断给定值是否在列表中
	}

	function append(element){
		this.dataStore[this.listSize++]=element;
	}

	function find(element){
		for(let i=0; i<this.listSize; i++){
			if(this.dataStore[i]==element){
				return i;
			}
		}
		return -1;
	}


	function remove(element){
		const elementIndex=this.find(element);
		if(elementIndex==-1){
			return false;
		}else{
			this.dataStore.splice(elementIndex,1);
			this.listSize--;
			return true;
		}
		return false;
	}

	function length () {
		// body...
		return this.listSize;
	}

	function toString(){
		return this.dataStore;
	}


	function front(){
		this.pos=0;
	}

	function end(){
		this.pos=this.listSize-1;
	}

	function prev(){
		if(this.pos>0){
			--this.pos;
		}
	}

	function next(){
		if(this.pos<this.listSize-1){
			++this.pos;
		}
	}

	function currPos(){
		return this.pos;
	}

	function moveTo(position){
		this.pos=position;
	}

	function getElement(element){
		return this.dataStore[this.pos];
	}

	function clear(){
		delete this.dataStore;
		this.dataStore=[];
		this.listSize=0;
		this.pos=0;
	}

	function insert(element,after){
		const insertPos=this.find(after);
		if(insertPos>-1){
			this.dataStore.splice(insertPos,0,element);
			++this.listSize;
			return true;
		}
		return false;
	}

	function contains(element){
		const elementIndex=this.find(element);
		if(elementIndex>-1){
			return true;
		}
		return false;
	}

	function read(file){
		const files=file;
		const xhr=new XMLHttpRequest();

		
		xhr.open("get",files,false);
		xhr.send(null);
		return xhr.responseText.split("\n");
		
	}

	//let movies=read("1.txt");
	function createArr(file){
		const arr=read(file);
		for(let i=0; i<arr.length; i++){
			arr[i]=arr[i].trim();
		}
		return arr;
	}

	//let movieList=new List();
	// for(let i=0; i<movies.length; i++){
	// 	movieList.append(movies[i]);
	// } 

	function displayList(list){
		for(list.front(); list.currPos()<list.length()-1; list.next()){
			if( list.getElement() instanceof Customer ){
				const item=list.getElement();
				console.log(  item["name"] + " , " + item["movie"] );
			}else{
				console.log(list.getElement());
			}
		}
	}



	//--------------------------------------------------------------

	let Customers=new List();

	function Customer(name,movie){
		this.name;
		this.movie=movie;
	}


	function checkOut(name, movie, filmList, customerList) {
		if (movieList.contains(movie)) {
			const c = new Customer(name, movie);
			customerList.append(c);
			filmList.remove(movie);
		}
		else {
			console.log(movie + " is not available.");
		}
	}

	let movies = createArr("1.txt");
	let movieList = new List();
	let customers = new List();
	for (let i = 0; i < movies.length; ++i) {
		movieList.append(movies[i]);
	}
	 console.log("Available movies: \n");
	displayList(movieList);
	checkOut("Jane Doe", "The Godfather", movieList, customers);
	console.log("\nCustomer Rentals: \n");
	displayList(customers);
