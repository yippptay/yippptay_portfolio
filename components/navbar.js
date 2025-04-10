import React from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Heading,
  Flex,
  Menu,
  MenuButton,
  IconButton,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  HStack,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { 
  IoLogoGithub,
  IoFolderOpen,
  IoHome,
} from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box
      boxShadow="md"
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      sx={{
        '@media only screen and (max-width: 600px)': {
          bottom: '-1px',
        },
      }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          
          <LinkItem
            href="/works"
            path={path}
            borderRadius="md"
          >
            Works
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://github.com/yippptay/yippptay_portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>

        </Stack>

        <Box flex={1} align="right">

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                onClick={onOpen}
              />

              <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerBody
                    bg="#2C323D"
                  >

                    <HStack
                      spacing={0}
                      gap={6}
                    >
                      <LinkItem
                        href="/"
                        path={path}
                        onClick={onClose}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        fontSize='md'
                        borderRadius="md"
                        style={{ gap: 4 }}
                        w="100%"
                      >
                        <IoHome />
                        About
                      </LinkItem>

                      <LinkItem
                        href="/works"
                        path={path}
                        onClick={onClose}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        fontSize='md'
                        borderRadius="md"
                        style={{ gap: 4 }}
                        w="100%"
                      >
                        <IoFolderOpen />
                        Works
                      </LinkItem>

                    </HStack>

                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
