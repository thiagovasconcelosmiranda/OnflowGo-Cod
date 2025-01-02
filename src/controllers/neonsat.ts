import { Request, Response } from "express";

export const neonsat = (req: Request, res: Response) => {
 return res.render('pages/neonsat');
}