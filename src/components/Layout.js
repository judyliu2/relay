import React from "react"

import DesktopNav from "./DesktopNav"
import Footer from "./Footer"
import classes from "./Layout.module.css"
import MobileNav from "./MobileNav"
import useDevice from "../hooks/useDevice"
import MobileBanner from "./MobileBanner"

const Layout = ({ children }) => {
  let device = useDevice()
  switch (device.type) {
    case 'MOBILE': {
      return (
        <>
          <MobileBanner />
          <main>{children}</main>
          <MobileNav />
        </>
      )
    }
    case 'DESKTOP': {
      return (
        <>
          <DesktopNav />
          <main>{children}</main>
          <Footer />
        </>
      )
    }
    default: {
      return <div>TODO: Layout not set up</div>
    }
  }
}

export default Layout
