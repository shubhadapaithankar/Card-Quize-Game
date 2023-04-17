const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('./public'));

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+"/banner.html"));
});

router.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname+"/Auth.html"));
});

router.get("/index", (req, res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});


router.post("/index", (req, res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.use("/", router);

app.listen(3000, ()=>{
    console.log("Server running on 3000 Port !!!");
});


