var first=(arr,ind)=>{
    // console.log(ind);
    if(ind>0){
        return arr.slice(0,ind);
    }
    else if(typeof ind=="undefined"){
        return arr[0];
    }
    else {
        return [];
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));