import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  ForeignKey,
  CharDataType,
  NonAttribute,
  Association,
  //   CharDataType,
} from "sequelize";
import Student from "./Student";
import { sequelize } from "../../configs";
import Lecturer from "./Lecturer";
import Subject from "./Subject";

class Lectures extends Model<
  InferAttributes<Lectures>,
  InferCreationAttributes<Lectures>
> {
  // declare id: CreationOptional<string>;
  declare nim: ForeignKey<Student["nim"]>;
  declare nip: ForeignKey<Lecturer["nip"]>;
  declare kodeMk: ForeignKey<Subject["kodeMk"]>;
  declare nilai: CharDataType;
  declare Student?: NonAttribute<Student>;
  declare Lecturer?: NonAttribute<Lecturer>;
  declare Subject?: NonAttribute<Subject>; // Note this is optional since it's only populated when explicitly requested in code

  declare static associations: {
    Student: Association<Lectures, Student>;
    Lecturer: Association<Lectures, Lecturer>;
    Subject: Association<Lectures, Subject>;
  };
}

Lectures.init(
  {
    nim: {
      type: DataTypes.STRING,
      field: "student_nim",
    },
    nip: {
      type: DataTypes.STRING,
      field: "lecturer_nip",
    },
    kodeMk: {
      type: DataTypes.STRING,
      field: "subject_kode_mk",
    },
    nilai: {
      type: new DataTypes.CHAR(1),
      allowNull: false,
    },
  },
  {
    tableName: "perkuliahan",
    underscored: true,
    sequelize, // passing the `sequelize` instance is required
  }
);

Student.hasOne(Lectures);
Lectures.belongsTo(Student);
Lecturer.hasOne(Lectures);
Lectures.belongsTo(Lecturer);
Subject.hasOne(Lectures);
Lectures.belongsTo(Subject);

export default Lectures;
