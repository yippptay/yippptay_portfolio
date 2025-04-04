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
    <Layout title="AeroWerkZ">
      <Container>
        <Title>
          Aerowerkz <Badge variant='subtle' colorScheme='blue'>2018-2022</Badge>
        </Title>
        <P>
        Car detailing shop specializing in PPF , ceramic coatings, and vinyl wraps.
        </P>
        <List ml={4} my={4}>
  
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://www.aerowerkz.com/index.html">
                https://www.aerowerkz.com/index.html <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
  
          {/* <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem> */}
  
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Wordpress</span>
          </ListItem>
  
          <ListItem>
            <Meta>Languages</Meta>
            <span>HTML, CSS, JavaScript, PHP, MySQL</span>
          </ListItem>
  
          {/* <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
  
        </List>
  
        <WorkImage src="/images/works/aerowerkz_03.png" alt="Aerowerkz" />
        <WorkImage src="/images/works/aerowerkz_01.png" alt="Aerowerkz" />
        <WorkImage src="/images/works/aerowerkz_02.png" alt="Aerowerkz" />

  
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
  