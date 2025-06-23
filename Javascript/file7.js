//CallBack Function
// const f1 = () => {console.log("Hello")};

// const f1 = 10
// const main = (x) =>{
//     x()  //Passing function f1() thats why we use ()
//     // console.log(x) //Passing value use consol.log()
// }
// main(f1);

const add = (...args) => {
    console.log(args)
}
add(4,5,6,7,8)