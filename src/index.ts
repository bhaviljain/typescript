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



//functions
type forFun =(a:number,b:number,c?:number)=>void

const add: forFun=(n, m,c)=>{ 
    if(typeof c === "undefined") console.log(n + m);
      else{

         
    console.log(n + m + c)
      }
}
add(1,2)

//spread oeprator
type newArr = (...m:number[]) =>number[]

const func1 :newArr= (...m) =>{
// const func1 :newArr= (...m:number[]) =>{
    console.log(m);
 
return m
}

func1(1,2,3,4,1)



//function with object

interface product{
    name?:string,
    stock?:number,
    price?:number
    readonly id:string
}

// type getData =  (product:{
// name?:string,
// stock?:number,
// price?:number
// })=>void

type getData = (Product:product) =>void


const getDataNew : getData = (products)=>{
    console.log(products);
    // products.id ="1wh2y8why" //cannot be changed coz of read-only
}
const myprod : product = {
    name:"Bhavil",
    stock:12,
    id:"12345678",
    price:12,
    
}
getDataNew(myprod)


const getnew : getData = (prod)=>{
console.log(prod);
}
const mynewprod :product = {
    name:"rocky",
    stock:20,
    id:"890",
    price:88,
}
getnew(mynewprod)

//never type 
const errorHandler  = ()=>{
    throw new Error()    
}


//classes

class Player {
    private h; // js mein ayega coz js mien access specifier nahi hota h, par TS mein error ayega
    w;
    b;
    constructor(h:number,w:number,b:string) {
        this.h = h,
        this.w = w
        this.b = b
    }
    newPlayer(){
   return this.w
    }
    change(){
        return `${this.b.toUpperCase()}`
    }
}
const bhavil = new Player(100,200,"asdfgh")
console.log(bhavil.h);
console.log(bhavil.newPlayer());
console.log(bhavil.change());

class Player1 {
   
    constructor(private h:number,public w:number,b:string) {
       
    }
    
}
const bhavil1 = new Player1(300,400,"asdfgh")
console.log(bhavil1.h);




class Player2{
   
    constructor(private h:number,public w:number,b:string) {
       
    }
    
}
const bhavil2 = new Player1(300,400,"asdfgh")
console.log(bhavil1.h);



class Player3 {
   
    constructor(public h:number,private w:number,protected b:number) {}
    newPlayer(){
   return this.w
    }
}
class Player4 extends Player3{
    constructor(special:boolean,h:number,w:number,b:number){
super(h,w,b)
    }
    getB(){
       return this.b 
    }
   }

   const bhavil3 = new Player4(false,800,200,9000)
console.log(bhavil3.h);
console.log(bhavil3.getB());



//getter and setter function

class Player5 {
  
    constructor(private h:number,publicw:number,protected b:string) {
      
    }
    get getMyh():number{
       return this.h
    }
    set changeMyh(val:number){
        this.h = val
    }
}
const bhavil5 = new Player5(1200,200,"asdfgh")
console.log(bhavil5.getMyh);
bhavil5.changeMyh = 200
console.log(bhavil5.getMyh);





interface Product {
    name:string;
    stock:number;
    getID:()=> string
}

class ProductType implements Product{
    private id: string = String(Math.random() * 1000)
constructor(public name:string,public stock:number){

}
getID (){
    return this.id
}
}

const bhavil6 = new ProductType("macbook",1)
console.log(bhavil6.stock);
console.log(bhavil6.getID());

