import { Box, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Article } from '../redux/models/articleModel';
import { articlesByCategory } from '../redux/selectors/articleSelector';
import { SingleArticle } from '../components/article/SingleArticle';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const CategoryContainer = () => {
  const { category } = useParams();

  const categoryArticles: Article[] | undefined = useSelector(
    articlesByCategory(category!)
  );

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
