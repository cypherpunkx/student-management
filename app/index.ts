import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import ejs from "ejs";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import flash from "connect-flash";
import HomeRoute from "./routes/home";
import StudentRoute from "./routes/student";
import moment from "moment";

moment.locale("id");

const app = express();
app.engine(".html", ejs.renderFile);
app.use(morgan("dev"));
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(expressLayouts);
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use((req, res, next) => {
  res.locals.messages = req.flash(); // Simpan pesan ke dalam locals
  next();
});

app.use("/", HomeRoute);
app.use("/student", StudentRoute);

export default app;
