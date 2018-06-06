function capfirst(str){
    if(typeof str=="string"){
        let temp=str.split("")
        let tem=str.length
        console.log("old string: '"+str+"'")
        str=""
        temp[0]=temp[0].toUpperCase()
        for(let i=0;i<tem;i++){
            str=str+temp[i]
        }
        console.log("new string: '"+str+"'")
    }
    else{
        console.log("you just entered a wrong input type")
    }
}
capfirst("sahn")
capfirst("rhashank")
capfirst("tha par")
capfirst(45)