import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";
import { sequelize } from "../../configs";

class Lecturer extends Model<
  InferAttributes<Lecturer>,
  InferCreationAttributes<Lecturer>
> {
  // declare id: CreationOptional<string>;
  declare nip: string;
  declare namaDosen: string;
}

Lecturer.init(
  {
    nip: {
      type: new DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
    },
    namaDosen: {
      type: new DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    tableName: "dosen",
    underscored: true,
    sequelize, // passing the `sequelize` instance is required
  }
);

export default Lecturer;
