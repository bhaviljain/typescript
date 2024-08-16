"use strict";
let a = 9;
let b = "3";
a = 10;
const func = (a, b) => {
    {
        let ans = a * b;
        console.log(ans);
        return ans;
        // this is giving error coz on line 6 we have mention to return number , and console.log() is a void , so we have to take a new variable and return
    }
};
func(2, 4);
//Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
const arr2 = ["10", "jasxsxs"];
const arr3 = ["10", "jasxsxs", 10];
arr.splice(2, 2);
console.log(arr);
const arr4 = [233, "bhab", 1]; //this is called tuple in ts
const Obj = {
    name: "Bhavil",
    gender: false
};
const Obj1 = {
    name: "Bhavil",
    gender: false
};
const Obj2 = {
    name: "Bhavil"
};
const greet = {
    name: "Bhavil",
    age: 10,
    height: 20,
    weight: 30,
    func: function (n, m) {
        console.log(n * m);
    }
};
greet === null || greet === void 0 ? void 0 : greet.func(10, 20);
const greet2 = {
    name: "Bhavil",
    age: 10
};
const greet3 = {
    name: "Bhavil",
    age: 10
};
console.log(greet.age);
const add = (n, m, c) => {
    if (typeof c === "undefined")
        console.log(n + m);
    else {
        console.log(n + m + c);
    }
};
add(1, 2);
const func1 = (...m) => {
    // const func1 :newArr= (...m:number[]) =>{
    console.log(m);
    return m;
};
func1(1, 2, 3, 4, 1);
const getDataNew = (products) => {
    console.log(products);
    // products.id ="1wh2y8why" //cannot be changed coz of read-only
};
const myprod = {
    name: "Bhavil",
    stock: 12,
    id: "12345678",
    price: 12,
};
getDataNew(myprod);
const getnew = (prod) => {
    console.log(prod);
};
const mynewprod = {
    name: "rocky",
    stock: 20,
    id: "890",
    price: 88,
};
getnew(mynewprod);
//never type 
const errorHandler = () => {
    throw new Error();
};
//classes
class Player {
    constructor(h, w, b) {
        this.h = h,
            this.w = w;
        this.b = b;
    }
    newPlayer() {
        return this.w;
    }
    change() {
        return `${this.b.toUpperCase()}`;
    }
}
const bhavil = new Player(100, 200, "asdfgh");
console.log(bhavil.h);
console.log(bhavil.newPlayer());
console.log(bhavil.change());
class Player1 {
    constructor(h, w, b) {
        this.h = h;
        this.w = w;
    }
}
const bhavil1 = new Player1(300, 400, "asdfgh");
console.log(bhavil1.h);
class Player2 {
    constructor(h, w, b) {
        this.h = h;
        this.w = w;
    }
}
const bhavil2 = new Player1(300, 400, "asdfgh");
console.log(bhavil1.h);
class Player3 {
    constructor(h, w, b) {
        this.h = h;
        this.w = w;
        this.b = b;
    }
    newPlayer() {
        return this.w;
    }
}
class Player4 extends Player3 {
    constructor(special, h, w, b) {
        super(h, w, b);
    }
    getB() {
        return this.b;
    }
}
const bhavil3 = new Player4(false, 800, 200, 9000);
console.log(bhavil3.h);
console.log(bhavil3.getB());
//getter and setter function
class Player5 {
    constructor(h, publicw, b) {
        this.h = h;
        this.b = b;
    }
    get getMyh() {
        return this.h;
    }
    set changeMyh(val) {
        this.h = val;
    }
}
const bhavil5 = new Player5(1200, 200, "asdfgh");
console.log(bhavil5.getMyh);
bhavil5.changeMyh = 200;
console.log(bhavil5.getMyh);
class ProductType {
    constructor(name, stock) {
        this.name = name;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
    }
    getID() {
        return this.id;
    }
}
const bhavil6 = new ProductType("macbook", 1);
console.log(bhavil6.stock);
console.log(bhavil6.getID());
