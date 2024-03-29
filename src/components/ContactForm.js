import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { setBookingForm, setToast } from "../redux/actions"

import { Send } from "mdi-material-ui"
import { connect } from "react-redux"

const ContactForm = ({ dispatch }) => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  })

  const handleChange = e => {
    setFields({
      ...fields,
      [e.currentTarget.id]: e.currentTarget.value,
    })
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
        "form-name": "contact",
        ...fields,
      }),
    })
      .then(() => {
        dispatch(
          setToast({
            open: true,
            msg: "Gracias. Responderemos lo antes posible.",
            severity: "success",
          })
        )
        setFields({
          name: "",
          email: "",
          tel: "",
          message: "",
        })
      })
      .catch(() => {
        dispatch(
          setToast({
            open: true,
            msg: "Lo siento. Había un problema. Inténtalo de nuevo.",
            severity: "error",
          })
        )
      })
  }
  return (
    <>
      <Typography gutterBottom>
        Si desea ponerse en contacto con nosotros para reservar una clase,{" "}
        <Link
          onClick={() => dispatch(setBookingForm({ isOpen: true }))}
          underline="hover"
        >
          haga clic aquí
        </Link>
        . Alternativamente, utilice el siguiente formulario.
      </Typography>
      <form
        name="contact"
        action="#"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              name="name"
              id="name"
              label="Nombre"
              onChange={handleChange}
              value={fields.name}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="email"
              id="email"
              label="Email"
              onChange={handleChange}
              value={fields.email}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="tel"
              id="tel"
              label="Teléfono"
              required={false}
              onChange={handleChange}
              value={fields.tel}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              multiline
              rows={8}
              id="message"
              label="Mensaje"
              onChange={handleChange}
              value={fields.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button size="large" type="submit" fullWidth endIcon={<Send />}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default connect()(ContactForm)
