db.employees.updateOne(
    {email: "mike@gmail.com"},
    {$set:{salary:3000}}
)

db.employees.updateMany(
    {department:"IT"},      //for all the it department employees point is 1
    { $set:{point:1}}      //if point is not there then mongodb will create point field and give value 1
)  

db.employees.updateMany(
    {department:"IT"},      //for all the it department employees point is 1
    { $inc:{point:1}}       //if point is not there then mongodb will create point field and give value 1
)  //$inc increase by one (increment operator) for all the it department employees point is inc by 1.

db.employees.updateMany(
    {department:"IT"},      
    { $inc:{point:-1}}
)                          //decrement by 1 

db.employees.updateOne(
    {email : "krish@gmail.com"},
    {$set: {name: "Krish", department: "HR", salary:2700}},
    {upsert:true}
);          //if krish not exist it will cretae new one 

db.employees.deleteOne({email:"krish@gmail.com"})
db.employees.deleteMany({department:"Admin"})

db.employees.find().sort({name:1})        //sort name in ascending order
db.employees.find().sort({name:-1})        //sort name in descending order 

lpu> db.employees.find().sort({salary:-1}).limit(1)      //highest salary


lpu> db.employees.find({},{_id:0, Empname:"$name"})  //for display purpose name is Empname
lpu> db.employees.find({},{name:1}) //print all the names with id
lpu> db.employees.find({}, { name: 1, _id: 0 }) // names only


db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
)   //$rename operator change point field name to score

db.employees.updateMany(
    {},
    {$unset:{points:"score"}}
)

db.employees.find({},{_id:0, name:1, location:1})

db.employees.updateMany(
    {},
    {$push:{points:3}}
)                //it will create an points array             
db.employees.updateMany({department:"IT"}, {$push:{points:7}})


db.employees.updateMany(
    {},
    {$pull:{points:{$gt:3}}}
)              //remove from array based on the condition


db.employees.updateMany(
    {},
    {$addToSet:{location:'LA'}}
)   //$addToSet: This adds a value to an array only if that value does not already exist in the array. It prevents duplicates.

db.employees.updateMany(
    {},
    {$pop:{location:-1}}
)    //$pop: { location: -1 } → removes the first element from the location array.
     // $pop: { location: 1 } → would remove the last element instead.

