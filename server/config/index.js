import dotenv from "dotenv"
dotenv.config()

export const {
    PORT,
    MONGODB_URI,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRETE
} = process.env;