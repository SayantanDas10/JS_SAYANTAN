function sayname(){
console.log("S");
console.log("A");
console.log("Y");
console.log("A");
console.log("N");
console.log("T");
console.log("A");
console.log("N");
}
//sayname()
// function addTwoNo(no1,no2){
//    console.log(no1+no2);
// }
function addTwoNo(no1,no2){
       //let r = no1+no2;
       console.log("Sayantan");
       
       return no1+no2;
}
const Result = addTwoNo(3,4);
console.log("Result : " ,Result);

function login(username){
    return `${username} just logged in...`;
}
console.log(login("Sayantan Das"));

function al(aj,ak){
    return `I AM ${aj} and my bro is ${ak}`;
}
console.log(al("SAYAN","AYAN"));

//USING IF ELSE
function jjk(kallu){
    if(kallu===undefined){
        console.log("Enter name plz");
        return;
    }
    return `I AM ${kallu}`;
}
console.log(jjk());

function calprice(...a){//rest operator
    return a;
}
console.log(calprice(100,200,300));

const user = {
    username : "Sayantan",
    price:200
}
function oh(anyobject){
    console.log(`Mr.${anyobject.username} paid ${anyobject.price} to our company.`);
}
oh(user);

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));