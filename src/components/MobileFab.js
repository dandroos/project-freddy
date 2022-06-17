import { Fab, ListItemIcon, ListSubheader, Menu, MenuItem } from "@mui/material"
import { FacebookMessenger, Phone, Whatsapp } from "mdi-material-ui"
import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { connect } from "react-redux"

const MobileFab = ({ isMobile }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const data = useStaticQuery(graphql`
    {
      phone: file(
        extension: { eq: "md" }
        sourceInstanceName: { eq: "contact" }
      ) {
        childMarkdownRemark {
          frontmatter {
            phone_number
          }
        }
      }
      facebook: file(
        extension: { eq: "md" }
        sourceInstanceName: { eq: "contact" }
        name: { eq: "social_media" }
      ) {
        childMarkdownRemark {
          frontmatter {
            facebook
          }
        }
      }
    }
  `)

  const phoneNumber = data.phone.childMarkdownRemark.frontmatter.phone_number
  const facebookId = data.facebook.childMarkdownRemark.frontmatter.facebook

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Fab
        color="secondary"
        size="medium"
        onClick={e => setAnchorEl(e.target)}
        sx={{ position: "fixed", bottom: 15, right: 15, zIndex: 5000 }}
      >
        <Phone />
      </Fab>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ disablePadding: true }}
        sx={{ zIndex: 5050 }}
      >
        <ListSubheader>Contacto rápido</ListSubheader>
        <MenuItem
          component="a"
          href={`tel:34${phoneNumber}`}
          target="_blank"
          onClick={handleClose}
        >
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          Llámenos
        </MenuItem>
        <MenuItem
          component="a"
          href={`https://wa.me/34${phoneNumber}`}
          target="_blank"
          onClick={handleClose}
        >
          <ListItemIcon>
            <Whatsapp />
          </ListItemIcon>
          WhatsApp
        </MenuItem>
        <MenuItem
          component="a"
          href={`http://m.me/${facebookId}`}
          target="_blank"
          onClick={handleClose}
        >
          <ListItemIcon>
            <FacebookMessenger />
          </ListItemIcon>
          Messenger
        </MenuItem>
      </Menu>
    </>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})
export default connect(stp)(MobileFab)
