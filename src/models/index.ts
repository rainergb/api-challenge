import { Sequelize } from "sequelize-typescript";
import { Person } from "./persons";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "dev_user",
  password: process.env.DB_PASS || "dev_password",
  database: process.env.DB_NAME || "dev_db",
  logging: false,
  models: [Person]
});

export default sequelize;
export { Person };
