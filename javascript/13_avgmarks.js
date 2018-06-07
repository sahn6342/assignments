/*
13. Write a JavaScript program which compute, the average marks of the following
students Then, this average is used to determine the corresponding grade.

Student Name    Marks      The grades are computed as follows ​ :     Range     Grade

David           80                                                    <60        F
Vinoth          77                                                    <70        D
Divya           88                                                    <80        C
Ishitha         95                                                    <90        B
Thomas          68                                                    <100       A
*/
function stu(name,marks){
    this.name=name
    this.marks=marks
    this.grade=""
    this.getName=function(){
        return this.name
    }
    this.getMarks=function(){
        return this.marks
    }
    this.getGrade=()=>{
        if(this.marks<=60){
            this.grade="F"
        }
        else if(this.marks<=70){
            this.grade="D"
        }
        else if(this.marks<=80){
            this.grade="C"
        }
        else if(this.marks<=90){
            this.grade="B"
        }
        else if(this.marks<=100){
            this.grade="A"
        }
        return this.grade
    }
}
var first=new stu("David",80)
var second=new stu("Vinoth",77)
var third=new stu("Divya",88)
var fourth=new stu("Ishitha",95)
var fifth=new stu("Thomas",68)
console.log("Grade of "+first.getName()+" is "+first.getGrade()+" and marks is "+first.getMarks())
console.log("Grade of "+second.getName()+" is "+second.getGrade()+" and marks is "+second.getMarks())
console.log("Grade of "+third.getName()+" is "+third.getGrade()+" and marks is "+third.getMarks())
console.log("Grade of "+fourth.getName()+" is "+fourth.getGrade()+" and marks is "+fourth.getMarks())
console.log("Grade of "+fifth.getName()+" is "+fifth.getGrade()+" and marks is "+fifth.getMarks())