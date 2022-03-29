import express from "express";

import { createSuite, getSuite, getSuites, updateSuite, deleteSuite} from "../controllers/suites.js";

const router = express.Router();

router.get("/:hotel_id", getSuites);
router.get("/:suite_id", getSuite );
router.post("/:hotel_id", createSuite );
router.put("/:suite_id", updateSuite);
router.delete("/:suite_id", deleteSuite );

export default router;





