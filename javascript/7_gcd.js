// 7. Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
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
gcd(16,5)
gcd(12,144)
gcd(45,"srirt")