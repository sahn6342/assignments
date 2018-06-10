var zww= /^[1]+[01]+$/; // regex which accepts binary no string 
var z=1000       // we cannot start with zero it will become octal

var t=zww.exec(z); //


if (z!=undefined && t!=null)

{
    console.log(t);
var temp=t.input
var f=t.input
var g=0;
    console.log(temp);
   ln= temp.toString().length

  
   
    for(i=0;i<ln;i++)
    {
      l=f%10
      
      g= g + (l*(Math.pow(2,i)))
      
      f=Math.floor(f/10)
      
    }
 console.log('binary base 2 is' ,g)
}
else
{
    if (t==null)
    {
        console.log("enter the valid binary digit")     
    }
   
}
