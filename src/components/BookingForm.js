import {
  Box,
  Dialog,
  DialogContent,
  Fab,
  FormControlLabel,
  Grid,
  Portal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"

import { Close } from "mdi-material-ui"
import GroupForm from "./GroupForm"
import IndividualForm from "./IndividualForm"
import { connect } from "react-redux"
import { setBookingForm } from "../redux/actions"

const BookingForm = ({
  dispatch,
  isOpen,
  selected,
  courses,
  form,
  isMobile,
}) => {
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

  const handleChange = e => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    })
  }

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
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              ¡Reservar ahora!
            </Typography>
            <Typography display="block" fontWeight="bold" variant="button">
              IMPORTANTE
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Su reserva no está confirmada hasta que le enviemos un correo
              electrónico de confirmación.
            </Typography>
          </Box>
          <Grid container spacing={2}>
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
          </Grid>
          {fields.type === "grupos" ? <GroupForm /> : <IndividualForm />}
        </DialogContent>
      </Dialog>
    </Portal>
  )
}

const stp = s => ({
  courses: s.courses,
  isOpen: s.bookingForm.isOpen,
  selected: s.bookingForm.selectedCourse,
  form: s.bookingForm,
  isMobile: s.isMobile,
})

export default connect(stp)(BookingForm)
