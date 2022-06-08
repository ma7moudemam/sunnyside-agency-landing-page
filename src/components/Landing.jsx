import React, { Fragment } from 'react'
import Header from '../Layout/Header'
import classes from './Landing.module.css'
import Arrow from './../assets/icon-arrow-down.svg'


const Landing = () => {
  return (
    <Fragment>
       <section className={classes.landing}>
         <Header/>

         <div className={classes.content}>
         <h1>we are creatives</h1>
         <img src={Arrow} alt="" />
         </div>

       </section>
    </Fragment>
  )
}

export default Landing