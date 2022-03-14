import React from "react"
import { Typography, Grid, Button } from "@mui/material"
import { Email, Phone, Whatsapp } from "mdi-material-ui"

const ContactButtons = () => {
  const methods = [
    {
      label: "Llámanos",
      secondary: "123 456 789",
      Icon: Phone,
      url: "tel:123456789",
    },
    {
      label: "WhatsApp",
      secondary: "123 456 789",
      Icon: Whatsapp,
      url: "https://wa.me/123456789",
    },
    {
      label: "Email",
      secondary: "elrincondeidiomas20@gmail.com",
      Icon: Email,
      url: "mailto:email@mail.com",
    },
  ]
  return (
    <>
      <Typography variant="lead" gutterBottom>
        Puede contactarnos a través de los siguientes métodos...
      </Typography>
      <Grid container spacing={1}>
        {methods.map(i => (
          <Grid item xs={12} md={4}>
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
