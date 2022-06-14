import {
  Alert,
  AlertTitle,
  Box,
  Dialog,
  DialogContent,
  Fab,
  Portal,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"

import BookingForm from "./BookingForm"
import { Close } from "mdi-material-ui"
import { connect } from "react-redux"
import { setBookingForm } from "../redux/actions"

const BookingFormDialog = ({ dispatch, isOpen, selected, form, isMobile }) => {
  const defaultFields = {
    type: "grupos",
    presentation: "",
    name: "",
    email: "",
    tel: "",
    studentName: "",
    thirdParty: "",
    studentAge: "",
    preferredStartTime: "",
    preferredFinishTime: "",
    preferredDay: "",
    selectedCourse: "",
  }
  const [fields, setFields] = useState(defaultFields)

  useEffect(() => {
    if (isOpen && selected) {
      setFields({ ...fields, selectedCourse: selected })
    } else {
      setFields(defaultFields)
    }
    //eslint-disable-next-line
  }, [isOpen])

  const handleClose = () => {
    dispatch(setBookingForm({ ...form, isOpen: false }))
  }

  return (
    <Portal>
      <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
        <Fab
          sx={{
            position: isMobile ? "fixed" : "absolute",
            zIndex: 500,
            top: 15,
            right: 25,
          }}
          color="secondary"
          onClick={handleClose}
        >
          <Close />
        </Fab>
        <DialogContent>
          <Box>
            <Typography variant="h3" align="center" gutterBottom>
              ¡Reservar ahora!
            </Typography>
            <Alert severity="warning" variant="filled">
              <AlertTitle>IMPORTANTE</AlertTitle>
              Su reserva no está confirmada hasta que le enviemos un correo
              electrónico de confirmación.
            </Alert>
          </Box>
          {/* <Grid container spacing={2}>
            <Grid item xs={12}>
              <RadioGroup
                name="type"
                row
                value={fields.type}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="grupos"
                  control={<Radio />}
                  label="Grupos"
                />
                <FormControlLabel
                  value="individuales"
                  control={<Radio />}
                  label="Individuales"
                />
              </RadioGroup>
            </Grid>
          </Grid> */}
          <BookingForm />
        </DialogContent>
      </Dialog>
    </Portal>
  )
}

const stp = s => ({
  isOpen: s.bookingForm.isOpen,
  selected: s.bookingForm.selectedCourse,
  form: s.bookingForm,
  isMobile: s.isMobile,
})

export default connect(stp)(BookingFormDialog)
