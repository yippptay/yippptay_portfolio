import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Taylor Yip. All Rights Reserved. <a target="_blank" href="https://github.com/craftzdog/craftzdog-homepage">View Source</a>
    </Box>
  )
}

export default Footer
