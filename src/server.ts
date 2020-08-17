import express, { Request, Response, response } from "express";
const app = express();

app.get("/", (req: Request,res: Response) => {
    return res.send({ message: "Hello World" });
});

app.listen(3333,() => console.log("Server running..."));