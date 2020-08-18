import { Request, Response } from "express";

import db from "../database/connection";

class PostsController{

    async store(req:Request, res: Response){
        
        const user_id = req.body.user_id as number;
        const description = req.body.description as string;
        const post = req.headers.file as string;

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

}

export default new PostsController();