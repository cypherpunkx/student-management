import express from "express";
import SubjectController from "../controllers/SubjectController";

const router = express.Router();

router.get("/", SubjectController.Index);
router.get("/create", SubjectController.CreatePage);
router.post("/create", SubjectController.Create);

export default router;
