// Write a JavaScript function to find the highest value in an array. 
var high=(arr)=>{
    let high_value=arr[0]
    for(let i=1;i<arr.length;i++){
        if(typeof arr[i]=="number"){
            if(arr[i]>high_value){
                high_value=arr[i]
            } 
        }
    }
    return high_value
}
var aa=[3,2,1,4,6]
console.log(high(aa))