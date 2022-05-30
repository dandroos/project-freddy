import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

import { Send } from "mdi-material-ui"
import { connect } from "react-redux"
import { setBookingForm } from "../redux/actions"

const ContactForm = ({ dispatch }) => {
  const [fields, setFields] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
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
        // setToast({
        //   open: true,
        //   msg: data.contact_us_contact_form_message_sent[
        //     `contact_us_contact_form_message_sent_${language}`
        //   ],
        //   severity: "success",
        // })
        setFields({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
        })
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
        <input type="hidden" name="form-name" value="contact" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              name="Nombre"
              id="nombre"
              label="Nombre"
              onChange={handleChange}
              value={fields.nombre}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="Email"
              id="email"
              label="Email"
              onChange={handleChange}
              value={fields.email}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="Teléfono"
              id="telefono"
              label="Teléfono"
              required={false}
              onChange={handleChange}
              value={fields.telefono}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Mensaje"
              multiline
              rows={8}
              id="mensaje"
              label="Mensaje"
              onChange={handleChange}
              value={fields.mensaje}
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
