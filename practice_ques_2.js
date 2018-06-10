/*
Create a function that accepts two parameters and returns the result after multiplying 
them. Also Display the result inside console. Hint : ​function​ ​name
​ (​parameter1, parameter2
​ ) {  code to be executed return result }
*/

function mul(first,second){
	if((typeof first==typeof second)&&(typeof first=="number")){
		return first*second;
	}
	else{
		return "type mismatched";
	}
};
console.log(mul(5,4));
console.log(mul("sahn",4));
