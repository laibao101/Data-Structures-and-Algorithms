

/*
	a graph 
*/

function Graph(v){
	this.vertices=v;    //the top point
	this.deges=0;		//the sides
	this.adj=[];
	for(let i=0; i<this.vertices; i++){  //create a two dimensional array
		this.adj[i]=[];
		// this.adj[i].push("");
	};
	this.addEdge=addEdge;
	this.toString=toString;
	this.showGraph=showGraph;
	this.marked=[];
	for(let i=0; i<this.vertices; i++){
		this.marked[i]=false;
	};
	this.dfs=dfs;
 	this.edgeTo=[];
	this.bfs=bfs;
	this.pathTo=pathTo;
	this.hasPathTo=hasPathTo;
}

function print(val,...str){
	console.log(val,...str);
}


function addEdge(v,w){
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.deges++;
}


function showGraph(){
	for(let i=0; i<this.vertices; i++){
		print(i + "->");
		for(let j=0; j<this.vertices; j++){
			if(this.adj[i][j]!=undefined){
				print( this.adj[i][j] + " ");
			}
		}
	}
}

function dfs(v){
	this.marked[v]=true;
	if(this.adj[v] !=undefined){
		print("Visited vertex : " + v);
	}
	for(const item of this.adj[v]){
		if( !this.marked[item] ){
			this.dfs(item);
		}
	}
}

 function bfs(s){
 	const queue=[];
 	this.marked[s]=true;
 	queue.push(s);
 	while( queue.length > 0 ){
 		const v = queue.shift();
 		if(v!=undefined){
 			print("Visited vertex: " + v);
 		}
 		for(const item of this.adj[v]){
 			if(!this.marked[item]){
 				this.edgeTo[item]=v;
 				this.marked[item]=true;
 				queue.push(item);
 			}
 		}
 	} 
}

function pathTo(v){
	let source=0;
	debugger;
	if(!this.hasPathTo(v)){
		return undefined;
	}
	const path=[];
	debugger;
	for(let i=v; i!=source; i=this.edgeTo[i]){
		debugger;
		path.push(i);
	};
	path.push(source);
	return path;
}


function hasPathTo(v){
	return this.marked[v];
}

const g = new Graph(5);
print(g)
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
// g.showGraph();
// g.dfs(0);
g.bfs(0);
const vertex=2;
const paths=g.pathTo(vertex);
while(paths.length > 0 ){
	if(paths.length>1){
		print(paths.pop() + "-");
	}else{
		print(paths.pop());
	}
}

