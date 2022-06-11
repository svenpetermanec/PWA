import { Container, Flex, Stack, Text, Box, Center } from '@chakra-ui/react';

export const Footer = () => (
  <Flex
    bg='gray.500'
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='5vh'
  >
    <Text color='white'>
      {' '}
      &copy; {new Date().getFullYear()} Sven Petermanec
    </Text>
  </Flex>
);
