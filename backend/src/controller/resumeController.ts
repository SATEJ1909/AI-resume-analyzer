import { ResumeModel } from "../models/resumeModel.js"

// @ts-ignore
export const uploadResume = async (req  , res) => {
    try {
        if(!req.file ){
            return res.status(400).json({
                succcess : false ,
                message : "Resume not found"
            })
        }
;
        const resume = await ResumeModel.create({
            userId : req.user.id || null,
            fileUrl : req.file.path
        })

        return res.status(201).json({
            succcess : true ,
            data : resume
        })
    } catch (error : any) {
        return res.status(500).json({
            succcess : false ,
            message : error.message
        })
    }
}


