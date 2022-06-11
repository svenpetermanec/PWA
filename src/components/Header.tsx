import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  { title: 'POČETNA', link: '' },
  { title: 'SPORT', link: '' },
  { title: 'KATEGORIJA' },
  { title: 'KATEGORIJA2' },
  { title: 'ADMINISTRACIJA' },
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    href={'#'}
  >
    {children}
  </Link>
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
              {Links.map(({ title }) => (
                <NavLink key={title}>{title}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ title }) => (
                <NavLink key={title}>{title}</NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};
