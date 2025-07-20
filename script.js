let str="saurabh"
let str2="singh"
console.log(str);
let newStr=str.toUpperCase();
console.log(newStr)
console.log(str.slice(1,3));
let res =str.concat(str2)
console.log(res);

//Template litrals in js[ `str txt$(exp)str txt`]

let s= `this is template string`
console.log(typeof s);

let obj={
    item : "pen",
    price:10,


}
//console.log("the of of pen is ",obj.item,"is",obj.price);
let output =`the cost of ${obj.item} is ${obj.price}rupees`
console.log(output)

/*strings method 
1st) str.toUpperCAse()
2nd) str.toLowerCase()
3rd) str.item{removes whitespaces}*/

