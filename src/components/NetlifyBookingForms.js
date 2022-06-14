import React from "react"

const NetlifyBookingForms = () => {
  return (
    <>
      <form
        name="booking"
        action="#"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="booking" />
        <input type="hidden" name="type" />
        <input type="hidden" name="presentation" />
        <input type="hidden" name="name" />
        <input type="hidden" name="email" />
        <input type="hidden" name="tel" />
        <input type="hidden" name="studentName" />
        <input type="hidden" name="studentAge" />
        <input type="hidden" name="preferredDay" />
        <input type="hidden" name="preferredStartTime" />
        <input type="hidden" name="preferredFinishTime" />
        <input type="hidden" name="currentLevel" />
        <input type="hidden" name="comments" />
      </form>
    </>
  )
}

export default NetlifyBookingForms
