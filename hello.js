var message = "Hello typescript";
console.log(message);
var rno = 101;
console.log(rno);
var isEnabled = false;
console.log(isEnabled);
var List = [1, 2, 3, 4];
console.log(List);
function add(a, b) {
    return a + b;
}
add(3, 4);
function greet(person) {
    console.log("person name is ".concat(person.name, " and age is ").concat(person.age));
}
var user = { name: "Gaurav", age: 23 };
greet(user);
function identity(arg) {
    return arg;
}
var number = identity(43);
var string = identity("yashada");
var isbool = identity(true);
var num = identity([1, 2, 3]);
var obj = identity({ name: "gaurav", age: 18 });
var inferred = identity("auto inferred");
console.log(number);
console.log(string);
console.log(isbool);
console.log(num);
console.log(obj);
console.log(inferred);


// ✅ Type Inference
// TypeScript often infers types:
let x = 5; // x is number

// union and intersection types
function format(input:string | number)
{
    return input.toString()
}