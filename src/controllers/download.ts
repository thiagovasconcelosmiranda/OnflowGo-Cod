import { Request, Response } from "express";


export const download = (req: Request, res: Response) => {
 let title: string = 'Download | onflowGo';
 let download: boolean = true;
 return res.render('pages/download', {download, title});
}