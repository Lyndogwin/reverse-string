// Functions
function reverseString(){
	var str = document.getElementsByName('str')[0].value
	var reverse = "";
	
	for(var i = str.length - 1; i > -1; i--){
		reverse += str[i];
		console.log("Index Changed");
	}

	// tested: fine
	document.getElementsByName('output')[0].value = reverse;
}

function sortArray(){

}