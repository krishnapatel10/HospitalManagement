import Doctor from "../Model/Doctor.js";

let Doctorcontroller = {
    async getallDoctor(req,res){
        try{
            let Data = await Doctor.find()
             res.status(200).json(Data)
        }
        catch(error){
            res.status(500).json({message:"internal server error",error})
        }
    },
    async getDoctorbyid(req,res){
        try{
            let Data = await Doctor.findById(req.params.id);
            if(!Data){
                res.status(404).json({message:"user not found.."})
            }
            res.status(200).json(Data)
        }
        catch(error){
            res.status(500).json({message:"internal server error",error})
        }
    },
    async createDoctor(req,res){
        try{
            let Data = new Doctor({
                name:req.body.name,
                specialization:req.body.specialization,
                experience:req.body.experience,
               
            })
           let newData = await Data.save()
            res.status(201).json(newData)
        }
        catch(error){
            res.status(500).json({message:"intarnal server error ",error })
        }
    },
    async updateDoctor(req,res){
        try{
            let Data = Doctor.findByIdAndUpdate(req.params.id);
            if(!Data){
                res.status(404).json({message:"user not found..."})
            }
               Data.name = req.body.name || Data.name,
                Data.specialization = req.body.specialization || Data.specialization,
                Data.experience = req.body.experience || Data.experience
               
            //  let newData = await Data.save()
             res.status(200).json(newData);

        }
        catch(error){
            res.status(500).json({message:"internal server error",error})
        }
    },
    async deleteDoctor(req,res){
        try{
            let Data = await Doctor.findByIdAndDelete(req.params.id)
            if(!Data){
                res.status(404).json({message:"internal server error",error})
            }
            res.status(200).json("Deleted Succesfully...")
        }
        catch(error){
            res.status(500).json({message:"internal server error",error})
        }
    }
}

export default Doctorcontroller;
