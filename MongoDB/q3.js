db.employees.find()  // display all 
db.employees.find().skip(1)  //skip first one and display remaining
db.employees.find().limit(1) //prints only 1st one
db.employees.find().skip(1).limit(1) //display only 2nd one because it skip 1st and then in remaining two linit 1 will display 2nd
db.employees.find({department: "IT"})
db.employees.find({department: "IT"}, {_id:0, name:1})      //1 is for true and 0 for false
db.employees.find({department: "IT"}, {_id:0, name:1, salary:1})  
db.employees.find(
    {salary: {$gt:3000}},  //$eq=equal $gt=greaterthan $gte=greaterthanequalto $lt=lessthan $lte=leassthanorequalto  
    {_id:0, name:1, salary:1}
)  

db.employees.find(
    {salary:{$lte:3000}, department:"IT"},   //default and operator
    {_id:0,name:1,salary:1}
)

db.employees.find(
    { $or: [{salary: {$lte:3000}, department:"IT"}]},    //or operator
    {_id:0,name:1,salary:1}
)

db.employees.find(
    { $and: [{salary: {$lte:3000}, department:"IT"}]},     //and operator
    {_id:0,name:1,salary:1}
)

//syntaz for or operator
// db.employees.find(
//     {$or:[{},{}]}
//     {$and:[{},{}]}
// )

db.employees.find({department:{$eq:"IT"}})                  //equal
db.employees.find({department:{$ne:"IT"}})                  //not equal


// lpu> db.employees.find()
// [
//   {
//     _id: ObjectId('685bb97fe281a03d67cb0ce2'),
//     name: 'Vansh',
//     email: 'vansh.sharma@lpu.in',
//     salary: 3000,
//     department: 'CSE',
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 14:25:27 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685bb9a1e281a03d67cb0ce3'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'CSE',
//     salary: 5000,
//     Location: [ 'AZ', 'TX' ],
//     date: 'Wed Jun 25 2025 14:26:01 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685bb9a1e281a03d67cb0ce4'),
//     name: 'Tyson',
//     email: 'tttsa@gmail.com',
//     department: 'IT',
//     salary: 5002,
//     Location: [ 'LT', 'US' ],
//     date: 'Wed Jun 25 2025 14:26:01 GMT+0530 (India Standard Time)'
//   }
// ]

// lpu> db.employees.find().skip(1)
// [
//   {
//     _id: ObjectId('685bb9a1e281a03d67cb0ce3'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'CSE',
//     salary: 5000,
//     Location: [ 'AZ', 'TX' ],
//     date: 'Wed Jun 25 2025 14:26:01 GMT+0530 (India Standard Time)'
//   },
//   {
//     _id: ObjectId('685bb9a1e281a03d67cb0ce4'),
//     name: 'Tyson',
//     email: 'tttsa@gmail.com',
//     department: 'IT',
//     salary: 5002,
//     Location: [ 'LT', 'US' ],
//     date: 'Wed Jun 25 2025 14:26:01 GMT+0530 (India Standard Time)'
//   }
// ]
// lpu>

// lpu> db.employees.find().limit(1)
// [
//   {
//     _id: ObjectId('685bb97fe281a03d67cb0ce2'),
//     name: 'Vansh',
//     email: 'vansh.sharma@lpu.in',
//     salary: 3000,
//     department: 'CSE',
//     location: [ 'FL', 'OH' ],
//     date: 'Wed Jun 25 2025 14:25:27 GMT+0530 (India Standard Time)'
//   }
// ]
// lpu>

// lpu> db.employees.find().skip(1).limit(1)
// [
//   {
//     _id: ObjectId('685bb9a1e281a03d67cb0ce3'),
//     name: 'Mike Joseph',
//     email: 'mike@gmail.com',
//     department: 'CSE',
//     salary: 5000,
//     Location: [ 'AZ', 'TX' ],
//     date: 'Wed Jun 25 2025 14:26:01 GMT+0530 (India Standard Time)'
//   }
// ]
// lpu>


// lpu> db.employees.find({department: "IT"})
// [
//   {
//     _id: ObjectId('685bb9a1e281a03d67cb0ce4'),
//     name: 'Tyson',
//     email: 'tttsa@gmail.com',
//     department: 'IT',
//     salary: 5002,
//     Location: [ 'LT', 'US' ],
//     date: 'Wed Jun 25 2025 14:26:01 GMT+0530 (India Standard Time)'
//   }
// ]
// lpu> db.employees.find({department: "IT"}, {_id:0, name:1})
// [ { name: 'Tyson' } ]
// lpu>