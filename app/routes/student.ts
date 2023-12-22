import express from "express";
import StudentController from "../controllers/StudentController";

const router = express.Router();

router.get("/", StudentController.Index);
router.get("/create", StudentController.CreatePage);
router.post("/create", StudentController.Create);
router.get("/details/:id", StudentController.DetailsPage);
router.delete("/details/:id", StudentController.Delete);

export default router;
