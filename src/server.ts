import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(routes);
app.use(cors());

app.listen(3333,() => console.log("Server running..."));