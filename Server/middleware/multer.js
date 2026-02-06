import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function(request,file,cb){
        cb(null,"uploads");
    },
    filename: function(request,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage : storage});

export default upload;