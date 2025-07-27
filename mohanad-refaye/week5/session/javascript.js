// input/output
// alert();
// confirm()
// prompt('اش اخبار يالغالي');
console.log(10);
document.getElementById("head").innerText = "Javascript";
document.getElementById("job").innerHTML =
  "<h2 id='jobData'><u>make webpage dynamic</u></h2>";
document.write("<br>welcome js");

// variables
// syntax var, let, const
// var variable-name;
// let variable-name = value;
// const variable-name = value;
var x = 100;
console.log(x);
var xy = 20;
console.log(xy);
var xy = "ahmed"; // redeclare
console.log(xy);
xy = 125.24; // reuse
console.log(xy);

let z = 1020;
console.log(z);
let zy = 220;
console.log(zy);
// let zy = 220;  can not be redeclared
zy = "ahmed"; // reuse
console.log(zy);

const zz = 1100; // const = constant ثابت
console.log(zz);
const zzy = 2110;
// const zzy = 2110;  can not be redeclared
console.log(zzy);
// zzy = "aaa"; can not be assigned

const par = document.getElementById("para");
console.log(par);
par.innerText = "hello there";
const sp = document.getElementById("spn");
console.log(sp);
sp.innerHTML = "<u>iam span</u><br><br>";
const inp = document.getElementById("ipt");
console.log(inp);
inp.value = "ahmed";

// datatypes
// js loose datatypes
// primitive - non primitive
// primitive => int, float double, boolean (bool), string, symbol, null, undefined
// non primitive => object, array, function
var a = 10;
console.log(typeof a); // typeof() ==> JS builtin method
var a = 10.25;
console.log(typeof a);
var a = 10.25;
console.log(typeof a);
var a = "10.25";
console.log(typeof a);
var a = "10.25";
console.log(typeof a);
var a = "aly";
console.log(typeof a);
var a = true;
console.log(typeof a);
var a = false;
console.log(typeof a);
var a = null;
console.log(typeof a);
var a = undefined;
console.log(typeof a);
var a = Symbol("id");
console.log(typeof a);
// non primitive ( reference )
// non primitive ( reference ) ==> array
var a = [10, 20, 30];
console.log(typeof a);
var a = ["ahmed", 20, true];
console.log(a);
console.log(typeof a);

var a = Array(12, ",,,", 145.25, false);
console.log(a);
console.log(typeof a);

// non primitive ( reference ) ==> object
var a = {
  fistname: "ahmed",
  lastname: "aly",
  age: 22,
};
console.log(a);
console.log(typeof a);

// non primitive ( reference ) ==> function
var a = function () {
  let f = 10;
  let ff = 20;
  let r = f + ff;
  return r;
};
console.log(a);
console.log(typeof a);

var a = () => {};
console.log(a);
console.log(typeof a);

// datatypes use
const ipt2 = document.getElementById("iptTest").value;
console.log(ipt2);
let sum = ipt2 + 55;
console.log(sum);
console.log(typeof sum);

// casting = parse = convert
sum = parseInt(sum);
console.log(typeof sum);
console.log(sum);
sum = sum + 55;
console.log(sum);
