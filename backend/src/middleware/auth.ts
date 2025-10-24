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

         const decoded = jwt.verify(token , process.env.JWT_SECRET || "secret") as any;

         req.user = {
            id : decoded.id ,
            role : decoded.role
         }
         next();
    } catch (error) {
        
    }
}
    