import express from "express";

import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/", login);
//router.get("/refresh_token", refresh);
//router.delete("/refresh_token", clear);

export default router;
