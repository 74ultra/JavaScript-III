/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const haiko = {
    name: 'Haiko',
    species: 'cat',
    age: 10,
    speak: function(){
        console.log(`My name is ${this.name} and I am a ${this.species}`)
    }
}

haiko.speak();

// Principle 3

// code example for New Binding

function Pet(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.hobby = attributes.hobby;
    this.speak = function(){console.log(`My name is ${this.name}`)}
}

const huckleberry = new Pet({
    name: 'Huckleberry',
    age: 15,
    hobby: 'sleeping'
})

console.log(huckleberry.name)

huckleberry.speak();

// Principle 4

// code example for Explicit Binding

function noOneAsked(){
    console.log(`Actually, ${this.hobby} is my favorite hobby.`);
};

noOneAsked.call(huckleberry);




