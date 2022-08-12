import Layout from "./src/components/Layout"
import React from "react"

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "es" })
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
      rel="stylesheet"
    ></link>,
  ])
}
