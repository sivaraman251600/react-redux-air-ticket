// function Person(fName, lName){
//     this.firstName = fName;
//     this.lastName = lName;
//     }
    
//     Person.prototype.getFullName = function(){
//     return this.firstName+ " " + this.lastName + " Is Super Hero" +" "+ this.isHero
//     }
    
//     function SuperHero(fName,lName){
//     // this = {}
//     Person.call(this,fName,lName)
//     this.isHero = true
//     }    
    
//     SuperHero.prototype = Object.create(Person.prototype)
    
//     const batMan = new SuperHero("Sivaraman","K")
    
//     console.log(batMan.getFullName());

// class Person{
//     constructor(fName, lName){
//         this.firstName = fName,
//         this.lastName = lName
//     }

//     sayMyName(){
//         return this.firstName + " " + this.lastName 
//     }
// }

// class SuperHero extends Person{
//     constructor(fName, lName){
//         super(fName, lName)
//         this.isHero = true
//     }

//     fightCrime(){
//         console.log("Fight crime")
//     }
// }

// const AccessSuperHeroToPersonMethod = new SuperHero("Sivaraman","K")
// console.log(AccessSuperHeroToPersonMethod.sayMyName());

var obj = {
    [Symbol.iterator]: function(){
    let step = 0
    const iterator = {
        next:function(){
    step++
    if(step === 1){
    return {value:"React", done:false}
    }
    else if(step === 2){
    return {value:"Js", done:false}
    }
    return {value:undefined, done: true}
    }
    }
    return iterator
    }
}

for (let iterate of obj){
    console.log(iterate)
}