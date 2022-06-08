import React from 'react'
import Client from '../UI/Client'
import classes from './ClientTestmilens.module.css'


const ClientTestmilens = () => {
  return (
    <>
    <h1 className={classes.header}>client testimonials</h1>
    <section className={classes.testmilens}>
        <Client name="emily"/>
        <Client name="thomas"/>
        <Client name="jennie"/>
    </section>
    </>
  )
}

export default ClientTestmilens