import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex, Container, Text } from '../components'
import Logo from '../Logo'
import Badges from '../badges.md'
import Demo from '../Demo'
import GettingStarted from '../../getting-started.md'
import Docs from '../../README.md'
import Footer from '../Footer'

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default ({
  data: {
    site: {
      siteMetadata: meta
    }
  }
}) =>
  <div>
    <Box as='header'
      px={4}
      py={[ 5, 6 ]}
      bg='cyan'>
      <Flex>
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </Flex>
      <Flex>
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </Flex>
      <Text as='h1'
        fontSize={[6, 7, 8]}
        lineHeight='1.125'>
        {meta.title}
      </Text>
      <Text fontSize={[3, 4]} fontWeight='bold'>
        {meta.description}
      </Text>
      <Badges />
    </Box>
    <Container py={5}>
      <Demo />
      <GettingStarted />
      <Docs />
    </Container>
    <Footer />
  </div>