// var a = 5;
// var b = 6;

// console.log(a + b);

let a = 5;

{
  let a = 55;
  console.log(a); //o/p -> 55
}
console.log(a); // o/p -> 5

var b = 6;

{
  var b = 66;
  console.log(b); // o/p -> 66
}
console.log(b); // o/p -> 66

// var has a global scope but let has a block level scope

let x = "Harry bhai";
let y = 5;
let z = 55.6;
const p = true;
let r = undefined;
let q = null;

console.log(x, y, z, p, r, q);
console.log(typeof x, typeof y, typeof z, typeof p, typeof r, typeof q);

let o = {
  name: "Harry",
  "Job code": 5600,
  'is_Handsome': true
};

console.log(o);

o.salary = "100cr";
console.log(o);
o.salary = "500cr";
console.log(o);
