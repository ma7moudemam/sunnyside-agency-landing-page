import React , { Fragment, Suspense } from 'react';
import './App.css';
import ClientTestmilens from './components/ClientTestmilens';
import Gallery from './components/Gallery';
import GraphicDesign from './components/GraphicDesign';
import Landing from './components/Landing';
import Photography from './components/Photography';
import Stand from './components/Stand';
import Transform from './components/Transform';
import Footer from './Layout/Footer';
import classes from './App.module.css';


function App() {
  return (
    <Fragment>
      <Landing/>
      <Transform/>
      <Stand/>
      <div className={classes.photography}>
      <GraphicDesign/>
      <Photography/>
      </div>
      <ClientTestmilens/>
      <Gallery/>
      <Footer/>
    </Fragment>
  );
}

export default App;
