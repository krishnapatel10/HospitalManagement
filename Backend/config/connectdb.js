import mongoose from 'mongoose'
import "dotenv/config"

export default async function connectdb() {
    try{
        await mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("Connected to mongodb...");
        }).catch((error)=>{
            console.log({message:error.message});
        })
    }
    catch(error){
        console.log("MongoDB connection failed...",error.message);
    }
}
