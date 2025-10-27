import multer, { type Multer } from 'multer'
import path from  'path'


const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , "uploads/")
    },
    filename : function(req , file , cb){
        const suffix = Date.now() + path.extname(file.originalname);
        cb(null , file.fieldname + "-" + suffix)
    }
})

//@ts-ignore
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

const upload = multer({storage , fileFilter});


export default upload