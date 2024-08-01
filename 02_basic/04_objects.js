//const td = new Object();  ->Singleton-a java singleton class is a class that can have only one object (an instance of the class) at a time.
const td = {};
td.id = "123";
td.name = "Sam";
td.isLoggedIn = false;
console.log(td);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({},obj1, obj2);
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sayantan"
}
//course.courseInstructor
const{courseInstructor:it} = course//destructuring...
//console.log(courseInstructor);
console.log(it);

const navbar= ({company}) =>{

}
navbar(company="hitesh")



//APIS
// {
//     "name" : "Sayantan",
//     "coursename" : "hindi",
//     "price" : "free"
// }
[
    {},
    {},
    {}
]