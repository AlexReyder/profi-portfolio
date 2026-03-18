import {redirect} from  'next/navigation'



export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru", // Your SMTP host (e.g., smtp.gmail.com)
    port: 465 , // Port for your SMTP server (e.g., 587 for STARTTLS, 465 for SSL/TLS)
    secure: true, // Use true for port 465, false for other ports (like 587)
    auth: {
      user: "razrab@bk.ru", // Your email address
      pass: "SuOaP2PCAft0wbbGDabK", // Your email password or app password
    },
  });

  const mailOptions = {
    from: '"Portfolio" <razrab@bk.ru>', // Sender address
    to: "razrab@bk.ru", // List of recipients
    subject: "Заявка с Portfolio", // Subject line
    text: ` email: ${SenderEmail} name: ${name}  message:  ${message}`, // Plain text body
  };

   try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId); // Log the message ID
  } catch (error) {
    console.error("Error sending email:", error);
  }


return redirect('/')
 
  
};
