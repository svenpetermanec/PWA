import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Links = [
  { title: 'POČETNA', link: '/' },
  { title: 'SPORT', link: '/category/sport' },
  { title: 'MARKET', link: '/category/market' },
  { title: 'UNOS', link: '/new' },
  { title: 'ADMINISTRACIJA', link: '/admin' },
];

const NavLink = ({ children, link }: { children: ReactNode; link: string }) => (
  <Link to={link}>{children}</Link>
);

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('red.500', 'red.900')}
        px={4}
        color='white'
        fontWeight='bold'
        h='7vh'
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            bg='red.500'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(({ title, link }) => (
                <NavLink key={title} link={link}>
                  {title}
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ title, link }) => (
                <NavLink key={title} link={link}>
                  {title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};
