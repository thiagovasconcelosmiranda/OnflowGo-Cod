import { Request, Response } from "express";


export const home = (req: Request, res: Response) => {
    let title: string = 'Assista filmes e séries online | onflowGo';
    let home: boolean = true;
    return res.render('pages/home', {home, title});
}