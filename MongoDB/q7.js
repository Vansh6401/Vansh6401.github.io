db.posts.insertMany([
    {
        _id: "p1", 
        post: "post1"
    },
    {
        _id: "p2",
        post:"post2"
    }
])
db.comment.insertMany([
    {
        _id:"c1",
        pid:"p1",
        comment:"Comment1"
    },
    {
        _id:"c2",
        pid:"p1",
        comment:"Comment 2"
    },
    {
        _id:"c3",
        pid:"p2",
        comment:"Comment 1"
    },
    {
        _id:"c4",
        pid:"p2",
        comment:"Comment 2"
    },
    {
        _id:"c5",
        pid:"p2",
        comment:"Comment 3"
    }
])

db.posts.aggregate([
    {$lookup: {
        from:"comment",
        localField: "_id",
        foreignField: "pid",
        as: "Comments",
    },
},
{$unwind: "Comments"},
{$project: {post:1,comment: "$Comments.comment",_id:0}}
])
