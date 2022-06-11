import { Router, Request, Response } from 'express';
import { asyncErrorHandler } from '../middleware/errorHandler';
import { UserService } from '../services/user.service';

export const user = Router();

const UserServiceInstance = new UserService();

user.post(
  '/register',
  asyncErrorHandler(async (req: Request, res: Response) => {
    const user = await UserServiceInstance.register(req.body);

    return res.status(201).json(user);
  })
);

user.post(
  '/login',
  asyncErrorHandler(async (req: Request, res: Response) => {
    const { status, message } = await UserServiceInstance.login(req.body);

    return res.status(status).json(message);
  })
);
