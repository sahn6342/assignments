var is_Array=(arr)=>{
    if(arr instanceof Array){
        return "yes"
    }
    else{
        return "no"
    }
}
console.log(is_Array([1,3,2,3,4]));
console.log(is_Array("sahn"));
console.log(is_Array(43));