import express from "express";
const app = express()
app.listen(8080, () => {
    console.log("Server Started");
});

//localhost:8080/?name=john]
app.use(exepress.json());
let products = [];
app.post("/", (req,res) => {
    products.push(req.body);
    res.json({message: "Product created"});
});

app.get("/", (req, res) => {
    res.json(products);
});