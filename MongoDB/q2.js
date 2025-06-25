//search services: then mongodb server is running or not then run
//open cmd
//mongosh
//use lpu - go in lpu database if not there then create it
//show collections
//show dbs
//just paste - db.employees.insertOne({......}) these commands
//client software is monogo shell by which we connect our mongodb server
//Queries are: find insertOne,insertMany

//----____:cmd:____----
// test> use lpu
// switched to db lpu
// lpu> show collections
// employees
// lpu> db.users.insertOne({name: "Virat", age: 21})
// {
//   acknowledged: true,
//   insertedId: ObjectId('685bbc8bb58cfec61dcb0ce2')
// }
// lpu> show collections
// employees
// users
// lpu> db.users.find()
// [
//   { _id: ObjectId('685bbc8bb58cfec61dcb0ce2'), name: 'Virat', age: 21 }
// ]
// lpu> db.users.insertOne({name: "Rohit", age: 37})
// {
//   acknowledged: true,
//   insertedId: ObjectId('685bbce9b58cfec61dcb0ce3')
// }
// lpu> db.users.insertOne({name: "Pant", age: 27})
// {
//   acknowledged: true,
//   insertedId: ObjectId('685bbcf8b58cfec61dcb0ce4')
// }
// lpu> db.users.insertOne({name: "KL Rahul", age: 30})
// {
//   acknowledged: true,
//   insertedId: ObjectId('685bbd07b58cfec61dcb0ce5')
// }
// lpu> db.users.find()
// [
//   { _id: ObjectId('685bbc8bb58cfec61dcb0ce2'), name: 'Virat', age: 21 },
//   { _id: ObjectId('685bbce9b58cfec61dcb0ce3'), name: 'Rohit', age: 37 },
//   { _id: ObjectId('685bbcf8b58cfec61dcb0ce4'), name: 'Pant', age: 27 },
//   {
//     _id: ObjectId('685bbd07b58cfec61dcb0ce5'),
//     name: 'KL Rahul',
//     age: 30
//   }
// ]
// lpu> db.users.find({},{name:1})
// [
//   { _id: ObjectId('685bbc8bb58cfec61dcb0ce2'), name: 'Virat' },
//   { _id: ObjectId('685bbce9b58cfec61dcb0ce3'), name: 'Rohit' },
//   { _id: ObjectId('685bbcf8b58cfec61dcb0ce4'), name: 'Pant' },
//   { _id: ObjectId('685bbd07b58cfec61dcb0ce5'), name: 'KL Rahul' }
// ]
// lpu> db.users.find({},{_id:0, name:1})
// [
//   { name: 'Virat' },
//   { name: 'Rohit' },
//   { name: 'Pant' },
//   { name: 'KL Rahul' }
// ]
// lpu> db.users.find({},{_id:0, age:1})
// [ { age: 21 }, { age: 37 }, { age: 27 }, { age: 30 } ]
// lpu> db.users.find({},{_id:0, age:1, name:1})
// [
//   { name: 'Virat', age: 21 },
//   { name: 'Rohit', age: 37 },
//   { name: 'Pant', age: 27 },
//   { name: 'KL Rahul', age: 30 }
// ]
// lpu> db.users.find({},{_id:false, age:true, name:true})
// [
//   { name: 'Virat', age: 21 },
//   { name: 'Rohit', age: 37 },
//   { name: 'Pant', age: 27 },
//   { name: 'KL Rahul', age: 30 }
// ]
// lpu> db.users.drop()      //delete
// true

// lpu> db.users.find({},{name:1}) //2nd bracket filter,

// ------------------------E___N___D-----------------------


db.employees.insertOne(
    {
        name: "Vansh",
        email: "vansh.sharma@lpu.in",
        salary: 3000,
        department: "CSE",
        location: ["FL", "OH"],
        date: Date(),
    }
)

// db.employees.insertOne({name: "Vansh", age:21})

// db.employees.insertMany([
//     {name: "Vansh", age:21},
//     {name: "Aditya", age:20},
// ])

db.employees.insertMany([
    {
        name: "Mike Joseph",
        email: "mike@gmail.com",
        department: "CSE",
        salary: 5000,
        Location: ["AZ", "TX"],
        date: Date()
    },
    {
        name: "Tyson",
        email: "tttsa@gmail.com",
        department: "IT",
        salary: 5002,
        Location: ["LT", "US"],
        date: Date()
    }
])
db.employees.find()

//show collections