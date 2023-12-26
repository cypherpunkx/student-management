import express from "express";
import LecturerController from "../controllers/LecturerController";

const router = express.Router();

router.get("/", LecturerController.Index);
router.get("/create", LecturerController.CreatePage);
router.post("/create", LecturerController.Create);

export default router;
