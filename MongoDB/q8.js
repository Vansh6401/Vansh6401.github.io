db.marks.insertMany([
    {name:"John", term:"t1", subject:"maths", score: 98},
    {name:"John", term:"t2", subject:"maths", score: 90},
    {name:"John", term:"t3", subject:"maths", score: 88},
    {name:"John", term:"t1", subject:"science", score: 92},
    {name:"John", term:"t2", subject:"science", score: 82},
    {name:"John", term:"t3", subject:"science", score: 82},
    {name:"Cathy", term:"t1", subject:"maths", score: 92},
    {name:"Cathy", term:"t2", subject:"maths", score: 92},
    {name:"Cathy", term:"t3", subject:"maths", score: 82},
    {name:"Cathy", term:"t1", subject:"science", score: 92},
    {name:"Cathy", term:"t2", subject:"science", score: 82},
    {name:"Cathy", term:"t3", subject:"science", score: 80},
])

db.marks.aggregate([
    {$group:{_id:"$name", AverageScore:{$avg:"$score"}}}
])

db.marks.aggregate([
    {$group:{_id:"$term", AverageScore:{$avg:"$score"}}}
])

db.marks.aggregate([
    {$group:{_id:"$subject", AverageScore:{$avg:"$score"}}}
])

db.marks.aggregate([
    {$group:{_id:{Subject: "$subject",Term:"$term", Name:"$name"}, AverageScore:{$avg:"$score"}}}
])

db.marks.aggregate([                                    
    {$match: {name:"John"}},                       //these are pipelines in aggregate
    {$group:{_id:{term:"$term", name:"$name"},AverageScore:{$avg:"$score"}}}
])




db.studentInfo.insertMany([
    {_id:"s1", name:"John"},
    {_id:"s2", name:"Cathy"}
])

db.marks.updateMany({}, {$rename: {name: "sid"}})

db.marks.updateMany({sid: "John"}, {$set: {sid:"s1"}},
    {sid: "Cathy"}, {$set: {sid:"s2"}}
);

db.studentInfo.aggregate([
    {$lookup:
        {
            from:"marks",
            localField:"_id",
            foreignField:"sid",
            as:"marks"
        },
    },
    {$unwind: "$marks"},
    {$group:{
        _id:"$marks.term",AvgScore:{$avg:"$marks.score"}
    }}
])


db.employees.aggregate([
    {$project:{_id:0, name:1,salary:1,Grade:"Grade A"}},
])

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:{
            if:{$gt:["$salary",3000]},
            then:"Grade A",
            else:"Grade B"
        }}
    }}
])

db.createview("salaryview","employees",[
    {$project:
        {
            _id:0,
            name:1,
            salary:1,
            department:1,
            Grade:{
                $cond:
                {
                if:{$gt:["$salary",3000]},
                then:"Grade A",
                else:"Grade B"
                }
            }
        }
    }
])



db.employees.updateOne({name:"Vansh"},{$set:{marks:75}})



// C:\Users\vansh>mongodump -d lpu -o D:\lpubackup
// mongorestore -d lpu D:\lpubackup