import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';
import { article } from './routes/article.route';
import { user } from './routes/user.route';
import { image } from './routes/image.route';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/article', article);
app.use('/user', user);
app.use('/image', image);

app.use(errorHandler);

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
