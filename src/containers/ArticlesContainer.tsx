import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesThunk } from '../redux/actions/articlesAction';
import { Article } from '../redux/models/articleModel';
import { HomepageArticle } from '../components/article/HomepageArticle';
import { articlesByCategory } from '../redux/selectors/articleSelector';

export const ArticlesContainer = () => {
  const dispatch: AppDispatch = useDispatch();

  const sportArticles: Article[] | undefined = useSelector(
    articlesByCategory('sport')
  );

  const marketArticles: Article[] | undefined = useSelector(
    articlesByCategory('market')
  );

  useEffect(() => {
    dispatch(getArticlesThunk({ category: 'sport' }));
    dispatch(getArticlesThunk({ category: 'market' }));
  }, []);

  return (
    <Box h='88vh' display='flex' justifyContent='center' alignItems='center'>
      <Box bg='gray.300' h='80vh' w='90vw' p={7}>
        <Heading>Sport</Heading>
        <Divider orientation='horizontal' mb={2} />
        <Flex justifyContent='space-between'>
          {sportArticles?.slice(0, 3).map((article: Article) => (
            <HomepageArticle key={article.id} article={article} />
          ))}
        </Flex>

        <Heading mt={8}>Market</Heading>
        <Divider orientation='horizontal' mb={2} />
        <Flex justifyContent='space-between'>
          {marketArticles?.slice(0, 3).map((article: Article) => (
            <HomepageArticle key={article.id} article={article} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
