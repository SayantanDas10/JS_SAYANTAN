const user ={
    username:"Sayantan",
    rollno:2106249,

    welcome_msg:function(){
     console.log(`${this.username}, welcome to my website...`);
     console.log(this);
  }
}
user.welcome_msg();

user.username = "Sam";
user.welcome_msg();
/////////////////////////////////////////////////
console.log(this);

function me(){
    let user = "Sayantan";
    console.log(this);
    console.log(this.user);
    
}
me();

// const c = function(){
//     let u ="Sayantan"
//     console.log(u);
// }
// c();
const c = ()=>{
    let u = "Sayantan"
    console.log(this.u);
    
}
c();

const addtwo = (num1,num2) => num1+num2;
console.log(addtwo(3,4));

const add = (num1,num2)=>({username:"Sayantan"})
console.log(add(3,3))