import { sendEmail } from "./emailService.js";

const sendEmailFun = async ({ sendTo, subject, text, html }) => {
    const result = await sendEmail(sendTo, subject, text, html);
    if (result.success) {
        return true;
    } else {
        console.error("Email send failed:", result.error);
        return false;
    }
};

export default sendEmailFun;