//Singleton-When we create obj using constructor this create singletone type of obj.
Object.create//singleton

const mysymbol = Symbol("KEY1");

const jsuser={
    name:"Sayantan",
    "full name":"sayanok",
    age:22,
    [mysymbol]:"mykey",
    location:"Kolkata",
    email:"das10sayantan@gmail.com",
    isloggedin:false
}
console.log(jsuser.email);
console.log(jsuser["email"])
console.log(jsuser["full name"]);//Best way
console.log(typeof jsuser[mysymbol])

jsuser.email="SUNNY";
console.log(jsuser["email"])
//Object.freeze(jsuser);
jsuser.email="das10sayantan@gmail.com";
console.log(jsuser["email"])
jsuser.greeting=function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo);
console.log(jsuser.greetingTwo());