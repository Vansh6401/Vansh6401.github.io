//json
const student = '{"name": "Amy", "age": 21}'
const obj = JSON.parse(student)  //convert it into object from json string
console.log(obj.name)
console.log(obj)
console.log(JSON.stringify(obj))     //stringify - convert it into JSON string