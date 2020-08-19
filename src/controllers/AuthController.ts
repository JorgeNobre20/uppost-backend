import { Request, Response, response } from "express";

import db from "../database/connection";

interface IUser{
    id: number;
    username: string;
    password: string | number;
    profile: string;
    post_total: number;
}

class AuthController{

    async login(req: Request, res: Response){

        const email = req.body.email as string;
        const password = req.body.password as string | number;

        const [user] = await db("users").where("email","=",email).select<IUser[]>("*");

        if(!user){
            return res.status(404).json({ error: "user is not registered" });
        }

        if(user.password !== password){
            return res.status(404).json({ error: "email or password is wrong" });
        }

        const [totPosts] = await db("posts").where("user_id","=",user.id).count("* as total");
        user.post_total = totPosts;

        return res.status(200).json(user);

    }

}

export default new AuthController();