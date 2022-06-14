import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material"
import React, { useState } from "react"

const BookingForm = () => {
  const defaultFields = {
    type: "",
    presentation: "",
    name: "",
    email: "",
    tel: "",
    thirdParty: false,
    studentName: "",
    studentAge: "",
    preferredStartTime: "",
    preferredFinishTime: "",
    preferredDay: "",
    comments: "",
    currentLevel: "",
  }

  const [fields, setFields] = useState(defaultFields)

  const handleChange = e => {
    if (e.target.name === "thirdParty") {
      setFields({
        ...fields,
        thirdParty: e.target.checked,
      })
    } else {
      setFields({
        ...fields,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "individual",
        ...fields,
      }),
    })
      .then(() => {
        // setToast({
        //   open: true,
        //   msg: data.contact_us_contact_form_message_sent[
        //     `contact_us_contact_form_message_sent_${language}`
        //   ],
        //   severity: "success",
        // })
        setFields(defaultFields)
      })
      .catch(
        () => {}
        //   setToast({
        //     open: true,
        //     msg: data.contact_us_contact_form_message_failed[
        //       `contact_us_contact_form_message_failed_${language}`
        //     ],
        //     severity: "error",
        //   })
        // )
      )
  }

  return (
    <form
      name="booking"
      action="#"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <Grid container spacing={1}>
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
        <Grid item xs={12} md={4}>
          <TextField
            name="name"
            label="Mi nombre"
            value={fields.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="email"
            type="email"
            label="Email"
            value={fields.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="tel"
            type="tel"
            label="Teléfono"
            value={fields.tel}
            required={false}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="thirdParty"
                checked={fields.thirdParty}
                onChange={handleChange}
              />
            }
            label="Estoy reservando esta clase en nombre de otra persona."
          />
        </Grid>
        {fields.thirdParty && (
          <>
            <Grid item xs={12} md={6}>
              <TextField
                name="studentName"
                label="El nombre del estudiante"
                value={fields.studentName}
                onChange={handleChange}
                required={fields.thirdParty}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="studentAge"
                type="number"
                label="La edad del estudiante"
                value={fields.studentAge}
                onChange={handleChange}
                required={fields.thirdParty}
              />
            </Grid>
          </>
        )}
        {fields.type === "individuales" && (
          <>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Preferencia de clase</FormLabel>
                <RadioGroup
                  name="presentation"
                  row
                  value={fields.presentation}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="enlinea"
                    control={<Radio />}
                    label="En línea"
                  />
                  <FormControlLabel
                    value="presenciales"
                    control={<Radio />}
                    label="Presenciales"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Día preferido</InputLabel>
                <Select
                  label="Día preferido"
                  name="preferredDay"
                  value={fields.preferredDay}
                  onChange={handleChange}
                >
                  <MenuItem value="Lunes">Lunes</MenuItem>
                  <MenuItem value="Martes">Martes</MenuItem>
                  <MenuItem value="Miércoles">Miércoles</MenuItem>
                  <MenuItem value="Jueves">Jueves</MenuItem>
                  <MenuItem value="Viernes">Viernes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name="preferredStartTime"
                value={fields.preferredStartTime}
                label="Hora de inicio preferida"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name="preferredFinishTime"
                value={fields.preferredFinishTime}
                label="Hora de finalización preferida"
                onChange={handleChange}
              />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Nivel actual</InputLabel>
            <Select
              label="Nivel actual"
              name="currentLevel"
              value={fields.currentLevel}
              onChange={handleChange}
            >
              <MenuItem value="A1">A1</MenuItem>
              <MenuItem value="A2">A2</MenuItem>
              <MenuItem value="B1">B1</MenuItem>
              <MenuItem value="B2">B2</MenuItem>
              <MenuItem value="C1">C1</MenuItem>
              <MenuItem value="C2">C2</MenuItem>
              <MenuItem value="Don't know">No estoy segur@</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={5}
            name="comments"
            value={fields.comments}
            onChange={handleChange}
            label="Comentarios"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth type="submit">
            Reservar
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default BookingForm
