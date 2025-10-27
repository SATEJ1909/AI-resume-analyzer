import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret"


export const auth = async (req: any, res: any, next: any) => {
    try {
         const token = req.headers.token ;

         if(!token){
            return res.status(401).json({
                succcess : false ,
                message : "Unauthorized"
            })
         }

         const decoded = jwt.verify(token ,JWT_SECRET) as any;

         req.user = {
            id : decoded.id ,
            role : decoded.role
         }
         next();
    } catch (error : any) {
        return res.status(500).json({
            succcess : false ,
            message : error.message
        })
    }
}
    