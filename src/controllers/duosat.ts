import { Request, Response } from "express";

export const duolsat = (req: Request, res: Response) => {
    let title: string = 'Duosat | onflowGo';
    return res.render('pages/duosat', { title });
}