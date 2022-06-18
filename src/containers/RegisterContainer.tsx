import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import z from 'zod';
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';

const linkStyle = {
  color: '#00B5D8',
};

const registerSchema = z.object({
  username: z.string().min(1, { message: 'Korisničko ime je obavezno' }),
  password: z.string().min(1, { message: 'Lozinka je obavezna' }),
});

export const RegisterContainer = () => {
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (registerInfo: any) => {
    //dispatch(registerUserThunk(registerInfo));
    navigate('/admin');
  };

  return (
    <>
      <Header />
      <Flex
        h='88vh'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.username} my={2}>
            <Input
              type='text'
              placeholder='Korisničko ime'
              {...register('username')}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password} my={2}>
            <Input
              type='password'
              placeholder='lozinka'
              {...register('password')}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type='submit'
            variant='solid'
            colorScheme='red'
            width='full'
            my={2}
          >
            Registracija
          </Button>
        </form>
      </Flex>
      <Footer />
    </>
  );
};
