import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import classes from "./Layout.module.css"
import MobileNav from "./MobileNav"
import useDevice from "../hooks/useDevice"

const Layout = ({ children }) => {
  let device = useDevice()
  // if (device && device.type === 'MOBILE') {
  //   return <div>
  //     <main className={classes.mobile}>{children}</main>
  //     <MobileNav />

  //   </div>
  // } else if (device && device.type === 'DESKTOP') {
  return (
    <div>
      <Header />
      <main className={classes.main}>{children}</main>
      <MobileNav />
      <Footer />
    </div>
  )
  // } else {
  //   console.error('Device type not set up properly')
  // }
  // return (
  //   <div>
  //     <Header />
  //     <main className={classes.main}>{children}</main>
  //     <MobileNav />
  //     <Footer />
  //   </div>
  // )
}

export default Layout
