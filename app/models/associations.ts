import Lecturer from "./Lecturer";
import Lectures from "./Lectures";
import Student from "./Student";
import Subject from "./Subject";

Student.hasOne(Lectures);
Lectures.belongsTo(Student);
Lecturer.hasOne(Lectures);
Lectures.belongsTo(Lecturer);
Subject.hasOne(Lectures);
Lectures.belongsTo(Subject);
