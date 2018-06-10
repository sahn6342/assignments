// 6. Write a JavaScript function to find the lowest value in an array. *
var lowest=(arr)=>{
    let lowest_value=arr[0]
    for(let i=1;i<arr.length;i++){
        if(typeof arr[i]=="number"){
            if(arr[i]<lowest_value){
                lowest_value=arr[i]
            }
        }
    }
    return lowest_value
}
var kk=[5,3,6,8,9,2]
console.log(lowest(kk))