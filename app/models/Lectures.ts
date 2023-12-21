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
  declare mahasiswa?: NonAttribute<Student>; // Note this is optional since it's only populated when explicitly requested in code
  declare dosen?: NonAttribute<Lecturer>; // Note this is optional since it's only populated when explicitly requested in code
  declare matakuliah?: NonAttribute<Subject>; // Note this is optional since it's only populated when explicitly requested in code

  declare static associations: {
    student: Association<Lectures, Student>;
    lecturer: Association<Lectures, Lecturer>;
    subject: Association<Lectures, Subject>;
  };
}

Lectures.init(
  {
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

export default Lectures;
