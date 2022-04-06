import express from "express";

import {
  getCustomerReservations,
  getReservations,
  createReservation,
  //  deleteReservation,
} from "../controllers/reservations.js";
import { authenticateToken } from "../middleware/authorization.js";

const router = express.Router();

router.get("/:suite_id", getReservations);
router.post("/:suite_id/:customer_id", authenticateToken, createReservation);
router.get(
  "/customer/:customer_id",
  authenticateToken,
  getCustomerReservations
);
//router.delete("/:suite_id/:customer_id", deleteReservation);

export default router;
