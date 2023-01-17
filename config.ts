import dotenv from "dotenv";

dotenv.config()

let config = {
    DEV: true,
    PORT: process.env.PORT || '3000',
    MAIL_HOST: process.env.MAIL_HOST || 'smtp.gmail.com',
}
export default config;