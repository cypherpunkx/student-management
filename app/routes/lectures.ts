import express from "express";
import LecturesController from "../controllers/LecturesController";

const router = express.Router();

router.get("/", LecturesController.Index);
router.get("/create", LecturesController.CreatePage);
router.post("/create", LecturesController.Create);

export default router;
