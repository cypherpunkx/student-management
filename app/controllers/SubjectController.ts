import { Request, Response } from "express";
import Subject from "../models/Subject";

class SubjectController {
  static async Index(req: Request, res: Response) {
    const subject = await Subject.findAll();

    res.render("subject/index", {
      data: subject,
      layout: "layouts/main-layout",
    });
  }

  static async CreatePage(req: Request, res: Response) {
    try {
      res.render("subject/create", {
        layout: "layouts/main-layout",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async Create(req: Request, res: Response) {
    try {
      const { kodeMk, namaMk, sks } = req.body;

      await Subject.create({
        kodeMk,
        namaMk,
        sks,
      });

      req.flash("message", ["success", "Data berhasil ditambahkan!"]);

      res.redirect("/subject");
    } catch (error) {
      console.log(error);
    }
  }
}

export default SubjectController;
