import { Request, Response } from "express";

export const tuning = (req: Request, res: Response) => {
    let title: string = 'Tuning | onflowGo';
    return res.render('pages/tuning', { title });
}