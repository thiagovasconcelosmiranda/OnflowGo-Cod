import { Request, Response } from "express";

export const visionsat = (req: Request, res: Response) => {
 return res.render('pages/visionsat');
}