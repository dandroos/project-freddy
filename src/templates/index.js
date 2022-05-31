import "react-responsive-carousel/lib/styles/carousel.min.css"

import {
  Box,
  Button,
  Container,
  Typography,
  rgbToHex,
  useTheme,
} from "@mui/material"
import { Emoticon, Information } from "mdi-material-ui"
import { Link, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import { Carousel } from "react-responsive-carousel"
import React from "react"
import Seo from "../components/seo"
import { connect } from "react-redux"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"

const Index = ({ data, siteReady }) => {
  const theme = useTheme()

  return (
    <>
      <Seo homepage />
      {siteReady && (
        <>
          <Carousel
            showThumbs={false}
            infiniteLoop
            showStatus={false}
            autoPlay={true}
            interval={6000}
            stopOnHover={false}
          >
            {data.file.childMarkdownRemark.frontmatter.slides.map(
              ({ slide }, ind) => {
                let bgImage = getImage(slide.image)
                bgImage = convertToBgImage(bgImage)
                return (
                  <BackgroundImage {...bgImage} alt="Hero image" key={ind}>
                    <Box
                      flexDirection="column"
                      display="flex"
                      minHeight="100vh"
                      width="100%"
                      alignItems="center"
                      justifyContent="center"
                      color={theme.palette.common.white}
                    >
                      <Container maxWidth="md">
                        <Typography variant="h2">{slide.heading}</Typography>
                        <Typography variant="lead" display="block" gutterBottom>
                          {slide.subheading}
                        </Typography>
                        <Button
                          size="large"
                          endIcon={(() => {
                            switch (slide.button.link) {
                              case 1:
                              case 2:
                                return <Information />
                            }
                          })()}
                          component={Link}
                          to={(() => {
                            switch (slide.button.link) {
                              case 1:
                                return `/cursos`
                              case 2:
                                return `/conocenos`
                              case 3:
                                return `/contactenos`
                              default:
                                return
                            }
                          })()}
                          color="secondary"
                        >
                          {slide.button.text}
                        </Button>
                      </Container>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={-50}
                      top={0}
                      bottom={0}
                      left={0}
                      right={0}
                      bgcolor={`${rgbToHex(theme.palette.primary.dark)}aa`}
                    />
                  </BackgroundImage>
                )
              }
            )}
          </Carousel>
        </>
      )}
    </>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
  siteReady: s.siteReady,
})

export default connect(stp)(Index)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    file(
      extension: { eq: "md" }
      sourceInstanceName: { eq: "content" }
      name: { eq: "homepage" }
    ) {
      childMarkdownRemark {
        frontmatter {
          slides {
            slide {
              button {
                text
                link
              }
              heading
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    quality: 90
                    transformOptions: {
                      duotone: { highlight: $light, shadow: $dark }
                    }
                  )
                }
              }
              subheading
            }
          }
        }
      }
    }
  }
`
