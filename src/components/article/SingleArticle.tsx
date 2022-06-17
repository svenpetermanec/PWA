import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Article } from '../../redux/models/articleModel';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const SingleArticle = ({ article }: { article: Article }) => {
  const [image, setImage] = useState<string>();

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
    <Box h='88vh' bg='gray.200' w='90vw' p={5}>
      <VStack>
        <Text fontWeight='bold' fontSize='25'>
          {article?.title}
        </Text>
        <Image src={image} draggable={false} />
        <Text>{article?.description}</Text>
        <Text>{article?.content}</Text>
      </VStack>
    </Box>
  );
};
