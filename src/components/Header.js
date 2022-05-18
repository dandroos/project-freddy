import React from "react"
import { connect } from "react-redux"
import Nav from "./Nav"

const Header = ({ isMobile }) => {
  return (
    <>
      <Nav />
    </>
  )
}

const mapStateToProps = state => ({
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(Header)
