import React from "react"
import useDevice from "../hooks/useDevice"

const Index = props => {
  console.log('props', props)
  const device = useDevice()
  console.log('device', device)
  return (
    <h1>Home</h1>
  )
}

export default Index
