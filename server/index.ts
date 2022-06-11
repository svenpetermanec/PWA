import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { article } from './routes/article.route';

const app = express();

app.use(express.json());

app.use('/article', article);

app.use(errorHandler);

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
