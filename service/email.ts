import nodemailer from 'nodemailer';
import config from "../config";

let transporter = nodemailer.createTransport({
    host: config.MAIL_HOST,
    port: 587,
    tls: {
        // rejectUnauthorized: true,
        minVersion: "TLSv1.2"
    },
    auth: {
        user: config.MAIL_USER,
        pass: config.MAIL_PASS,
    }
});

export default {
    sendMail: async (
        payload: {
            to: string, subject: string, text: string, who: string
        }
    ) => {
        let result = null
        await transporter.sendMail({
            from: payload.who,
            to: payload.to,
            subject: payload.subject,
            text: `<p>${payload.text}</p>`,
            html: `<p>${payload.text}</p>`,
        }, (error, info) => {
            console.log(error);
            console.log(info);
            if (error) {
                result = error
            }
        })
        return result
    }
}


