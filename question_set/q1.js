var str1="zenways"
var str2="Zenways"
var check =(str,loc)=>{
    if(str[loc]==str2[loc].toUpperCase()){
        console.log("yes")
    }
    else{
        console.log("No")
    }
}
check(str1,0)
check(str2,0)