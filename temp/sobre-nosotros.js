import { Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { connect } from "react-redux"
import Page from "../components/Page"

const SobreNosotros = ({ isMobile }) => {
  return (
    <Page title="Sobre nosotros">
      <Typography variant="lead" paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quas
        totam accusantium eum, quis fugit ea cumque optio rem, est doloremque
        exercitationem ad? Quo quia itaque aperiam fugit deserunt delectus
        beatae consectetur animi quod consequatur nemo, possimus modi explicabo
        doloremque earum. Libero, mollitia? Perferendis sit dolores illum fuga
        iure hic.
      </Typography>
      {isMobile ? (
        <StaticImage
          src="../images/school.jpg"
          aspectRatio={1.25}
          transformOptions={{ cropFocus: "center" }}
          style={{ marginBottom: 15 }}
          quality={99}
        />
      ) : (
        <StaticImage
          src="../images/school.jpg"
          aspectRatio={3 / 1.75}
          transformOptions={{ cropFocus: "center" }}
          style={{ marginBottom: 15 }}
          quality={99}
        />
      )}
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illum
        est soluta, fuga ullam, facilis aliquid ad atque id tempore tempora
        recusandae voluptatem reprehenderit totam nemo, hic mollitia non commodi
        veritatis dignissimos quae quo cupiditate sunt? Vitae illum eveniet quam
        porro necessitatibus velit placeat aliquid dolore veritatis nemo est
        omnis, quas excepturi culpa labore ea minus sed suscipit pariatur
        debitis a eius, recusandae saepe facilis. Similique, soluta eius
        tenetur, hic veritatis maxime quod ad, exercitationem pariatur suscipit
        adipisci corporis at modi inventore veniam sint voluptates aspernatur
        quibusdam optio reiciendis ducimus minus quasi. Magni maxime sunt iste
        similique commodi minus tenetur vitae culpa natus? Eligendi voluptatum
        rem quidem aspernatur, hic temporibus dicta eum a facilis expedita est
        impedit, ipsa quasi, recusandae repellendus modi sapiente aliquid
        ducimus?
      </Typography>
    </Page>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(SobreNosotros)
