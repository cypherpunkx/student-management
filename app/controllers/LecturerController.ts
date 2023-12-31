import { Request, Response } from "express";
import Lecturer from "../models/Lecturer";

class LecturerController {
  static async Index(req: Request, res: Response) {
    const lecturer = await Lecturer.findAll();

    res.render("lecturer/index", {
      data: lecturer,
      layout: "layouts/main-layout",
    });
  }

  static async CreatePage(req: Request, res: Response) {
    try {
      res.render("lecturer/create", {
        layout: "layouts/main-layout",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async Create(req: Request, res: Response) {
    try {
      const { nip, namaDosen } = req.body;

      await Lecturer.create({
        nip,
        namaDosen,
      });

      req.flash("message", ["success", "Data berhasil ditambahkan!"]);

      res.redirect("/lecturer");
    } catch (error) {
      console.log(error);
    }
  }
}

export default LecturerController;
