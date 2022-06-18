import { Box, Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { SingleArticle } from '../components/article/SingleArticle';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { RootState } from '../redux/store';

export const AdminContainer = () => {
  const isAdmin = useSelector((state: RootState) => state.user.isAdmin);

  const allArticles = useSelector((state: RootState) => state.article.articles);
  console.log(allArticles);

  if (!isAdmin)
    return (
      <>
        <Header />
        <VStack h='88vh'>
          <Text>Nemate administracijska prava</Text>
        </VStack>
        <Footer />
      </>
    );

  return (
    <>
      <Header />
      <VStack h='88vh' overflow='scroll'>
        {allArticles.map((article, index) => (
          <SingleArticle key={index} article={article} adminView={true} />
        ))}
      </VStack>
      <Footer />
    </>
  );
};
