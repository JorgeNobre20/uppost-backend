import multer from "multer";
import path from "path";
import crypto from "crypto";
import { Express } from "express";

export const postUpload = {
    
    dest: path.resolve(__dirname, "..", "..", "upload", "posts"), // Caminho padrão para salvar a imagem
    storage: multer.diskStorage({

        destination: (req: Express.Request, file: Express.Multer.File, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "upload", "posts"));
        }, // Local onde será salvo o arquivo

        filename: (req: Express.Request, file:Express.Multer.File, cb) => {

            crypto.randomBytes(16, (err,hash) => {
            
                if(err) {
                    cb(err,file.filename);
                }

                const fileName = `${hash.toString("hex")}-${file.originalname}`;
                
                cb(null, fileName);
            })

        } //  // Encriptando o nome da imagem

    }),

    limits: {
        fileSize: 3 * 1024 * 1024
    }, // Definindo limite de tamanho para imagem

    fileFilter: (req: Express.Request, file: Express.Multer.File, cb: Function) => {
        
        const allowedImages = ["image/jpeg","image/png","image/pjpeg","image/gif"];

        if(allowedImages.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error("Invalid file type"));
        }

    } // Definindo tiposa aceitos na aplicação

};
