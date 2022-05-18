import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material"

import Page from "../components/Page"
import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import { setBookingForm } from "../redux/actions"

const Cursos = ({ data, dispatch, isMobile, courses }) => {
  const theme = useTheme()

  return (
    <Page
      title="Cursos Presenciales"
      image={data.headerImage.childMarkdownRemark.frontmatter.cursos}
    >
      <Typography variant="h3">Clases para niños y jóvenes</Typography>
      <Typography variant="lead">
        A continuación se enumeran nuestros cursos disponibles para el año
        académico 2022/2023.
      </Typography>
      <List>
        {courses.map((i, ind) => (
          <ListItem
            key={ind}
            divider={ind !== courses.length - 1}
            secondaryAction={
              !isMobile && (
                <Button
                  color="secondary"
                  size="large"
                  disabled={i.space !== "Yes"}
                  fullWidth
                  onClick={() => {
                    dispatch(
                      setBookingForm({ isOpen: true, selectedCourse: i.id })
                    )
                  }}
                >
                  {i.space === "Yes" ? `¡Reservar ahora!` : `No disponible`}
                </Button>
              )
            }
          >
            <Avatar
              sx={{
                height: 60,
                width: 60,
                backgroundColor: theme.palette.primary.dark,
                mr: 2,
              }}
            >
              {i.level[0] + i.level[1]}
            </Avatar>
            <ListItemText
              disableTypography
              primary={
                <>
                  <Typography fontWeight="bold" variant="overline">
                    Nivel: {i.level}
                  </Typography>
                  <Typography>
                    {`${i.days.join(" y ")} de ${i.start_time} a ${
                      i.finish_time
                    }`}
                  </Typography>
                </>
              }
              secondary={
                <>
                  <Typography variant="caption" display="block" gutterBottom>
                    para edades {i.min_age}
                    {i.max_age > 0 ? ` - ${i.max_age}` : ` +`}
                  </Typography>
                  {isMobile && (
                    <Button
                      color="secondary"
                      size="large"
                      disabled={i.space !== "Yes"}
                      fullWidth
                      onClick={() => {
                        dispatch(
                          setBookingForm({ isOpen: true, selectedCourse: i.id })
                        )
                      }}
                    >
                      {i.space === "Yes" ? `¡Reservar ahora!` : `No disponible`}
                    </Button>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Page>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
  courses: s.courses,
})

export default connect(stp)(Cursos)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          cursos {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.5
                placeholder: BLURRED
                quality: 90
                transformOptions: {
                  duotone: { highlight: $light, shadow: $dark }
                }
              )
            }
          }
        }
      }
    }
    onlineClassesText: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "courses" }
    ) {
      childMarkdownRemark {
        frontmatter {
          online_classes
        }
      }
    }
  }
`
