import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
