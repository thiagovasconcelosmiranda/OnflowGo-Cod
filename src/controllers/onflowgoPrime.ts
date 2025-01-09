import { Request, Response } from "express";

export const prime = (req: Request, res: Response) => {
    let title: string = 'Assista filmes e séries online | onflowGo';
    
    return res.render('pages/onflowgoprime', { title });
}