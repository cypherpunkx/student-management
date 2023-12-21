import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";
import { sequelize } from "../../configs";

class Student extends Model<
  InferAttributes<Student>,
  InferCreationAttributes<Student>
> {
  declare nim: string;
  declare nama: string;
  declare tglLahir: string;
  declare alamat: string;
  declare jenisKelamin: string;
}

Student.init(
  {
    nim: {
      type: new DataTypes.STRING(9),
      allowNull: false,
      primaryKey: true,
      validate: {
        len: {
          args: [9, 9],
          msg: "Hanya 9 karakter",
        },
      },
    },
    nama: {
      type: new DataTypes.STRING(25),
      allowNull: false,
      validate: {
        len: {
          args: [1, 25],
          msg: "Panjang 1 sampai 25 karakter",
        },
      },
    },
    tglLahir: {
      type: new DataTypes.DATE(),
      allowNull: false,
    },
    alamat: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    jenisKelamin: {
      type: new DataTypes.ENUM(),
      values: ["Laki-laki", "Perempuan"],
      allowNull: false,
    },
  },
  {
    tableName: "mahasiswa",
    underscored: true,
    sequelize, // passing the `sequelize` instance is required
  }
);

export default Student;
