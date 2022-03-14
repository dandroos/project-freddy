import { Dialog, Fab, Portal, Slide } from "@mui/material"
import { Close } from "mdi-material-ui"
import React from "react"
import { connect } from "react-redux"
import { setMobileMenu } from "../redux/actions"
import NavMenu from "./NavMenu"

const MobileMenu = ({ dispatch, isOpen }) => {
  const handleClose = () => {
    dispatch(setMobileMenu(false))
  }

  return (
    <Portal>
      <Dialog
        fullScreen
        TransitionComponent={Slide}
        open={isOpen}
        onClose={handleClose}
      >
        <Fab
          color="secondary"
          sx={{ position: "absolute", right: 15, top: 15 }}
          onClick={handleClose}
        >
          <Close />
        </Fab>
        <NavMenu />
      </Dialog>
    </Portal>
  )
}

const stp = s => ({
  isOpen: s.mobileMenu,
})

export default connect(stp)(MobileMenu)
