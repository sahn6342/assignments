// 8. Write a JavaScript function to test if a number is a power of 2.
function powerof2(num){
    if(typeof num== "number"){
        if(num%2==0){
            console.log("yes "+num+" is power of 2")
        }
        else{
            console.log("No,"+num+" is not power of 2")
        }
    }
    else{
        console.log("you entered a wrong input type")
    }
}
powerof2(8)
powerof2(5)
powerof2("sahn")