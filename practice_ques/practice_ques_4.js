/*
Create a variable  var​ str = ​"Please locate where 'locate' occurs!"​; Display(in 
console) the position of first occurrence of the   word “Where” and index of the last 
occurrence of “locate”.
*/

var str="Please locate where 'locate' occurs";
var findInString=(tempStr,toLocate)=>{
	return tempStr.indexOf(toLocate);
};
var indexOfWhere=findInString(str,"where");
var indexOfLocate=findInString(str,"locate");
console.log("the main string is '"+str+"'");
console.log("the position of first occurrence of the   word 'Where' is "+indexOfWhere);
console.log("the position of first occurrence of the   word 'locate' is "+indexOfLocate);

