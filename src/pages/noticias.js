import {
  Box,
  CardActionArea,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import moment from "moment"
import "moment/locale/es"
import React from "react"
import { connect } from "react-redux"
import Page from "../components/Page"

const Noticias = ({ isMobile }) => {
  const articles = [
    {
      id: 1,
      title: `Test Post One`,
      date: new Date("02/14/2022"),
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet, numquam laudantium quidem quasi aspernatur voluptate architecto fuga nemo aut voluptatibus sunt et tempora repellendus sapiente, rem nam sequi porro dolor consequatur atque ad deleniti, in exercitationem? Nostrum ad praesentium esse iste quisquam qui officiis, veniam autem. Repellendus, quibusdam delectus?`,
    },
    {
      id: 2,
      title: `Test Post Two`,
      date: new Date("02/15/2022"),
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet, numquam laudantium quidem quasi aspernatur voluptate architecto fuga nemo aut voluptatibus sunt et tempora repellendus sapiente, rem nam sequi porro dolor consequatur atque ad deleniti, in exercitationem? Nostrum ad praesentium esse iste quisquam qui officiis, veniam autem. Repellendus, quibusdam delectus?`,
    },
    {
      id: 3,
      title: `Test Post Three`,
      date: new Date("02/26/2022"),
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet, numquam laudantium quidem quasi aspernatur voluptate architecto fuga nemo aut voluptatibus sunt et tempora repellendus sapiente, rem nam sequi porro dolor consequatur atque ad deleniti, in exercitationem? Nostrum ad praesentium esse iste quisquam qui officiis, veniam autem. Repellendus, quibusdam delectus?`,
    },
  ]
  const theme = useTheme()
  return (
    <Page title="Noticias">
      <Grid container spacing={4}>
        {articles.map((i, ind) => (
          <Grid item xs={12} md={ind === 0 ? 12 : 6}>
            <CardActionArea>
              <Grid container spacing={isMobile ? 0 : 2}>
                <Grid item xs={12} md={ind === 0 ? 3 : 4}>
                  <StaticImage
                    src="../images/placeholder.jpg"
                    aspectRatio={4 / 3.5}
                  />
                </Grid>
                <Grid item xs={12} md={ind === 0 ? 9 : 8}>
                  <Box py={isMobile ? 1 : 0}>
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
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsa architecto aliquam distinctio fugit doloremque? Porro
                      unde laudantium molestiae et sit...
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
    </Page>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Noticias)
