import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteArticleThunk } from '../../redux/actions/articlesAction';
import { Article } from '../../redux/models/articleModel';
import { AppDispatch } from '../../redux/store';

interface Props {
  article: Article;
  adminView?: boolean;
}

export const SingleArticle = ({ article, adminView }: Props) => {
  const [image, setImage] = useState<string>();

  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

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
  console.log(adminView);

  return (
    <Box h='88vh' bg='gray.200' w='90vw' p={5}>
      <VStack>
        <HStack>
          <Text fontWeight='bold' fontSize='25'>
            {article?.title}
          </Text>
          {adminView && (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg='gray.200'
              />
              <MenuList>
                <MenuItem onClick={() => navigate(`/new/${article.id}`)}>
                  Uredi
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    dispatch(deleteArticleThunk({ id: article.id! }))
                  }
                >
                  Izbriši
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
        <Image src={image} draggable={false} />
        <Text>{article?.description}</Text>
        <Text>{article?.content}</Text>
      </VStack>
    </Box>
  );
};
