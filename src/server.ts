import express from "express";
import routes from "./routes";
import sequelize from "./config/database";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

sequelize.sync().then(() => {
  console.log("Conectado ao banco de dados!");
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
