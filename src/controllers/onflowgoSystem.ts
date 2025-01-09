import { Request, Response } from "express";

export const system = (req: Request, res: Response) => {
    let title: string = 'Assista filmes e séries online | onflowGo';
    
    return res.render('pages/onflowgosystem', { title });
}