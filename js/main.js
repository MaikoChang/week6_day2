//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(person3[Object.keys(person3)[i]])
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        let message = `${name} is ${age} years old.`
        console.log(message)
        return message
    }
    this.getOlder = () => {
        age += 1
        console.log(age)
        return age
    }
    this.addAge = (years) => {
        age += years
        console.log(age)
        return age
    }
}
let person1 = new Person("Mina",3)
let person2 = new Person("Kyler",18)

person1.printInfo()
person2.printInfo()

for(i=0; i < 3; i++){
    person1.getOlder()
}
person2.addAge(2)

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const wordLength = (num) => {
    return new Promise( (resolve, reject) => {
        if(num > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
wordLength(1)
.then( (result) => {
    console.log('Big Word')
})
.catch( (error) => {
    console.log('Small Number')
})

wordLength(11)
.then( (result) => {
    console.log('Big Word')
})
.catch( (error) => {
    console.log('Small Number')
})

/* codewars problems
#1 Lario and Muigi Pipe Problem
#Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. 
Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than 
the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value. */

function pipeFix(numbers){
  
    let arr = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      arr.push(i);
    }
    return arr;
  
  }

/*#2 Stringy Strings
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1. */

function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
  }

/*#3 Array plus array */

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
  }

