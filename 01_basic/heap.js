//Stack(primitive),Heap(Non-Primitive)
let ok = "Sayantan";
let k = ok;
k = "Tinu";
console.log(ok);
console.log(k);
let one = {//it is going inside heap;
    email:"user@google.com",
    upi:"user@ubl"
}
let two = one;
two.email="google.com";//if you change one value both changed;
console.log(one.email);
console.log(two.email);