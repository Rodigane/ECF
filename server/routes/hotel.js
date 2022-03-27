import express from "express";

import { getHotel, getHotels, createHotel, updateHotel, deleteHotel } from "../controllers/hotels.js";

const router = express.Router();

router.get("/", getHotels);
router.post("/", createHotel);
router.get("/:hotel_id", getHotel);
router.put("/:hotel_id", updateHotel);
router.delete("/:hotel_id", deleteHotel);

export default router;
