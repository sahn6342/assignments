var af = (num) => {
    var flag =0
    var counter = 0
    while (num>1)
{  
    num = num/2  
    counter = counter +1
   if (num==1)
   {
       flag=1
   } 
}
if (flag ==1)
{
console.log("number is power of 2")
console.log("is of power " + (counter))
}
else 
console.log("number is not power of 2")
}
af(8)