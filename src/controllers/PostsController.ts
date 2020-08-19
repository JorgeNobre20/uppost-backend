import { Request, Response } from "express";

import db from "../database/connection";

class PostsController{

    async store(req:Request, res: Response){
        
        const user_id = req.body.user_id as number;
        const description = req.body.description as string;
        const post = req.file.filename as string;

        if(!user_id || !description || !post){
            return res.status(400).json({ error: "creating a new post error" });
        }

        try{
            await db("posts").insert({ user_id, description, post_image: post })
            return res.status(201).send("");
        }catch(err){
            return res.status(400).json({ error: err });
        }

    }   

    async index(req: Request, res: Response){

        const posts = await db("posts").join("users", "posts.user_id", "=", "users.id").select(["users.username","users.profile","posts.*"]);
        
        return res.status(200).json(posts)

    }

}

export default new PostsController();