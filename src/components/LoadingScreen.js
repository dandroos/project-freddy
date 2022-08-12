import { Box, CircularProgress } from "@mui/material"

import React from "react"
import { connect } from "react-redux"

const LoadingScreen = ({ ready }) => {
  return (
    !ready && (
      <Box
        position="fixed"
        bgcolor="common.white"
        color="common.black"
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex={5000}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress
          color="secondary"
          size={120}
          sx={{ display: "block" }}
        />
      </Box>
    )
  )
}
const stp = s => ({
  ready: s.siteReady,
})

export default connect(stp)(LoadingScreen)
