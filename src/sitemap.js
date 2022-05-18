export const nav = {
  internal: [
    // {
    //   label: "Noticias",
    //   url: "/noticias",
    // },
    {
      label: "Cursos",
      dropdown: [
        { label: "Presenciales", url: "/cursos-presenciales" },
        { label: "Online", url: "/cursos-online" },
      ],
    },
    {
      label: "Conócenos",
      url: "/conocenos",
    },
    {
      label: "FAQ",
      url: "/faq",
    },
    {
      label: "Contáctenos",
      url: "/contactenos",
    },
    {
      label: "¡Reservar ahora!",
      url: "/reservar",
      special: true,
    },
  ],
}
