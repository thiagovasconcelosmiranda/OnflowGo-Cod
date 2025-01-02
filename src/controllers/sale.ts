import { Request, Response } from "express";

export const sale = (req: Request, res: Response) => {
    let title: string = 'IPTV Streaming Services for Movies and Series';
    let sale: boolean = true;
    return res.render('pages/sales', { sale, title });
}