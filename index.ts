import express from "express";
import config from "./config";
import cors from "cors";

import email from "./service/email";

const app = express();
const port = parseInt(config.PORT);

app.use(
    express.json()
)

app.use(
    cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204,
    })
)

app.post('/mail/send', (req, res) => {
    email.sendMail(req.body).then(r => {
        console.log(r);
        res.status(200).json({
            status: 200,
            message: 'send mail success',
        })
    }).catch(e => {
        res.status(500).json({
            status: 500,
            message: 'send mail fail',
            error: e,
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})