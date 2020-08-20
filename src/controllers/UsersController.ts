import { Request, Response } from "express";
import path from "path";
import fs from "fs";

import db from "../database/connection";

interface IUser{
    user_id: string;
    username: string;
    profile: string;
    postTotal: number; 
}

interface IPost{
    post_id: number;
    user_id: number;
}

class UsersController{

    async store(req: Request, res: Response){
        
        const username = req.body.username as string;
        const email = req.body.email as string;
        const password = req.body.password as string;

        if(!username || !email || !password){
            return res.status(400).json({ error: "creating a new user error" });
        }

        const [userAlreadyExists] = await db("users").where("email","=",email);

        if(userAlreadyExists){
            return res.status(400).json({ error: "This email is already registered" });   
        }

        try{
            
            await db("users").insert({ username, email, password });
            return res.status(201).send("");

        }catch(err){
            
            return res.status(400).json({ error: err });
        
        }


    }

    async index(req: Request, res: Response){
        
        try{
            
            const users = await db("users").select<IUser[]>(["*","users.id as user_id"]);
            const posts = await db("posts").select<IPost[]>(["id as post_id","user_id"]);   

            users.map( (user) => {

                let total = 0;
                
                posts.map( post => {
                    if(Number(post.user_id) === Number(user.user_id)){
                        total++;
                    }
                });         

                user.postTotal = total;

            } );
            
            return res.status(200).json(users);

        }catch(err){

            return res.status(404).json({ error: err });
        
        }


    }

    async updateProfile(req: Request, res: Response){

        const profile = req.file.filename as string;
        const userId = req.body.user_id as Number;

        if(!userId || !profile){
            return res.status(400).json({ error: "creating a new post error" });
        }

        try{

            const [user] = await db("users").where("id","=",userId).select<IUser[]>("*");
            
            if(user.profile === "default_profile.svg"){

                await db("users").update({ profile }).where("id","=",userId);
                return res.status(200).json({});

            }else{

                fs.unlink(path.resolve(__dirname, "..", "..", "upload", "profiles", user.profile), async (err) => {
                    if(err){
                        return res.status(400).json({ error: err })
                    }
                });

                await db("users").update({ profile }).where("id","=",userId);
                
                return res.status(200).json({});
            }
            

        }catch(err){
            return res.status(404).json({ error: err });
        }

    }

}

export default new UsersController();