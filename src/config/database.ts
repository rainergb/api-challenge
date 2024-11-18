import { Sequelize } from "sequelize-typescript";
import { Person } from "../models";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [Person]
});

export default sequelize;
