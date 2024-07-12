let a = "33";
console.log(typeof(a));
let val = Number(a);
console.log(typeof(val));
//
let b = "33abc";
let duk = Boolean(b);
console.log(typeof(duk))
//
let isLogged = "Sayantan"
let gg = Boolean(isLogged)
console.log(gg);
//1=>true  0=>false  ""=>false   "sayany"=>true
let y =0;
console.log(typeof(y));
let r = String(y);
console.log(typeof(r));
//
let s1 = "HELLO"
let s2 = "Sayantan"
let s3 = s1+" "+s2;
console.log(s3)
//
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


console.log("1"+2);//OP12
console.log("1"+2+2);// OP122 because first string then values
console.log(1+2+"2");//op32 values then string
console.log(+true);//OP1