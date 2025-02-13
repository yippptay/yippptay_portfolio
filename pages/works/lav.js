import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="LA Vapor Wholesale">
    <Container>
      <Title>
        LA Vapor Wholesale <Badge>2022-2024</Badge>
      </Title>
      <P>
      LA Vapor is one of the nation's leading wholesale distributors of electronic cigarettes 
      and vaporizers with top-tier products. We offer a vast variety of e-cigs, box mods, 
      vape kits, hardware, pod systems, and disposables. Additionally, we provide the latest 
      devices, accessories, alternatives, and vaping gear essentials to our clients.
      </P>
      <List ml={4} my={4}>

        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://lavaporwholesale.com">
            https://lavaporwholesale.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        {/* <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem> */}

        <ListItem>
          <Meta>Technologies</Meta>
          <span>Shopify, Shopify Admin, Shopify CLI</span>
        </ListItem>

        <ListItem>
          <Meta>Languages</Meta>
          <span>Liquid HTML, HTML, CSS, JavaScript, GraphQL, Shopify API</span>
        </ListItem>

        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}

      </List>

      <WorkImage src="/images/works/lavaporwholesale_03.png" alt="Lavapor" />
      <WorkImage src="/images/works/lavaporwholesale_02.png" alt="Lavapor" />
      <WorkImage src="/images/works/lavaporwholesale_01.png" alt="Lavapor" />

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
