import Appointment from "../Model/Appointment.js";

let Appointmentcontroller = {
    async Getallappointments (req,res){
        try {
            let data = await Appointment.find();
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message:"internal server error",error})
        }
    },
    async Getappointmentbyid (req,res){
        try {
            let data = await Appointment.findById(req.params.id);
            if(!data){
                return res.status(404).json({message:"user not found"})
            }
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message:"internal server error",error})
        }
    },
    async createappointment (req,res){
        try {
            let data = new Appointment({
                patientName:req.body.patientName,
                age:req.body.age,
                date:req.body.date,
                time:req.body.time,
                problem:req.body.problem,
            })
            let createdata = await data.save()
            res.status(200).json(createdata)
        } catch (error) {
            res.status(500).json({message:"internal server error",error})
        }
    },
    async updateappointment (req,res){
        try {
            let data = await Appointment.findByIdAndUpdate(req.params.id);
            if (!data) {
                return res.status(500).json({message:"user not found"}) 
            }

             data.patientName =req.body.patientName || data.patientName,
             data.age=req.body.age || data.age,
             data.date=req.body.date || data.date,
             data.time=req.body.time || data.time,
             data.problem=req.body.problem || data.problem

            // let newUser = await Appointment.save();
            res.status(200).json(newUser)
        } catch (error) {
            res.status(500).json({message:"internal server error",error})
        }
    },
    async deleteappointment (req,res){
        try {
            let data = await Appointment.findByIdAndDelete(req.params.id);
              if (!data) {
                return res.status(500).json({message:"user not found"}) 
            }
            res.status(200).json({message:"delete successfully..."})
        } catch (error) {
            res.status(500).json({message:"internal server error",error})
        }
    },
}

export default Appointmentcontroller;