// 3. Write a JavaScript function to generate a random integer.
function rand(x){
    for(let i=0;i<x;i++){
        let temp=parseInt(Math.random()*10000)
        console.log(temp)
    }
}
rand(5)