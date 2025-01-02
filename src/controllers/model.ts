import { Request, Response } from "express";

export const model = (req: Request, res: Response) => {
    let title: string = 'Entre em contato conosco | onflowGo';
    let model: boolean = true;

    return res.render('pages/model', {model, title});
}