import { Request, Response } from "express";
import db from "../database/connection";

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
        const users = await db("users");
        return res.json(users);
    }

}

export default new UsersController();