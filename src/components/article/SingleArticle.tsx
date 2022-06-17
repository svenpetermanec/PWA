import { Image, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../redux/models/articleModel';

interface Props {
  article: Article;
}

export const SingleArticle = ({ article }: Props) => {
  const [image, setImage] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `http://localhost:4200/image/${article.image}`
      );
      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);

      setImage(() => imageObjectURL);
    };

    fetchImage();
  }, []);

  return (
    <VStack
      bg='white'
      boxShadow='0px 1px gray'
      onClick={() => navigate(`/article/${article.id}`)}
    >
      <Image src={image} draggable={false} maxH={280} />
      <Text textAlign='center' fontWeight='bold'>
        {article.title}
      </Text>
    </VStack>
  );
};
