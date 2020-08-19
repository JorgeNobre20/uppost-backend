import { Router } from "express";
const routes = Router();

import usersController from "./controllers/UsersController";
import postsController from "./controllers/PostsController";

routes.post("/users",usersController.store);
routes.get("/users",usersController.index);

routes.post("/posts", postsController.store);
routes.get("/posts", postsController.index);

export default routes;
