import { Request, Response } from "express";
import { fakerID_ID as faker } from "@faker-js/faker";
import Student from "../models/Student";
import "../models/associations";
import { ValidationError } from "sequelize";

class StudentController {
  static async Index(req: Request, res: Response) {
    try {
      const students = await Student.findAll();

      res.render("student/index", {
        data: students,
        layout: "layouts/main-layout",
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async CreatePage(req: Request, res: Response) {
    try {
      res.render("student/create", {
        layout: "layouts/main-layout",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async Create(req: Request, res: Response) {
    try {
      const {
        nim,
        nama,
        tgl_lahir: tglLahir,
        alamat,
        gridRadios: jenisKelamin,
      } = req.body;

      await Student.create({
        nim,
        nama,
        tglLahir,
        alamat,
        jenisKelamin,
      });

      req.flash("message", ["success", "Data berhasil ditambahkan!"]);

      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  }

  static async DetailsPage(req: Request, res: Response) {
    try {
      const nim = req.params.id;

      const student = await Student.findOne({
        where: {
          nim,
        },
      });

      res.render("student/details", {
        data: student,
        layout: "layouts/main-layout",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async UpdatePage(req: Request, res: Response) {
    try {
      const nim = req.params.id;

      const student = await Student.findOne({
        where: {
          nim,
        },
      });

      res.render("student/update", {
        data: student,
        layout: "layouts/main-layout",
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async Update(req: Request, res: Response) {
    try {
      const nim = req.params.id;
      const {
        nama,
        tgl_lahir: tglLahir,
        alamat,
        gridRadios: jenisKelamin,
      } = req.body;

      await Student.update(
        { nama, tglLahir, alamat, jenisKelamin },
        {
          where: {
            nim,
          },
        }
      );

      req.flash("message", ["success", "Data berhasil diperbaharui!"]);

      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  }

  static async Delete(req: Request, res: Response) {
    try {
      const nim = req.params.id;

      await Student.destroy({
        where: {
          nim,
        },
      });

      req.flash("message", ["danger", "Data berhasil dihapus!"]);

      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  }
}

export default StudentController;
