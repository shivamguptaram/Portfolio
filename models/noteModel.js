const mongoose=require('mongoose')
console.log("inside note model");
const notesSchema={
    title:String,
    email:String,
    content:String
}

const Note=mongoose.model("Note",notesSchema);

module.exports=Note;