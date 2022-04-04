import express from "express";

import {
  //getCustomerReservations,
  getReservations,
  createReservation,
  //  deleteReservation,
} from "../controllers/reservations.js";

const router = express.Router();

router.get("/:suite_id", getReservations);
router.post("/:suite_id/:customer_id", createReservation);
//router.get("/customer_id", getCustomerReservations);
//router.delete("/:suite_id/:customer_id", deleteReservation);

export default router;
