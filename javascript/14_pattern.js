/*
14. Write a JavaScript program to construct the following pattern, using a nested for loop.
*
* *
* * *
* * * *
* * * * *
*/
function pattern(x){
    for(let i=0;i<x;i++){
        let temp=""
        for(let j=0;j<x;j++){
            if((i>j)||(i==j)){
                temp=temp+"*"
            }
            
        }
        console.log(temp)
    }
}
pattern(3)
pattern(6)
pattern(9)