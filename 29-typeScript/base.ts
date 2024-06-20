//primitives

let age:number;
age=23.7

let userName:string;
userName="aka"

let isBool:boolean;
isBool=true


let value:null


//complex

//array
let myHobbies:string[];
myHobbies=["Sports","Reading","Games"]

//object
type typePersion={
    name:string;
    age:number;
}
let persion:typePersion;
persion={
    name:"akamoon",
    age:23
}

let persions:typePersion[];

//type inference

let cource:number|string="React course"
cource=21


//funtion and types

function addfn(a:number,b:number):number{
    return a+b
}
function printOut(value:any){
    console.log(value)
}

//generics

function insertValue<T>(arr:T[],value:T):T[]{
const newArr= [...arr , value]
return newArr
}

const demoArr=[1,2,3]
const update=insertValue(demoArr,-1)
const stringarray=insertValue(['q','b'],'c')
stringarray[0].split('');


let numbers: Array<number> = [1, 2, 3];