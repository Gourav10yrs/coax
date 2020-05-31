import React, { Component } from 'react';
import styles from'./App.module.css';
import { NavBar, Banner, Advantage, Solutions, Technologies, Showcases, Promise, Platform, Contact , Footer} from './components'

class App extends React.Component {
  render(){
  return (
    <div>
      <NavBar />
      <div className={styles.widex}>
        <Banner />
        <Advantage />
        <Solutions />
        <Technologies />
        <Showcases />
        <Promise />
        <Platform />
        <Contact />
      </div>
      <Footer />
    </div>
  )
  }
}

export default App;
