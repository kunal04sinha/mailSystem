import express from "express";
const router = express.Router();
import { sendMail } from "../Controllers";
router.post("/send", sendMail.mail);

export default router;
