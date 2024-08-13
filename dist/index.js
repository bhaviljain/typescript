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
