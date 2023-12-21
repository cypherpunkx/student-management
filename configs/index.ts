import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_student", "postgres", "admin", {
  host: "localhost",
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

// (async () => {
//   await sequelize.drop();
//   await sequelize.sync({
//     force: true,
//     alter: true,
//   });
// })();

export { sequelize };
