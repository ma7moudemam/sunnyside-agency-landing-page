import React from 'react'
import Cone from './../assets/desktop/image-gallery-cone.jpg';
import Milkbottles from './../assets/desktop/image-gallery-milkbottles.jpg';
import Orange from './../assets/desktop/image-gallery-orange.jpg';
import Sugarcubes from './../assets/desktop/image-gallery-sugarcubes.jpg';
import classes from './Gallery.module.css';


const Gallary = () => {
  return (
    <section className={classes.gallery}>
        <img src={Milkbottles} alt="" />
        <img src={Orange} alt="" />
        <img src={Cone} alt="" />
        <img src={Sugarcubes} alt="" />
    </section>
  )
}

export default Gallary