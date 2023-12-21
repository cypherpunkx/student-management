import { Request, Response } from "express";
import { fakerID_ID as faker } from "@faker-js/faker";
import Student from "../models/Student";

import "../models/associations";
import { ValidationError } from "sequelize";

class StudentController {
  static async Index(req: Request, res: Response) {
    try {
      await Student.bulkCreate([
        {
          nim: faker.string.alphanumeric({ length: 9 }),
          nama: faker.person.fullName(),
          tglLahir: faker.date.birthdate({ mode: "year" }).toString(),
          alamat: faker.location.streetAddress(),
          jenisKelamin: "Laki-laki",
        },
      ]);

      const students = await Student.findAll();

      console.log(req.flash());

      res.render("student/index", {
        messages: req.flash(),
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

      req.flash("success", "Data berhasil ditambahkan");

      res.redirect("/student");
    } catch (error) {
      if (error instanceof ValidationError) {
        req.flash("error", error.message);
      }
      res.redirect("/student");

      console.log(error);
    }
  }

  static async DetailsPage(req: Request, res: Response) {
    const nim = req.params.id;

    const student = await Student.findOne({
      where: {
        nim,
      },
    });

    try {
      res.render("student/details", {
        data: student,
        layout: "layouts/main-layout",
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        req.flash("error", error.message);
      }

      console.log(error);
    }
  }
}

export default StudentController;
