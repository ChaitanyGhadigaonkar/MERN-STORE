import dotenv from "dotenv"
dotenv.config()

export const {
    PORT,
    BACKEND_URL,
    MONGODB_URI,
    JWT_SECRETE,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRETE
} = process.env;