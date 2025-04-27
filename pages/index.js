import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  Text,
  Flex,
} from '@chakra-ui/react'
import { 
  IoFolderOpen,
} from 'react-icons/io5'
import PhoneContact from '../components/phone-contact'
import EmailContact from '../components/email-contact'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
// import { IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png' 
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        boxShadow="md"
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer!
      </Box>

      <Box display={{ md: 'flex' }}>

        <Box
          flexShrink={0}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>

        <Box
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          mb={4}
          ml={{ md: 6 }}
        >
          
          <Heading as="h1" variant="page-title">
            Taylor Yip
          </Heading>

          <Flex color='gray'>
            <Text>Full-Stack Developer • Graphic Designer • Shopify Admin</Text>
          </Flex>

        </Box>

      </Box>

      <Section delay={0.3}>
        
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>

        <Paragraph>
          Hello! I specialize in creating seamless digital experiences that are both 
          functional and visually compelling. With a strong foundation in front-end and 
          back-end development, combined with a keen eye for design, I bridge the gap 
          between code and creativity.
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            boxShadow="lg"
            as={NextLink}
            href="/works"
            scroll={false}
            leftIcon={<IoFolderOpen/>}
            colorScheme="purple"
          >
            Works
          </Button>
        </Box>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>2018</BioYear>
          <b>Detailer & Graphic Designer</b> at <i>AeroWerkz</i>
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Graduated <i>General Assembly&apos;s</i> <b>Software Engineering Bootcamp</b>
        </BioSection>

        <BioSection>
          <BioYear>2021</BioYear>
          <b>Shipping Supervisor</b> at <i>SunYin</i>
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          <b>RMA Repair Specialist</b> at <i>Newegg</i>
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          <b>Web & App Developer and Shopify Admin</b> at <i>LA Vapor Wholesale</i>
        </BioSection>

        <BioSection>
          <BioYear>
            Curr.
          </BioYear>
          <b>Web Developer</b> at <i>DeltaMedia</i>
        </BioSection>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>

        <Flex
          justify="space-between"
        >

          {/* <Link href="https://github.com/yippptay" target="_blank">
            <Button
              variant="ghost"
              colorScheme="purple"
              leftIcon={<IoLogoGithub />}
            >
              yippptay
            </Button>
          </Link> */}

        </Flex>

        <PhoneContact />
        <EmailContact />

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;200k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

      </Section>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
