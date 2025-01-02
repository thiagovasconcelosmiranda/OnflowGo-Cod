import { Request, Response } from "express";

export const cinebox = (req: Request, res: Response) => {
 return res.render('pages/cinebox');
}