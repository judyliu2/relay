import React from 'react'
import classes from './MobileBanner.module.css'

const MobileBanner = () => {
  return (
    <>
      <div className={classes.root}>
        <h2>The Relay Resource</h2>
      </div>
      <div className={classes.rootOffset}>
        <h2>The Relay Resource</h2>
      </div>
    </>
  )
}

export default MobileBanner
