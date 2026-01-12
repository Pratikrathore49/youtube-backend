import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");//in case of confision apply process.pwd and path.join to predectable behaviour
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname.replaceAll(" ", "_"));
  },
});

const uploads = multer({
  storage,
  //  limits:{fileSize:5*1024*1024},
});
export { uploads };
