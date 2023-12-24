import express from "express";
import LecturerController from "../controllers/LecturerController";

const router = express.Router();

router.get("/", LecturerController.Index);

export default router;
