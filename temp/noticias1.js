import {
  Box,
  CardActionArea,
  Divider,
  Grid,
  Typography,
  Link as MLink,
  Pagination,
} from "@mui/material"
import { graphql, Link, navigate } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import moment from "moment"
import "moment/locale/es"
import React from "react"
import { connect } from "react-redux"
import Page from "../components/Page"

const Noticias = ({ data, pageContext, isMobile }) => {
  const { numPages, currentPage } = pageContext
  const articles = data.pagination.nodes.map(article => {
    return {
      date: article.childMarkdownRemark.frontmatter.date,
      title: article.childMarkdownRemark.frontmatter.title,
      img: getImage(article.childMarkdownRemark.frontmatter.featured_image),
      excerpt: article.childMarkdownRemark.excerpt,
      slug: `/noticias${article.childMarkdownRemark.fields.slug}`,
    }
  })
  return (
    <Page title="Noticias">
      <Grid container spacing={4}>
        {articles.map((i, ind) => (
          <Grid item xs={12} md={ind === 0 ? 12 : 6}>
            <CardActionArea component={Link} to={i.slug}>
              <Grid container>
                <Grid item xs={12} md={ind === 0 ? 3 : 4}>
                  <GatsbyImage image={i.img} aspectRatio={4 / 3.5} />
                </Grid>
                <Grid item xs={12} md={ind === 0 ? 9 : 8}>
                  <Box position="relative" p={1} px={isMobile ? 0 : 1}>
                    <Typography variant={ind === 0 ? "h3" : "h4"}>
                      {i.title}
                    </Typography>
                    <Typography
                      display="block"
                      gutterBottom
                      variant="caption"
                      color="text.secondary"
                    >
                      {moment(i.date).format("LL")}
                    </Typography>
                    <Typography variant={ind === 0 ? "lead" : undefined}>
                      {`${i.excerpt} `}
                      <MLink
                        underline="hover"
                        variant="overline"
                        component={Link}
                        to={i.slug}
                      >
                        Leer más
                      </MLink>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardActionArea>
            {isMobile && ind !== articles.length - 1 && (
              <Divider sx={{ mt: 1 }} />
            )}
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{ mt: 3, mb: 1, display: "flex", justifyContent: "center" }}
        count={numPages}
        page={currentPage}
        onChange={(_, v) => {
          if (v === 1) {
            navigate(`/noticias`)
          } else {
            navigate(`/noticias/${v}`)
          }
        }}
      />
    </Page>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Noticias)

export const homeQuery = graphql`
  query homeQuery($skip: Int!, $limit: Int!) {
    pagination: allFile(
      limit: $limit
      skip: $skip
      filter: {
        sourceInstanceName: { eq: "articles" }
        extension: { eq: "md" }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        childMarkdownRemark {
          fields {
            slug
          }
          id
          frontmatter {
            title
            featured_image {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.14)
              }
            }
            date
          }
          html
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
