var email="sparashar405@gmail.com"
var email_spil=email.split("@");
var validate=(a,b)=>{
    if(b=="sahn"){
        return email;
    }
    else{
        a[0]="********";
        a=a[0]+"@"+a[1];
        return a;
    }
}
console.log(validate(email_spil,"sahn"));
console.log(validate(email_spil,"merlin"));