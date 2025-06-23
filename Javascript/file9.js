//Arrays

// const score = [2, 1, 7, 5, 3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)


// const newScore = [...score, 9]
// console.log(newScore)

// const cart = {
//     1: 5,
//     5: 3,
// };
// const newCart = ({...cart, 2:9, 4:10})
// console.log(newCart)

// let cart = {};
// const products = [
//     {id: 1, name: "Product 1", price: 25},
//     {id: 2, name: "Product 2", price: 50},
//     {id: 3, name: "Product 3", price: 75},
// ];
// function addToCart(id) {
//     cart = { ...cart, [id]:1 };
// }
// // const newProducts = [...products, {id:4, name: "Product 4", price: 56}]
// addToCart(1)
// console.log(cart)
// addToCart(3)
// console.log(cart)


// const score = [1,4,2,42,2];
// score.forEach((index) => {
//     console.log(index)
// })

// const score1 = [1,4,2,42,2];
// score1.forEach((a, b, c) => {
//     console.log(c[b]);
// })

// const score1 = [1,4,2,42,2];
// score1.map((value) => {
//     console.log(value);
// })

// const score1 = [1,4,2,42,2];
// const NewScore = score1.map((value) => {
//     return value + 5
// });
// console.log(NewScore)

// const score1 = [1,4,2,42,2];
// const NewScore = score1.map((value) => {
//     return value > 2;
// });
// console.log(NewScore)

// const score1 = [1,4,2,42,2];
// const NewScore = score1.find((value) => {
//     return value > 2;
// });
// console.log(NewScore)

// const score1 = [1,4,2,42,2];
// const NewScore = score1.filter((value) => {
//     return value > 2;
// });
// console.log(NewScore)

// const score1 = [2, 1, 7, 5, 2];
// const NewScore = score1.find((value) => {
//     return value === 2;
// });
// console.log(NewScore)

// const score1 = [2, 1, 7, 5, 2];
// const NewScore = score1.filter((value) => {
//     return value === 2;
// });
// console.log(NewScore)


//Filter
//FInd
//Map
//ForEach


// const score1 = [2, 1, 7, 5, 2];
// const NewScore = score1.reduce((sum, value) => {
//     return sum + value
// }, 0);
// console.log(NewScore)

// const score1 = [2, 1, 7, 5, 2];
// const NewScore = score1.reduce((sum, value) => sum + value, 0);
// console.log(NewScore)

// const score1 = [2, 1, 7, 5, 2];
// const NewScore = score1.reduce((sum, value) => sum + value, 0);
// console.log(NewScore)

const score1 = [2, 1, 7, 5, 2];
const NewScore = score1.find((value) => value === 0);
console.log(NewScore)