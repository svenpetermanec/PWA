import { Article, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ArticleService {
  public async create(articleDTO: Article) {
    const article = await prisma.article.create({ data: articleDTO });

    return article;
  }

  public async getAll() {
    const articles = await prisma.article.findMany();

    return articles;
  }
}
