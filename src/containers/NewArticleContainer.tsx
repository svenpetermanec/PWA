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
import { useDispatch } from 'react-redux';
import { addArticleThunk } from '../redux/actions/articlesAction';

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

export const NewArticleContainer = () => {
  const dispatch: AppDispatch = useDispatch();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: zodResolver(articleSchema) });

  const onSubmit = (article: any) => {
    //ignore this pls :)
    const form = new FormData();
    form.append('title', article.title);
    form.append('description', article.description);
    form.append('content', article.content);
    form.append('image', article.image[0]);
    form.append('category', article.category);
    form.append('published', article.published);

    dispatch(addArticleThunk(form));
  };

  return (
    <>
      <Header />
      <Stack h='88vh' p={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.title} my={2}>
            <Input type='text' placeholder='Naslov' {...register('title')} />
            <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.description} my={2}>
            <Textarea
              placeholder='Kratki sadržaj'
              {...register('description')}
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.content} my={2}>
            <Textarea placeholder='Sadržaj' {...register('content')} />
            <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.image} my={2}>
            <FileUpload register={register('image')}>
              <Button colorScheme='gray' borderRadius={50}>
                <Text color='red.500'>Odaberi sliku</Text>
              </Button>
            </FileUpload>
            <FormErrorMessage>
              {errors.image?.FileList.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.category} my={2}>
            <Select placeholder='Kategorija' {...register('category')}>
              <option value='sport'>Sport</option>
              <option value='market'>Market</option>
            </Select>
            <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
          </FormControl>

          <Flex justifyContent='space-between'>
            <Checkbox colorScheme='green' {...register('published')}>
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
