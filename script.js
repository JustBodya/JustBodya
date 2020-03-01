 let firstNum = 0;
 let secondNum = 0;
 let opCode = '';  

function addDigit(num){ 

	if(document.getElementById('k').value<1e8){

		if(document.getElementById('k').value == 0){
			document.getElementById('k').value = num;
		} else {
			document.getElementById('k').value += num;
		}
	}
}	
function clear(){
	document.getElementById('k').value = 0;
}
function operation(op){
    firstNum = parseInt(document.getElementById('k').value);
	secondNum = 0;
	opCode = op;
	clear();
}
function reset(){
	firstNum = 0;
	secondNum = 0;
	opCode = null;
	clear();


}
function result(){
	let result = 0;
	secondNum = parseInt(document.getElementById('k').value);

	switch(opCode){
		case '/':
		result = firstNum/secondNum
		    

			break;
		case '*':
		result = firstNum*secondNum
		


			break;
		case '+':
		result = firstNum+secondNum
			
		
			break;
		case '-': 
		result = firstNum-secondNum
			

		
			break;		
	}








	document.getElementById('k').value = result;
}