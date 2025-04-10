import Head from 'next/head'
// import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
// import VoxelDogLoader from '../voxel-dog-loader'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

const Main = ({ children, router }) => {
  return (
    <Box
      as="main"
      sx={{
        '@media only screen and (max-width: 600px)': {
          paddingBottom: '80px',
        },
      }}
      pb={8}
    >
      
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Homepage" />
        <meta name="author" content="Taylor Yip" />
        <meta name="author" content="yippptay" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Taylor Yip" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lmaoyip" />
        <meta name="twitter:creator" content="@lmaoyip" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Taylor Yip" />
        <meta name="og:title" content="Taylor Yip" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>yipman.dev</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container
        maxW="container.md"
        sx={{
          '@media only screen and (max-width: 600px)': {
            paddingTop: '20px',
          },
        }}
        pt={20}
      >
        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
