import { Router } from "express";
import Appointmentcontroller from "../Controller/Appointmentcontroller.js";

let router = Router();
router.get("/",Appointmentcontroller.Getallappointments)
router.get("/:id",Appointmentcontroller.Getappointmentbyid)
router.post("/",Appointmentcontroller.createappointment)
router.put("/:id",Appointmentcontroller.updateappointment)
router.delete("/:id",Appointmentcontroller.deleteappointment)

export default router