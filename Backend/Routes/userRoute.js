import { Router } from "express";
import usercontroller from "../Controller/usercontroller.js";

let router = Router();

router.get("/",usercontroller.getalluser)
router.get("/:id",usercontroller.getuserbyid)
router.post("/login",usercontroller.loginuser)
router.post("/signup",usercontroller.signupuser)
router.put("/:id",usercontroller.updateuser)
router.delete("/:id",usercontroller.deleteuser)

export default router;
