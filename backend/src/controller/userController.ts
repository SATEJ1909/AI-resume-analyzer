
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from "../models/userModel.js";
const JWT_SECRET = process.env.JWT_SECRET || "secret"
import type { Request  , Response } from "express";




export const signup = async (req : Request , res : Response) => {
    try {
        const {name , email , password , role} = req.body;
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(400).json({
                succcess : false ,
                message : "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        const user = await UserModel.create({
            name , email , password : hashedPassword , role
        })

        const token = jwt.sign({
            id : user._id ,
            role: user.role
        } ,   JWT_SECRET)

        return res.status(201).json({
            succcess : true ,
            data : user ,
            token ,
            message : "User created successfully"
        })
        
    } catch (error : any) {
        return res.status(500).json({
            succcess : false ,
            message : error.message
        })
        
    }
}


export const login = async (req : Request , res : Response) =>{
    try {
        const {email , password} = req.body;

        const user = await UserModel.findOne({email});

        if(!user){
            return res.status(404).json({
                succcess : false ,
                message : "User not found"
            })
        }

        if(user){
            const isPasswordCorrect = await bcrypt.compare(password , user.password);

            if(!isPasswordCorrect){
                return res.status(400).json({
                    succcess : false ,
                    message : "Invalid credentials"
                })
            }

            const token = jwt.sign({
                id : user._id
            } ,   JWT_SECRET)


            return res.status(200).json({
                succcess : true ,
                data : user ,
                role : user.role ,
                token ,
                message : "User logged in successfully"
            })
        }


    } catch (error : any) {
        return res.status(500).json({
            succcess : false ,
            message : error.message
        })
        
    }
}