var arr=[4,1,5,2,17,22,9,28,4]
var findMax=(a)=>{
    let max_value=a[0];
    let max_second_value=a[0];
    for(i=1;i<a.length;i++){
        if(a[i]>max_value){
            max_value=a[i];
        }
    }
    for(i=1;i<a.length;i++){
        if(a[i]>max_second_value){
            if(a[i]!=max_value){
                max_second_value=a[i];
            }
        }
    }
    console.log(max_second_value);
}
findMax(arr);
