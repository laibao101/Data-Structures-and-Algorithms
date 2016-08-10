function read(file){
	const files=file;
	const xhr=new XMLHttpRequest();

	
	xhr.open("get",files,false);
	xhr.send(null);
	return xhr.responseText.split("\n");
	
}