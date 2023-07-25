import multer from "multer";

const storage = multer.memoryStorage();

const singleUpload = multer({
  storage,
}).array("image");

export default singleUpload;
