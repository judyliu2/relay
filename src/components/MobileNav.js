import React, { useEffect } from "react"
import NavBar from "./Nav/NavBar"
import NavItem from "./Nav/NavItem"
import NavItems from "./Nav/NavItems"
import classes from './MobileNav.module.css'

import useLocation from "../hooks/useLocation"

const MobileNav = () => {
  const { pathname } = useLocation()
  return (
    <div className={classes.root}>
      <NavBar>
        <NavItems>
          <NavItem selected={pathname === "/"} to={"/"} title={"Relay"} />
          <NavItem
            selected={pathname.startsWith("/how-to-help")}
            to={"/how-to-help"}
            title={"How To Help"}
          />
          <NavItem
            selected={pathname.startsWith("/categories")}
            to={"/categories"}
            title={"Categories"}
          />
        </NavItems>
      </NavBar>
    </div>
  )
}

export default MobileNav

