/*
9. var​ fruits = [​"Banana"​, ​"Orange"​, ​"Apple"​, ​"Mango"​]; For the above 
array :  
- Add a new element. 
- Remove any existing from the element. 
- Check if any given variable is an array or not. 
- Change any specific element to another value. 
- Add new element to a specific location (not front or last). 
- Convert the given array to a string.
*/
//var​ fruits = [​"Banana"​, ​"Orange"​, ​"Apple"​, ​"Mango"​]; 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//To add element in array
var add_in_array=(arr,element)=>{
	let length=arr.length;
	arr[length]=element;
}
add_in_array(fruits,"sahn");
console.log(fruits);
//To remove any existing from the element
fruits.splice(1,1);
console.log(fruits);
//To Check if any given variable is an array or not
var checkarray=(arr)=>{
	if(arr instanceof Array){
		console.log("this is array");
	}
	else{
		console.log("this is not an array");
	}
}
checkarray(fruits);
var temp="sahn";
checkarray(temp);
//change value
fruits[2]="watermelon";
console.log(fruits);
//insert at specific index
fruits.splice(2,0,"litchi");
console.log(fruits);
//to convert array into string
fruits=fruits.toString();
console.log(fruits);
