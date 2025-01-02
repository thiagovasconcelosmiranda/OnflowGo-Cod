import { Request, Response } from "express";

export const support = (req: Request, res: Response) => {
    let title: string = 'Suporte | OnflowGo';
    let support: boolean = true;
 return res.render('pages/support', {support, title});
}