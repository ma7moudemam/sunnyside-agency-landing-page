import React from "react";
import classes from "./Stand.module.css";

const Stand = () => {
  return (
    <section className={classes.stand}>
      <div className={classes.image}></div>
      <div className={classes.content}>
        <h1>Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <h3>Learn more</h3>
      </div>
    </section>
  );
};

export default Stand;
