import { Request, Response } from "express";

export const about = (req: Request, res: Response) => {
    let title: string = 'OnflowGo - filmes e series';
    let about: boolean = true;
    return res.render('pages/about', {about, title});
}