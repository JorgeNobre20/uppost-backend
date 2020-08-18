import { Router } from "express";
const routes = Router();

import usersController from "./controllers/UsersController";

routes.post("/users",usersController.store);
routes.get("/users",usersController.index);

export default routes;
