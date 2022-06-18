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
import { Link, Navigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import z from 'zod';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../redux/actions/userAction';
import { LoggedInStateEnum } from '../redux/reducers/userReducer';

const linkStyle = {
  color: '#00B5D8',
};

const loginSchema = z.object({
  username: z.string().min(1, { message: 'Korisničko ime je obavezno' }),
  password: z.string().min(1, { message: 'Lozinka je obavezna' }),
});

export const LoginContainer = () => {
  const dispatch: AppDispatch = useDispatch();

  const loggedInState: LoggedInStateEnum = useSelector(
    (state: RootState) => state.user.loggedInState
  );

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (loginInfo: any) => {
    dispatch(loginUserThunk(loginInfo));
  };

  if (loggedInState === LoggedInStateEnum.LoggedIn)
    return <Navigate to={'/admin/panel'} />;

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
            Prijava
          </Button>
        </form>
        <Box>
          <Link style={linkStyle} to={'/register'}>
            Registracija
          </Link>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};
