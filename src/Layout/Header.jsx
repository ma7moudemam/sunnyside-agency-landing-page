import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
        <h1>sunnyside</h1>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className={classes.burgerIcon}>
        <i className="fa-solid fa-bars "></i>
        </div>
       
    </header>
  )
}

export default Header