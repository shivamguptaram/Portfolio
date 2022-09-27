const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const app=express();
const path=require('path');

const Note=require('./models/noteModel');
app.use(cors());
app.use(express.json());

// const pass=process.
const port=process.env.PORT||3001
mongoose.connect('mongodb+srv://shivamgupta_ram:Mukti%4015feb@shivamgupta.lwygp.mongodb.net/Blog')
.catch((error)=>{
    console.log("error in mongo",error);
});

app.get("/items",(req,res)=>{
    Note.find()
    .then((items)=>{
        res.json(items)
    console.log(items)})
    .catch((err)=>res.status(400).json("Error:" + err));
})



app.use("/",require('./routes/noteRoute'));

// Read Data

// for deployment


if(process.env.NODE_ENV==='production'){
    app.use(express.static('portfolio-site/build'));
    app.get("*",(req,res)=>{
               res.sendFile(path.resolve(__dirname,'portfolio-site','build','index.html'));
    }) 
}


app.listen(port,()=>{
    console.log("server running at 3001")
});