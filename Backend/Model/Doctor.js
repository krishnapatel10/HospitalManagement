import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model("Doctor",DoctorSchema)
