// variable : (parameters and its types) => return tyoe = function
const logNumbers: (i: number) => void = (i: number) => { // void shows that the func will return nothing
    console.log(i)
}

// variable = (parameters with types) : return type => function definition
const addTwoNumbers = (a: number, b: number): number => { 
    return a+b
}