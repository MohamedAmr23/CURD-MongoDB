import mongoose from 'mongoose';
export const dbConnection=()=>{
    mongoose.set('strictQuery',true)
    mongoose.connect('mongodb://127.0.0.1:27017/mongoosedb').then(()=>{
        console.log("data connected")
    }).catch(()=>{
        console.log('error')
    })
    
}

