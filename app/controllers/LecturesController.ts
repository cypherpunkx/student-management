import { Request, Response } from "express";
import Lectures from "../models/Lectures";
import Student from "../models/Student";
import Subject from "../models/Subject";

class LecturesController {
  static async Index(req: Request, res: Response) {
    const lectures = await Lectures.findAll({
      include: [
        Lectures.associations.Student,
        Lectures.associations.Lecturer,
        Lectures.associations.Subject,
      ],
    });

    console.log(lectures[1].Student);

    res.render("lectures/index", {
      data: lectures,
      layout: "layouts/main-layout",
    });
  }

  static async CreatePage(req: Request, res: Response) {
    try {
      const students = await Student.findAll({
        attributes: ["nim"],
      });

      const lecturer = await Lectures.findAll({
        attributes: ["nip"],
      });

      const subject = await Subject.findAll({
        attributes: ["kodeMk"],
      });

      res.render("lectures/create", {
        data: {
          students,
          lecturer,
          subject,
        },
        layout: "layouts/main-layout",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async Create(req: Request, res: Response) {
    try {
      const { nim, nip, kodeMk, nilai } = req.body;

      await Lectures.create({
        nim,
        nip,
        kodeMk,
        nilai,
      });

      req.flash("message", ["success", "Data berhasil ditambahkan!"]);

      res.redirect("/lectures");
    } catch (error) {
      console.log(error);
    }
  }
}

export default LecturesController;
