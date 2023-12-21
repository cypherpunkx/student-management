import { Request, Response } from "express";
import { fakerID_ID as faker } from "@faker-js/faker";
import moment from "moment";

moment.locale("id");

import "../models/associations";

class HomeController {
  static async Index(req: Request, res: Response) {
    try {
      res.render("index", {
        time: moment().calendar(),
        layout: "layouts/main-layout",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default HomeController;
