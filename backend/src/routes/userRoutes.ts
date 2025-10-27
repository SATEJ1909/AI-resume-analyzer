import { Router } from "express";
import { signup , login , getProfile } from "../controller/userController.js";
import { auth } from "../middleware/auth.js";



const UserRouter = Router();


UserRouter.post("/signup" , signup);
UserRouter.post("/login" , login);
UserRouter.get("/profile" , auth , getProfile);

export default UserRouter