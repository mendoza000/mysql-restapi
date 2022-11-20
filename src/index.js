import express, { application } from "express";
import { PORT } from "./config.js";
import employeesRoute from "./routes/employees.routes.js";
// import indexRoute from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use("/api", employeesRoute);
// app.use(indexRoute);

app.listen(PORT, () => {
  console.log("Server listing on port ", PORT);
});
