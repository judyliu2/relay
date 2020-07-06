import React, { useEffect } from "react"
import { Link } from "gatsby"
import NavBar from "./Nav/NavBar"
import NavItem from "./Nav/NavItem"
import NavItems from "./Nav/NavItems"

import useLocation from "../hooks/useLocation"
import NavDropDown from "./Nav/NavDropDown"
import useDevice from "../hooks/useDevice"

const MobileNav = () => {
  const { pathname } = useLocation()
  return (
    <>
      <NavBar>
        <NavItems>
          <NavItem selected={pathname === "/"} to={"/"} title={"Relay"} />
          <NavItem
            selected={pathname.startsWith("/tips-and-advice")}
            to={"/tips-and-advice"}
            title={"Tips and Advice"}
          />
          <NavItem
            selected={pathname.startsWith("/how-to-help")}
            to={"/how-to-help"}
            title={"How to Help"}
          />
        </NavItems>
      </NavBar>
    </>
  )
}

export default MobileNav

