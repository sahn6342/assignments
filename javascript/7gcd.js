function gcd(first,second){
    if((typeof first==typeof second)&&(typeof first=="number")){
        if(first<second){
            for(let temp=1;temp<=first;temp++){
                if((first%temp==0)&&(second%temp==0)){
                    GCD=temp
                }
            }
        }
        else{
            for(let temp=1;temp<=first;temp++){
                if((first%temp==0)&&(second%temp==0)){
                    GCD=temp
                }
            }
        }
        console.log("GCD is: "+GCD)
    }
    else{
        console.log("you just entered a wrong input")
    }
}
gcd(12,144)