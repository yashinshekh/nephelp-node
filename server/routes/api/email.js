import {Router} from 'express';
import nodemailer from 'nodemailer';

const router = Router();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nephelp9@gmail.com',
        pass: 'yasin123456'
    }
});

router.post('/',(req,res) => {
    const errors = {};
    let mailOptions = {
        from: 'nephelp9@gmail.com',
        to: 'nhrc@nhrcnepal.org',
        subject: req.body.subject,
        // text: req.body.description,
        html: `<p>Hello,</p>
               <p>
                ${req.body.description}
               </p>
               <p>Regards,<br>NepHelp (nephelp9@gmail.com)</p>
            `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            errors.message = 'There was error while sending email.';
            return res.status(404).json(errors);
        }

        info(res.status(200).json({emailmessage:"Message successfully sent."}));
    });
});

export default router;