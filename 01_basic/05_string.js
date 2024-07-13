const name = "Sayantan"
const repoCount = 50;
console.log(`Hello my nmae is ${name.toUpperCase()} and my repo count is ${repoCount}`)
//
const gamename = new String('sayantansd')
console.log(gamename[0]);
//
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.charAt(3));
console.log(gamename.indexOf('t'));
const s = gamename.substring(1,5);
console.log(s);
const e = gamename.slice(-8,4);
console.log(e);
const newS = "     sd     ";
console.log(newS.trim());
const url = "https://sayantan.com/sayantan%20das";
console.log(url.replace('%20','-'));
