import {
  Box,
  Button,
  Container,
  Typography,
  rgbToHex,
  useTheme,
} from "@mui/material"

import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import { Phone } from "mdi-material-ui"
import React from "react"
import { connect } from "react-redux"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"

const Page = ({ children, isMobile, title, image, noCTA }) => {
  const bgImage = convertToBgImage(getImage(image))
  const theme = useTheme()
  return (
    <>
      <BackgroundImage
        {...bgImage}
        placeholder="blurred"
        alt="El Rincón de Idiomas"
      >
        <Box width="100%" height={isMobile ? 200 : 400}>
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bgcolor={`${rgbToHex(theme.palette.primary.dark)}88`}
          />
          <Box
            width="100%"
            pt={2}
            sx={{
              position: "absolute",
              bottom: 0,
              background: `linear-gradient(to top, ${rgbToHex(
                theme.palette.primary.dark
              )}ee, transparent)`,
              color: theme.palette.common.white,
            }}
          >
            <Container>
              <Typography variant="h1" variantMapping={{ h1: "h2" }}>
                {title}
              </Typography>
            </Container>
          </Box>
        </Box>
      </BackgroundImage>
      <Container maxWidth="md" sx={{ mt: 2 }}>
        {children}
        {!noCTA && (
          <Box my={2} textAlign="center">
            <Typography variant="caption" display="block">
              Para más información...
            </Typography>
            <Button component={Link} to="/contactenos" startIcon={<Phone />}>
              Contáctenos
            </Button>
          </Box>
        )}
      </Container>
    </>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Page)
