import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  age: { type: Number },
  date: { type: String, required: true },   // FIXED
  time: { type: String, required: true },
  problem: { type: String },
}, { timestamps: true });

export default mongoose.model("Appointment", AppointmentSchema);
