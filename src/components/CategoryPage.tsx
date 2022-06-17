import { Box, Center, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Article } from '../redux/models/articleModel';
import { articlesByCategory } from '../redux/selectors/articleSelector';
import { SingleArticle } from './article/SingleArticle';
import { Footer } from './Footer';
import { Header } from './Header';

export const CategoryPage = () => {
  const { category } = useParams();

  const categoryArticles: Article[] | undefined = useSelector(
    articlesByCategory(category!)
  );

  useEffect(() => {}, [category]);

  console.log(categoryArticles);

  return (
    <Box key={category}>
      <Header />
      <VStack h='88vh' overflow='scroll'>
        {categoryArticles?.map((article, index) => (
          <SingleArticle key={index} article={article} />
        ))}
      </VStack>
      <Footer />
    </Box>
  );
};
