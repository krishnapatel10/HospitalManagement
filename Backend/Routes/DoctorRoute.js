import { Router } from "express";
import Doctorcontroller from "../Controller/Doctorcontroller.js";


let router = Router();

router.get("/",Doctorcontroller.getallDoctor)
router.get("/:id",Doctorcontroller.getDoctorbyid)
router.post("/",Doctorcontroller.createDoctor)
router.put("/:id",Doctorcontroller.updateDoctor)
router.delete("/:id",Doctorcontroller.deleteDoctor)


export default router;