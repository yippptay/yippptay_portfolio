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
            <Text>Full-Stack Developer • Shopify Specialist</Text>
          </Flex>

        </Box>

      </Box>

      <Section delay={0.3}>
        
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>

        <Paragraph>
          Full-Stack Developer and E-Commerce Specialist with 5+ years of experience building scalable web applications, Shopify storefronts, and digital products across startup and agency environments.
          Proficient across the full stack, including React, Node.js, Liquid, and REST/GraphQL APIs, with strong UX/UI and graphic design skills.
          Experienced managing the full e-commerce lifecycle: development, marketing, inventory, fulfillment, and customer service.
          Consistently delivers measurable gains in performance, SEO, and conversion.
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
          <BioYear>
            Curr.
          </BioYear>
          <b>E-Commerce Developer & Operations</b> at <i>DeltaMedia</i> (Contract, Part-Time)
        </BioSection>

        <BioSection>
          <BioYear>
            2025
          </BioYear>
          <b>Senior Shopify Developer</b> at <i>Coverland</i>, architected a custom Dawn theme replacing a headless frontend for a 71,000+ SKU catalog
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          <b>Full-Stack Shopify Developer & Administrator</b> at <i>LA Vapor Wholesale</i>, built a B2B Shopify Plus storefront, integrated ERP, app development, and dropshipping automation
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          <b>RMA Repair Technician</b> at <i>Newegg (ENIAC)</i>, hardware diagnostics and repair at high throughput
        </BioSection>

        <BioSection>
          <BioYear>2021</BioYear>
          <b>Shipping Supervisor</b> at <i>SunYin USA</i>, managed EDI transactions and logistics for major retail accounts during a transition period
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Graduated <i>General Assembly&apos;s</i> <b>Software Engineering Certificate</b>
        </BioSection>

        <BioSection>
          <BioYear>2018</BioYear>
          <b>Web Developer, Graphic Designer & Auto Detailer</b> at <i>AeroWerkz</i>, built and SEO-optimized the company site, designed brand identity assets
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

        {/* <PhoneContact /> */}
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
