import { Router } from "express";
import { signup , login } from "../controller/userController.js";



const UserRouter = Router();


UserRouter.post("/signup" , signup);
UserRouter.post("/login" , login);

export default UserRouter