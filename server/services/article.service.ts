import { Article, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ArticleService {
  async create(articleDTO: Article) {
    const article = await prisma.article.create({ data: articleDTO });

    return article;
  }

  async getAll() {
    const articles = await prisma.article.findMany({
      where: { published: { equals: true } },
    });

    return articles;
  }

  async update(articleDTO: Article) {
    const updatedArticle = await prisma.article.update({
      where: { id: articleDTO.id },
      data: articleDTO,
    });

    return updatedArticle;
  }

  async deleteById(id: number) {
    await prisma.article.delete({ where: { id } });
  }
}
