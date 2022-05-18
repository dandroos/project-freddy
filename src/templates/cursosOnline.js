import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"

import { InformationOutline } from "mdi-material-ui"
import Page from "../components/Page"
import React from "react"
import ReactMarkdown from "react-markdown"
import { connect } from "react-redux"
import { graphql } from "gatsby"

const Cursos = ({ data }) => {
  return (
    <Page
      title="Cursos Online"
      image={
        data.headerImageOnline.childMarkdownRemark.frontmatter.cursos_online
      }
    >
      <ReactMarkdown
        includeElementIndex
        components={{
          p: ({ node, index, siblingCount, ...props }) => {
            return (
              <Typography
                variant={index === 0 ? "lead" : undefined}
                paragraph={index !== siblingCount - 1}
              >
                {node.children.map((c, ind) => c.value)}
              </Typography>
            )
          },
          ul: ({ node }) => {
            return (
              <List>
                {node.children.map((n, ind) => {
                  if (n.tagName === "li") {
                    return (
                      <ListItem key={ind}>
                        <ListItemIcon>
                          <InformationOutline />
                        </ListItemIcon>
                        <ListItemText primary={n.children.map(n => n.value)} />
                      </ListItem>
                    )
                  } else {
                    return null
                  }
                })}
              </List>
            )
          },
          li: ({ ...props }) => (
            <ListItem>
              <ListItemIcon>
                <InformationOutline />
              </ListItemIcon>
              <ListItemText {...props} />
            </ListItem>
          ),
        }}
      >
        {data.onlineClassesText.childMarkdownRemark.frontmatter.online_classes}
      </ReactMarkdown>
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
    headerImageOnline: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          cursos_online {
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
