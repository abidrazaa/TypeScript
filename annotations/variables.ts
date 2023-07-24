
const apples: number = 5;

const fullName: string = 'Abid Raza'

const hasName: boolean = true

const  nothingMuch: null = null

const nothing: undefined = undefined


// built in Objects

const now: Date = new Date()

// Arrays

const colors : string[] = ['red', 'apple']
const myNumbers: number[] = [1,2,3,4]
const truths: boolean[] = [true, false, true]

// Classes

class Car {

}

const car: Car = new Car()

// Object Literals

const student: {name: string; class: number} = {
    name: 'Abid',
    class: 10
}


// Functions

// variable : (parameters and its types) => return tyoe = function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

