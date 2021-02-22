//call

const obj = {
    text: "Hrant"
}

//call Function.prototype.call()
const foo = function (str) {
     return 'Hello ' + this.text + " " +str;
}

//console.log(foo.call(obj,"how are you?"))

//call Function.prototype.applay()

const bar = function (str1,str2) {
    return 'Hello ' + this.text + " " +str1+str2;
}

const arg = [ "go", ' home'];

//console.log(bar.apply(obj,arg))


//bind ()
const helper = foo.bind(obj);
// console.dir(helper); 
//console.log(helper("King")); 

const print = function () {
    console.log(this)
}.bind(1);

//print();
const print2 = function (a,b,c) {
    console.log(this)
    console.log(a)
    console.log(b)
    console.log(c)
}
//print2.call(1,2,3,4)
const print3 = function (a,b,c) {
    console.log(this)
    console.log(a)
    console.log(b)
    console.log(c)
}
print3.apply(1,[2,3,4])