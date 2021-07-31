//let and const
//let-- same as var(use only if the variable's value will change
//const-- same as var(use only if the variable's value will not change

//Arrow functions
// Pre  ES6

function myFunction(){
    console.log("old way")
}

//Arrow Function

const myFunciton2=()=>{
    console.log("ES6 way")
}

//Ex:

const printMyName = (name) => {
    console.log('Kelvon');
}

//You could also omit the parenthesis around (name) only if its the only value being passed through
//Ex:
const multiply = number =>{
    return multiply(2);
}
//also can be written like
const multiply2 = number => multiply(2);

//TODO:CLASSES (Blueprints for objects
//Ex: Person{name = 'Kelvon'; (Property)
//   call()=>{...} (Method)
//const myPerson = new Person() (usage)
//myPerson.call (constructor call)
//class Person extends Master(Inheritance)

//Ex

class Human{
    constructor() {
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super(); //need super keyword for inheritance
        this.name='Kelvon';
        this.gender='female'; //could change value in child class
    }
    printMyName(){
        console.log(this.name);
    }
}
const person= new Person();
person.printMyName();
person.printGender();

