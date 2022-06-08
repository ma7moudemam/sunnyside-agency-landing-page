import React from 'react'
import classes from './Transform.module.css'


const Transform = () => {
  return (
    <section className={classes.transform}>
        <div className={classes.image}></div>
        <div className={classes.content}>
            <h1>Transform your brand</h1>
            <p>We are a full-service creative agency specilalizing in helping brands grow fast .
                Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <h3>Learn more</h3>
        </div>
    </section>
  )
}

export default Transform