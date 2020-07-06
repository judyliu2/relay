import "normalize.css"
import React from 'react'
import PageContextProvider from "./src/context/PageContext"
import Layout from "./src/components/Layout"
export const wrapPageElement = ({ element, props }) => {
  return <PageContextProvider {...props}><Layout>{element}</Layout></PageContextProvider>
}
