import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  List,
  ListItem,
  ListItemText,
  Modal,
  Portal,
} from "@mui/material"
import { setClasesDialog } from "../redux/actions"
import React from "react"
import { connect } from "react-redux"

const Clases = ({ dispatch, isOpen, classes, text }) => {
  const handleClose = () => {
    dispatch(setClasesDialog(false))
  }

  const Clase = ({ name, days, time }) => (
    <ListItem divider>
      <ListItemText
        primary={<strong>{name}</strong>}
        secondary={
          <div>
            <div>{days}</div>
            <div>
              <small>{time}</small>
            </div>
          </div>
        }
      />
    </ListItem>
  )
  return (
    <Box>
      <Portal>
        <Dialog maxWidth="xs" fullWidth open={isOpen} onClose={handleClose}>
          <Fab
            sx={{ position: "absolute", top: 10, right: 10 }}
            size="small"
            color="error"
            onClick={handleClose}
          >
            X
          </Fab>
          <DialogTitle>{text.clases_title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <small>{text.clases_intro}</small>
              <List>
                {classes.map(({ clase }) => {
                  return (
                    <Clase
                      name={clase.name}
                      days={clase.days}
                      time={clase.time}
                    />
                  )
                })}
              </List>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Portal>
      <Box mb={2}>
        <Button
          fullWidth
          size="large"
          color="secondary"
          onClick={() => dispatch(setClasesDialog(true))}
        >
          {text.clases_button_text}
        </Button>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => ({
  ...state,
  isOpen: state.clases.isOpen,
})

export default connect(mapStateToProps)(Clases)
