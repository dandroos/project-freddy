import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material"
import React from "react"
import Page from "../components/Page"
import { Send } from "mdi-material-ui"

const Reservar = () => {
  const handleSubmit = () => {
    console.log("form submitted!")
  }

  return (
    <Page title="¡Reservar ahora!">
      <form
        name="contact"
        action="#"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RadioGroup row>
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
          {/*  <Grid item xs={12} md={4}>
            <TextField
              id="nombre"
              label="Nombre"
              onChange={handleChange}
              value={fields.nombre}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="email"
              label="Email"
              onChange={handleChange}
              value={fields.email}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="telefono"
              label="Teléfono"
              required={false}
              onChange={handleChange}
              value={fields.telefono}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={8}
              id="mensaje"
              label="Mensaje"
              onChange={handleChange}
              value={fields.mensaje}
            />
          </Grid> */}
          <Grid item xs={12}>
            <Button size="large" fullWidth endIcon={<Send />}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Page>
  )
}

export default Reservar
