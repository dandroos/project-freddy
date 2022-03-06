import { Typography } from "@mui/material"
import React from "react"

const Footer = () => {
  return (
    <>
      <Typography variant="caption" display="block" align="center ">
        All content &copy;{" "}
        {(() => {
          const currentYear = new Date().getFullYear()
          return currentYear === 2022 ? `2022 ` : `2022 - ${currentYear} `
        })()}
        David Andrews
      </Typography>
    </>
  )
}

export default Footer
