import multer from 'multer';
import { v4 as uuidV4 } from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, res, cb) => cb(null, '../uploads/'),
  filename: (req, res, cb) => {
    const uniqueName = `${uuidV4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const handleMultipartData = multer({
  storage,
}).array('image');

export default handleMultipartData;
