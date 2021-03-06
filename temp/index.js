import "react-responsive-carousel/lib/styles/carousel.min.css"

import {
  Box,
  Button,
  Container,
  Typography,
  rgbToHex,
  useTheme,
} from "@mui/material"
import { Link, graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import { Carousel } from "react-responsive-carousel"
import React from "react"
import Seo from "../components/seo"
import { connect } from "react-redux"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"

const Index = ({ isMobile }) => {
  let { slides } = useStaticQuery(graphql`
    {
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
                overlay
                subheading
              }
            }
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter

  const theme = useTheme()
  return (
    <>
      <Seo title="Inicio" />
      <Carousel
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        autoPlay={true}
        interval={6000}
        stopOnHover={false}
      >
        {slides.map(({ slide }, ind) => {
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
                color={(() => {
                  switch (slide.overlay) {
                    case "light":
                      return theme.palette.common.dark
                    case "dark":
                      return theme.palette.common.light
                    case "primary":
                      return theme.palette.primary.contrastText
                    case "secondary":
                      return theme.palette.secondary.contrastText
                    default:
                      return
                  }
                })()}
              >
                <Container maxWidth="md">
                  <Typography variant="h2">{slide.heading}</Typography>
                  <Typography variant="lead" display="block" gutterBottom>
                    {slide.subheading}
                  </Typography>
                  <Button
                    size="large"
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
                    color={(() => {
                      switch (slide.overlay) {
                        case "light":
                        case "dark":
                        case "secondary":
                          return "primary"
                        case "primary":
                          return "secondary"
                        default:
                          return
                      }
                    })()}
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
                bgcolor={`${rgbToHex(theme.palette.primary.dark)}bb`}
              />
            </BackgroundImage>
          )
        })}
      </Carousel>
    </>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Index)
