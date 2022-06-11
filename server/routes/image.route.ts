import { Router, Request, Response } from 'express';
import { asyncErrorHandler } from '../middleware/errorHandler';
import path from 'path';

export const image = Router();

image.get(
  '/:filename',
  asyncErrorHandler(async (req: Request, res: Response) => {
    const { filename } = req.params;
    const filePath = path.resolve(`${__dirname}/../images/${filename}`);

    return res.sendFile(filePath);
  })
);
