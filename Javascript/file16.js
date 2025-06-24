//Promises

// function f1() {
//     // return 5;  //There is no delay , because it is not depend on any other
//     setTimeout(()=>{return 5}, 1000)  //here 1 sec delay is there , setTimeout is not in promise,
// }
// function f2(x) {
//     console.log(x+7)   //This will give NaN when we set timeout because of delay of 1 sec. 
// }
// const n = f1()    //here is the use of promise if it will take time get the value of n
// const result = f2(n)  // then result will not wait it will execute and throw error because it cant get value this is problem statement
// console.log(result)


// function f1() {
//     return new Promise((resolve, reject) => {
//         // resolve(5);   //f1 return promise
//         reject("Something went wrong")
//     });
// }
// function f2(x){
//     console.log(x + 7);
// }

// f1()
// .then((n) => f2(n))     //then is used for f2 is used only after f1
// .catch((err) => console.log(err));  


// function f1(y) {
//     return new Promise((resolve, reject) => {
//         if(y > 0)
//         {
//             resolve(y);      //jb resolve hoga tbhi f2 chalega
//         }
//         else
//         {
//             reject("Invalid Input");
//         }
//     });
// }
// function f2(x){
//     console.log(x + 7);
// }

// f1(-1)
// .then((n) => f2(n))     //then is used for f2 is used only after f1
// .catch((err) => console.log(err)); 

//1st type
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())     //convert it into json first json is an object format or standard format 
// .then((data) => {
//     data.map(value => {
//         console.log(value.name, value.email)
//     })
// })
// .catch((err) => console.log(err))

//2nd type
const fetchData = async () => {  //for using await keyword we have to make parent function asynchronous async
    const res = await fetch("https://jsonplaceholder.typicode.com/users");     //whole array object will come in res by using inbuilt fetch function fetch function return promise so we have to use await
    const data = await res.json();
    data.map(value => {
        console.log(value.name);
    })
};
fetchData();