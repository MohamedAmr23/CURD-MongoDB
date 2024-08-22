import { userModel } from "../../../database/models/user.model.js"

export const getUser=async (req, res) => {
    const users=await userModel.find()
    res.json({msg:"success",users})
}

export const postUser=async(req,res)=>{
    const {name,email,password,age}=req.body
    const users= await userModel.insertMany({name,email,password,age})
    res.json({msg:"success",users})
}

export const updateUser=async(req,res)=>{
    const {_id,name,email,password,age}=req.body
    const users=await userModel.findByIdAndUpdate({_id},{name,email,password,age},{new:true})
    res.json({msg:"success",users})
}

export const deleteUser=async(req,res)=>{
    const { _id }=req.body
     await userModel.findByIdAndDelete({_id})
     res.json({msg:"success"})
}