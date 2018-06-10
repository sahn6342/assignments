/*
Create two string variables concatenate ( Add ) them and display the length of the 
result string. Hint : Use ​.length​  method
*/

function conc(first,second){
	if((typeof first==typeof second)&&(typeof first=="string")){
		let temp=  first+second;
		console.log(temp.length);
	}
	else{
		console.log("type mismatched");
	}
}
conc("sahn","parashar");
conc("sahn",54);
