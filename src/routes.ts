import { Router } from "express";
import multer from "multer";
import { postUpload,profileUpload } from "./config/multer";

const routes = Router();

import usersController from "./controllers/UsersController";
import postsController from "./controllers/PostsController";
import authController from "./controllers/AuthController";

routes.post("/users",usersController.store);
routes.get("/users",usersController.index);
routes.post("/users/profile", multer(profileUpload).single("profile_image"), usersController.updateProfile);

routes.post("/posts", multer(postUpload).single("post_image"), postsController.store);
routes.get("/posts", postsController.index);

routes.post("/login", authController.login);

export default routes;
