import express from "express";
import morgan from "morgan";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(routes);

app.listen(3333,() => console.log("Server running..."));