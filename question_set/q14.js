var arr=[3,2,1,2,3,4,5,45]
var add=(temp)=>{
    let sum=temp[0]
    for(let i=1;i<temp.length;i++){
        sum=sum+temp[i];
    }
    console.log("sum is",sum);
}
var prod=(temp)=>{
    let mul=temp[0]
    for(let i=1;i<temp.length;i++){
        mul=mul*temp[i];
    }
    console.log("product is",mul);
}
add(arr);
prod(arr);