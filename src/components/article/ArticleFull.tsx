import { Box, Center, Image, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { articleById } from '../../redux/selectors/articleSelector';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const ArticleFull = () => {
  const [image, setImage] = useState<string>();
  const { id } = useParams();

  const article = useSelector(articleById(Number(id)));
  console.log(article);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `http://localhost:4200/image/${article!.image}`
      );
      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);

      setImage(() => imageObjectURL);
    };

    fetchImage();
  }, []);

  return (
    <>
      <Header />
      <Box h='88vh' bg='red'>
        <Box h='88vh' bg='white' w='45vw' p={5} ml={20}>
          <VStack>
            <Text fontWeight='bold' fontSize='25'>
              {article?.title}
            </Text>
            <Image src={image} draggable={false} />
            <Text>{article?.description}</Text>
            <Text>{article?.content}</Text>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
