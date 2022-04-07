import express from "express";

import {
  getManager,
  getManagers,
  createManager,
  deleteManager,
  updateManager,
} from "../controllers/managers.js";
import { authenticateToken } from "../middleware/authorization.js";

const router = express.Router();

router.get("/:user_id", authenticateToken, getManager);
router.get("/", getManagers);
router.post("/", createManager);
router.delete("/manager/:user_id", deleteManager);
router.put("/manager/:user_id", updateManager);

export default router;
