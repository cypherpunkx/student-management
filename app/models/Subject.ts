import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";
import { sequelize } from "../../configs";

class Subject extends Model<
  InferAttributes<Subject>,
  InferCreationAttributes<Subject>
> {
  // declare id: CreationOptional<string>;
  declare kodeMk: string;
  declare namaMk: string;
  declare sks: number;
}

Subject.init(
  {
    kodeMk: {
      type: new DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true,
    },
    namaMk: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    sks: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
      validate: {
        max: {
          args: [2],
          msg: "Hanya 2 karakter",
        },
      },
    },
  },
  {
    tableName: "matakuliah",
    underscored: true,
    sequelize, // passing the `sequelize` instance is required
  }
);

export default Subject;
