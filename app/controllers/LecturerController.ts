import { Request, Response } from "express";

class DosenController {
  static async Index(req: Request, res: Response) {
    res.render("dosen/index", {
      layout: "layouts/main-layout",
    });
  }
}

export default DosenController;
