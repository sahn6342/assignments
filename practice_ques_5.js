/*
5. var​ str = ​"Please locate where 'locate' occurs!"​; Extract the word “locate” from the above string.
*/
var str="Please locate where 'locate' occures!";  
var indexOfsubstring = str.indexOf("locate");   //to find start index of substring
var lengthOfsubstring = "locate".length;	
var endOfsubstring = indexOfsubstring + lengthOfsubstring; 	//to find end index of substring
console.log(str.substring(indexOfsubstring, endOfsubstring)); //to extract substring
