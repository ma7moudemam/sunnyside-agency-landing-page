import React from 'react'
import classes from './Client.module.css'
import Emily from './../assets/image-emily.jpg'
import Thomas from './../assets/image-thomas.jpg'
import Jennie from './../assets/image-jennie.jpg'

const Client = (props) => {

    const Images={
        'emily':Emily,
        'thomas':Thomas,
        'jennie':Jennie
    }

    const Bio ={
        'emily':" We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        'thomas':"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        'jennie':"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
    }

    const Position ={
        'emily':"  Marketing Director",
        'thomas':"Chief Operating Officer",
        'jennie':" Business Owner"
    }

    const image = Images[props.name];
    const bio = Bio[props.name];
    const position = Position[props.name];
  return (
    <div className={classes.client}>
        <img src={image} alt="props.name" />
        <p className={classes.bio}>{bio}</p>
        <h1 className={classes.name}>{props.name}</h1>
        <h3 className={classes.position}>{position}</h3>
    </div>
  )
}

export default Client