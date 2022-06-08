import React from 'react'
import classes from './Footer.module.css'
import Facebook from './../assets/icon-facebook.svg'
import Insta from './../assets/icon-instagram.svg'
import Twitter from './../assets/icon-twitter.svg'
import Pinterest from './../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <h1>sunnyside</h1>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
        </ul>
        <ul>
            <img src={Facebook} alt="Facebook" />
            <img src={Insta} alt="Insta" />
            <img src={Twitter} alt="Twitter" />
            <img src={Pinterest} alt="Pinterest" />
        </ul>
    </footer>
  )
}

export default Footer