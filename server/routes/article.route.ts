import { Article } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { asyncErrorHandler } from '../middleware/errorHandler';
import { ArticleService } from '../services/article.service';
import multer from 'multer';

export const article = Router();

const ArticleServiceInstance = new ArticleService();

const imageUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../images`);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname);
    },
  }),
});

article.post(
  '/',
  imageUpload.single('image'),
  asyncErrorHandler(async (req: Request, res: Response) => {
    let articleDTO: Article = req.body;
    articleDTO.image = req.file?.filename!;
    articleDTO.published = req.body.published === 'true';

    const article = await ArticleServiceInstance.create(articleDTO);

    return res.status(201).json(article);
  })
);

article.get(
  '/',
  asyncErrorHandler(async (req: Request, res: Response) => {
    const articles = await ArticleServiceInstance.getAll();

    return res.status(200).json(articles);
  })
);
