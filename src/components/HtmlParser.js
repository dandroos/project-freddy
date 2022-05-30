import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import parse, { domToReact } from "html-react-parser"

import { CircleSmall } from "mdi-material-ui"
import React from "react"

const HtmlParser = ({ input }) => {
  return (
    <>
      {parse(input, {
        replace: domNode => {
          if (domNode.type === "tag" && domNode.name === "h1") {
            return (
              <Typography variant="h4" gutterBottom>
                {domToReact(domNode.children)}
              </Typography>
            )
          }
          if (domNode.type === "tag" && domNode.name === "h2") {
            return (
              <Typography variant="h5" gutterBottom>
                {domToReact(domNode.children)}
              </Typography>
            )
          }
          if (domNode.type === "tag" && domNode.name === "p") {
            return (
              <Typography paragraph>{domToReact(domNode.children)}</Typography>
            )
          }

          if (domNode.type === "tag" && domNode.name === "ul") {
            return (
              <List>
                {domNode.children.map((i, ind) => {
                  if (i.type === "tag" && i.name === "li") {
                    return (
                      <ListItem key={ind}>
                        <ListItemIcon>
                          <CircleSmall />
                        </ListItemIcon>
                        <ListItemText primary={domToReact(i.children)} />
                      </ListItem>
                    )
                  }
                  return null
                })}
              </List>
            )
          }
          return null
        },
      })}
    </>
  )
}

export default HtmlParser
