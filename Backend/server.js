import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import "dotenv/config"


let app = express();
app.use(cors())
app.use(bodyParser.json())


//import routes api
import DoctorRoute from "./Routes/DoctorRoute.js"
import Appointment from "./Routes/AppointmentRoute.js";
import userRoute from "./Routes/userRoute.js"




// import mongodb connection 
import connectdb from "./config/connectdb.js"
connectdb()



// routes
app.use("/api/doctor",DoctorRoute)
app.use("/api/appointment",Appointment)
app.use("/api/user",userRoute)




//local api testing
// app.get("/",async(req,res)=>{
//     res.json("api is working")
// })



//listening 
let port = process.env.PORT;

app.listen(port || 5000,()=>{
    console.log(`server is running on port ${port}`);
})
