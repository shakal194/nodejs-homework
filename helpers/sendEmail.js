const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = require("./config");

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: SENDGRID_SENDER_EMAIL };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = sendEmail;
