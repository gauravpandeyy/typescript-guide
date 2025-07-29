let  message:string="Hello typescript"
console.log(message)

let rno:number=101
console.log(rno)

let isEnabled:boolean=false
console.log(isEnabled)

let List:number[]=[1,2,3,4]
console.log(List)


function add(a:number,b:number):number{
    return a+b
}

add(3,4)

interface Person{
    name:String,
    age?:number
}

function greet(person:Person)
{
    console.log(`person name is ${person.name} and age is ${person.age}`)
}

const user:Person={name:"Gaurav",age:23}

greet(user)

function identity<T>(arg:T):T{
    return arg
}

const number=identity<number>(43)

const string=identity<string>("yashada")


const isbool=identity<boolean>(true)

const num=identity<number[]>([1,2,3])

const obj=identity<{name:string,age:number}>({name:"gaurav",age:18})

const inferred=identity("auto inferred")

console.log(number)
console.log(string)
console.log(isbool)
console.log(num)
console.log(obj)
console.log(inferred)


// ✅ Type Inference
// TypeScript often infers types:
let x = 5; // x is number

// union and intersection types
function format(input:string | number)
{
    return input.toString()
}

//type aliases
type ID = string | number;


//✅ Literal Types
let direction:'left':'right'



