import { uploadResume } from "../controller/resumeController.js";
import { auth } from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import { Router } from "express";

const ResumeRouter = Router();

ResumeRouter.post("/upload" , auth , upload.single("file") , uploadResume);

export default ResumeRouter ;