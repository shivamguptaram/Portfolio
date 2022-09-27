const express=require('express');
const router=express.Router();
const Note=require("../models/noteModel");
console.log('inside notes Route');
router.route("/create").post((req,res)=>{
    const title=req.body.title;
    const content=req.body.content;
    const email=req.body.email;
     const newNote=new Note({
         title,
         email,
         content
     });
     newNote.save();
    
})

module.exports=router;