import { Button, Grid, Typography } from "@mui/material"
import { Email, Phone, Whatsapp } from "mdi-material-ui"
import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const ContactButtons = () => {
  const { phone_number, email_address } = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "contact" }
        name: { eq: "phone_and_email" }
        extension: { eq: "md" }
      ) {
        childMarkdownRemark {
          frontmatter {
            phone_number
            email_address
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter

  const phoneNumber = `${phone_number.slice(0, 3)} ${phone_number.slice(
    3,
    6
  )} ${phone_number.slice(6, 9)}`

  const methods = [
    {
      label: "Llámenos",
      secondary: phoneNumber,
      Icon: Phone,
      url: `tel:34${phone_number}`,
    },
    {
      label: "WhatsApp",
      secondary: phoneNumber,
      Icon: Whatsapp,
      url: `https://wa.me/34${phone_number}`,
    },
    {
      label: "Email",
      secondary: email_address,
      Icon: Email,
      url: `mailto:${email_address}`,
    },
  ]
  return (
    <>
      <Typography variant="lead" gutterBottom>
        Puede contactarnos a través de los siguientes métodos...
      </Typography>
      <Grid container spacing={1}>
        {methods.map((i, ind) => (
          <Grid item xs={12} md={4} key={ind}>
            <Button
              size="large"
              href={i.url}
              target="_blank"
              fullWidth
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <i.Icon sx={{ mt: 0.5 }} />
              {i.label}
              <Typography
                variant="caption"
                display="block"
                textTransform="lowercase"
              >
                {i.secondary}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ContactButtons
