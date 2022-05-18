import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import React, { useEffect, useState } from "react"

import { connect } from "react-redux"

const GroupForm = ({ isOpen, courses, selected }) => {
  const defaultFields = {
    name: "",
    email: "",
    tel: "",
    thirdParty: false,
    studentName: "",
    studentAge: "",
    selectedCourse: "",
    comments: "",
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

  useEffect(() => {
    if (isOpen && selected) {
      setFields({ ...fields, selectedCourse: selected })
    } else {
      setFields(defaultFields)
    }
    //eslint-disable-next-line
  }, [isOpen])

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
      name="group"
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
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Curso</InputLabel>
            <Select
              value={fields.selectedCourse}
              label="Curso"
              name="selectedCourse"
              onChange={handleChange}
            >
              {courses.map((i, ind) => (
                <MenuItem key={ind} value={i.id}>{`${i.level} - ${i.days.join(
                  " y "
                )} - ${i.start_time}-${i.finish_time}`}</MenuItem>
              ))}
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
          <Button fullWidth>Reservar</Button>
        </Grid>
      </Grid>
    </form>
  )
}

const stp = s => ({
  courses: s.courses,
  selected: s.bookingForm.selectedCourse,
  isOpen: s.bookingForm.isOpen,
})

export default connect(stp)(GroupForm)
