import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FileUpload } from '../components/FileUpload';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Article } from '../redux/models/articleModel';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { AppDispatch } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  addArticleThunk,
  updateArticleThunk,
} from '../redux/actions/articlesAction';
import { useParams } from 'react-router-dom';
import { articleById } from '../redux/selectors/articleSelector';

const articleSchema = z.object({
  title: z
    .string()
    .min(5, { message: 'Naslov mora imat 5 do 30 znakova' })
    .max(30, { message: 'Naslov mora imat 5 do 30 znakova' }),
  description: z
    .string()
    .min(10, { message: 'Kratki sadržaj mora imat 10 do 100 znakova' })
    .max(100, { message: 'Kratki sadržaj mora imat 10 do 100 znakova' }),
  content: z.string().min(1, { message: 'Sadržaj je obavezan' }),
  image: z.any(),
  category: z.string().min(1, { message: 'Kategorija je obavezna' }),
});

export const NewArticleContainer = ({ adminView }: { adminView?: boolean }) => {
  const dispatch: AppDispatch = useDispatch();

  let article;

  if (adminView) {
    const { id } = useParams();
    article = useSelector(articleById(Number(id)));
  }

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(articleSchema),
  });

  const onSubmit = (article: any) => {
    //ignore this pls :)
    const form = new FormData();
    form.append('title', article.title);
    form.append('description', article.description);
    form.append('content', article.content);
    form.append('image', article.image[0]);
    form.append('category', article.category);
    form.append('published', article.published);

    if (adminView) {
      dispatch(updateArticleThunk(form));
    } else {
      dispatch(addArticleThunk(form));
    }
  };

  return (
    <>
      <Header />
      <Stack h='88vh' p={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.title as any} my={2}>
            <Input
              type='text'
              placeholder='Naslov'
              defaultValue={article?.title}
              {...register('title')}
            />
            <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.description as any} my={2}>
            <Textarea
              placeholder='Kratki sadržaj'
              defaultValue={article?.description}
              {...register('description')}
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.content as any} my={2}>
            <Textarea
              placeholder='Sadržaj'
              defaultValue={article?.content}
              {...register('content')}
            />
            <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.image as any} my={2}>
            <FileUpload register={register('image')}>
              <Button colorScheme='gray' borderRadius={50}>
                <Text color='red.500'>Odaberi sliku</Text>
              </Button>
            </FileUpload>
            <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.category as any} my={2}>
            <Select
              placeholder='Kategorija'
              defaultValue={article?.category}
              {...register('category')}
            >
              <option value='sport'>Sport</option>
              <option value='market'>Market</option>
            </Select>
            <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
          </FormControl>

          <Flex justifyContent='space-between'>
            <Checkbox
              colorScheme='green'
              defaultChecked={article?.published}
              {...register('published')}
            >
              Javno
            </Checkbox>

            <Button type='submit' colorScheme='red'>
              Objavi
            </Button>
          </Flex>
        </form>
      </Stack>
      <Footer />
    </>
  );
};
