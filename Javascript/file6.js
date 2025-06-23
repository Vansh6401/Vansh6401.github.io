// greet()
// function greet(){
//     console.log("Greet")
// }

// //hoisting
// x = 10
// console.log(x)
// let x


//hoisting does not work with ARROW FUNCTION
// const greet = () => {console.log("Hello")};
// greet()

const add = (a,b) => {
    // conaole.log(a+b);
    return a+b;
}
// add(5,4)
const result = add(5,4)
console.log(result)