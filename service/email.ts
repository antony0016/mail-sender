import nodemailer from 'nodemailer';
import config from "../config";

export default {
    sendMail: async (
        payload: {
            to: string, subject: string, text: string, who: string, user?: string, password?: string
        }
    ) => {
        let transporter;
        if (payload.user && payload.password) {
            transporter = nodemailer.createTransport({
                host: config.MAIL_HOST,
                port: 587,
                tls: {
                    // rejectUnauthorized: true,
                    minVersion: "TLSv1.2"
                },
                auth: {
                    user: payload.user,
                    pass: payload.password,
                }
            });
        } else {
            transporter = nodemailer.createTransport({
                host: config.MAIL_HOST,
                port: 587,
                tls: {
                    // rejectUnauthorized: true,
                    minVersion: "TLSv1.2"
                },
            });
        }


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


