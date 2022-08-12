import React from "react"
import ogImage from "../images/og.png"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const HeadComponent = ({ title, description }) => {
  const metadata = useSiteMetadata()
  const metaDescription = description || metadata.description
  const defaultTitle = metadata.title
  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={metadata.siteUrl + ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}

export default HeadComponent
