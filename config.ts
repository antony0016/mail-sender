import dotenv from "dotenv";

dotenv.config()

let config = {
    DEV: true,
    PORT: process.env.PORT || '3000',
    MAIL_HOST: process.env.MAIL_HOST || 'smtp.gmail.com',
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
}
export default config;