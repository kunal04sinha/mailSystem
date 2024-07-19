import dotenv from "dotenv";

dotenv.config();

export const { SMTP_SERVICE, SMTP_HOST, SMTP_USER, SMTP_PASS ,PORT} = process.env;
