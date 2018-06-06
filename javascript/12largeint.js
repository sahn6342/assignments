function large(first,second){
    if((typeof first==typeof second)&&(typeof first=="number")){
        if(first<second){
            console.log("largest number is "+second)
        }
        else if(first>second){
            console.log("largest number is "+first)
        }
        else{
            console.log("both number are same")
        }
    }
    else{
        console.log("you used a wrong input type")
    }
}
large(15,33)
large(23,15)
large(44,"hhh")