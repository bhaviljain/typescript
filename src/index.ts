let a = 9
let b:string="3"

a = 10

type newFun = (a:number,b:number) =>number

const func:newFun= (a,b)=>{{
    let ans = a * b
    console.log(ans);
    return ans
    // this is giving error coz on line 6 we have mention to return number , and console.log() is a void , so we have to take a new variable and return
   
}}
func(2,4)

//Arrays

const arr:number[] = [1,2,3,4,5,6,7]
console.log(arr)

const arr2:Array<string> = ["10","jasxsxs"]
const arr3:Array<string | number> = ["10","jasxsxs",10]

    arr.splice(2,2)
   console.log(arr);

   const arr4:[number,string,number] = [233,"bhab",1]//this is called tuple in ts



   //objects 
type obj ={
    name:string
    gender?:boolean // question lagane se woh fhir nahi declare kiya toh chalta hai , jaise Obj2 mein gender nahi declare kiya
}
const Obj:obj = {
    name:"Bhavil",
    gender:false
}
const Obj1:obj = {
    name:"Bhavil",
    gender:false
}
const Obj2:obj = {
    name:"Bhavil"
}

//interfaces

interface People {
    name:string,
    age:number
}

interface NewPeople extends People{
    height?:number,
    weight?:number,
    func:(n:number,m:number) =>void
}

const greet:NewPeople={
     name:"Bhavil",
     age:10,
     height:20,
     weight:30,
     func:function(n,m){ //method name shud be same which is defined in interface
     console.log(n * m);
     
     }
}
greet?.func(10,20)
const greet2:People={
     name:"Bhavil",
     age:10
}
const greet3:People={
     name:"Bhavil",
     age:10
}

console.log(greet.age);





