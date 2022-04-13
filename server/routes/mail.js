import express from "express";

import { contactForm } from "../controllers/mail.js";

const router = express.Router();

router.post("/", contactForm);

export default router;
