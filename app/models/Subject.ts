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
        min: {
          args: [1],
          msg: "Minimal 1 SKS",
        },
        max: {
          args: [20],
          msg: "Maksimal 20 SKS",
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
