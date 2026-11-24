import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Coverland">
      <Container>
        <Title>
          Coverland <Badge variant='subtle' colorScheme='blue'>2025-2026</Badge>
        </Title>
        <P>
          Led a headless Next.js/React to native Shopify Plus (Dawn) migration for a 71,000+ SKU automotive catalog, replacing third-party infrastructure with a custom Liquid and ES6+ theme and keeping variant and catalog data accurate across collections.
        </P>
        <List ml={4} my={4}>
  
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://www.coverland.com">
                https://www.coverland.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
  
          {/* <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem> */}
  
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Hydrogen(Headless Shopify), Supabase</span>
          </ListItem>
  
          <ListItem>
            <Meta>Languages</Meta>
            <span>React, Liquid, JavaScript, TypeScript, PostgreSQL</span>
          </ListItem>
  
          {/* <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
  
        </List>
  
        <WorkImage src="/images/works/coverland_01.png" alt="Coverland" />
        <WorkImage src="/images/works/coverland_02.png" alt="Coverland" />
        <WorkImage src="/images/works/coverland_03.png" alt="Coverland" />

  
        {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  