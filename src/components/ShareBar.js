import { Box, IconButton, Typography } from "@mui/material"
import { Email, Facebook, Link, Twitter, Whatsapp } from "mdi-material-ui"
import React from "react"

const ShareBar = () => {
  return (
    <Box>
      <Typography variant="overline">Compartir</Typography>
      <IconButton color="facebook">
        <Facebook />
      </IconButton>
      <IconButton color="twitter">
        <Twitter />
      </IconButton>
      <IconButton color="whatsapp">
        <Whatsapp />
      </IconButton>
      <IconButton color="gmail">
        <Email />
      </IconButton>
      <IconButton>
        <Link />
      </IconButton>
    </Box>
  )
}

export default ShareBar
