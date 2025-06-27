db.employees.find({ salary: { $gt: 3000 } }, { name: 1 }).limit(2).skip(1);

db.employees.find(
    { $or: [{ salary: { $gt: 3000 } }, { department: "IT" }] },
    { name: 1 }
);


db.employees.aggregate([
    { $match: { salary: { $gt: 1000 } } },
    { $project: { name: 1, salary: 1, location: 1 } },
    { $sort: { name: 1 } },
    { $limit: 1 },
]);
// $match: { salary: { $gt: 1000 } }  --  Filters documents where salary is greater than 1000
// Only matching employees are passed to the next stage
// $project: { name: 1, salary: 1, location: 1 }  --  Selects only specific fields to include in the output: name, salary, and location
// $sort: { name: 1 }  -- Sorts the filtered and projected documents by name in ascending order
// $limit: 1 -- After sorting, it limits the result to just the first document

db.employees.updateMany({}, { $addToSet: { location: "FL" } });
//In MongoDB, the $addToSet operator is used within update operations to add elements to an array field only if they are not already present. It ensures that the array remains free of duplicate elements.

db.employees.aggregate([
  { $project: { _id: 0, name: 1, location: 1 } },
  { $unwind: "$location" },
]);

db.employees.aggregate([{ $project: { _id: 0, EmpName: "$name" } }]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      bonus: { $multiply: ["$salary", 2] },
    },
  },
]);

db.employees.aggregate([{ $project: { name: 0 } }]);

db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      total: { $sum: "$salary" },
    },
  },
]);

db.employees.aggregate([
  {
    $group: {
      _id: null,
      total: { $sum: "$salary" },
    },
  },
]);

db.employees.aggregate([
  { $match: { salary: { $gt: 2000 } } },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders",
    },
  },
  { $unwind: "$orders" },
  { $project: { name: 1,salary:1, "orders.orderValue": 1 } },
]);

db.employees.getIndexes()      

db.employees.createIndex({"email":1})  

db.employees.dropIndex("email_1") 

db.employees.find({email:"john@gmail.com"}).explain("executionStats")     
//observe TotalDocsExamined

post
_id - post 
p1 - post1
p2 - post2

