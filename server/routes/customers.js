import express from "express";

import { getCustomer, createCustomer } from "../controllers/customers.js";
import { authenticateToken } from "../middleware/authorization.js";

const router = express.Router();

router.get("/:user_id", authenticateToken, getCustomer);
router.post("/", createCustomer);

export default router;
