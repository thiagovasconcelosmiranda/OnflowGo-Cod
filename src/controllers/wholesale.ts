import { Request, Response } from "express";

export const wholesale = (req: Request, res: Response) => {
    let title: string = 'Atacado | onflowGo';

    return res.render('pages/wholesale', { title });
}