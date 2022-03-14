import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material"
import { Phone } from "mdi-material-ui"
import { Link } from "gatsby"
import React from "react"
import { connect } from "react-redux"
import Page from "../components/Page"

const Cursos = ({ isMobile }) => {
  const data = [
    {
      id: 1,
      nivel: "B1",
      edades: "14-16",
      horario: {
        dias: "Lunes y Miercoles",
        hora: "16.00 - 16.50",
      },
      espacios: true,
    },
    {
      id: 2,
      nivel: "B2",
      edades: "14-",
      horario: {
        dias: "Lunes y Miercoles",
        hora: "17.00 - 17.50",
      },
      espacios: true,
    },
    {
      id: 3,
      nivel: "B1",
      edades: "14-16",
      horario: {
        dias: "Lunes y Miercoles",
        hora: "18.10 - 19.00",
      },
      espacios: false,
    },
    {
      id: 4,
      nivel: "A2",
      edades: "10-13",
      horario: {
        dias: "Martes y Jueves",
        hora: "18.10 - 19.00",
      },
      espacios: true,
    },
  ]

  const theme = useTheme()

  return (
    <Page title="Cursos">
      <Typography variant="lead">
        A continuación se enumeran nuestros cursos disponibles para el año
        académico 2022/2023.
      </Typography>
      <List>
        {data.map((i, ind) => (
          <ListItem
            divider={ind !== data.length - 1}
            secondaryAction={
              !isMobile && (
                <Button
                  color="secondary"
                  size="large"
                  disabled={!i.espacios}
                  fullWidth
                >
                  {i.espacios ? `¡Reservar ahora!` : `No disponible`}
                </Button>
              )
            }
          >
            <Avatar
              sx={{
                height: 60,
                width: 60,
                backgroundColor: theme.palette.primary.dark,
                mr: 2,
              }}
            >
              {i.nivel}
            </Avatar>
            <ListItemText
              disableTypography
              primary={
                <>
                  <Typography fontWeight="bold" display="block">
                    {i.horario.dias}
                  </Typography>
                  <Typography>{i.horario.hora}</Typography>
                </>
              }
              secondary={
                <>
                  <Typography variant="caption" display="block" gutterBottom>
                    para edades {i.edades}
                  </Typography>
                  {isMobile && (
                    <Button
                      color="secondary"
                      size="large"
                      disabled={!i.espacios}
                      fullWidth
                    >
                      {i.espacios ? `¡Reservar ahora!` : `No disponible`}
                    </Button>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <Box textAlign="center">
        <Typography gutterBottom>
          También ofrecemos clases privadas presenciales o en línea. Por favor
          contáctenos para más detalles.
        </Typography>
        <Button
          size="large"
          component={Link}
          to="/contactenos"
          endIcon={<Phone />}
        >
          Contáctenos
        </Button>
      </Box>
    </Page>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Cursos)
