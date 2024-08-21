import express from 'express'
import mongoose from 'mongoose';
const app = express()
const port = 2000
mongoose.set('strictQuery',true)
mongoose.connect('mongodb://127.0.0.1:27017/mongoosedb').then(()=>{
    console.log("data connected")
}).catch(()=>{
    console.log('error')
})
const userSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number
})
const userModel=mongoose.model('user',userSchema)

app.get('/',async (req, res) => {
    // await userModel.insertMany({name:"mohamed",email:'amrm968@gmail',password:"012233",age:16})
    const user=await userModel.find()
    res.json({msg:"success",user})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))