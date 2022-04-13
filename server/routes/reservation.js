import express from "express";

import {
  getCustomerReservations,
  getReservations,
  createReservation,
  deleteReservation,
} from "../controllers/reservations.js";
import { authenticateToken } from "../middleware/authorization.js";

const router = express.Router();

router.get("/:suite_id", getReservations);
router.post("/:suite_id/:user_id", authenticateToken, createReservation);
router.get("/customer/:user_id", authenticateToken, getCustomerReservations);
router.delete("/:reservation_id", authenticateToken, deleteReservation);

export default router;
