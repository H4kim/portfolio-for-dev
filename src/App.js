import Home from './Containers/Home/Home'
import React, { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.css';
import { Projects } from './Containers/Projects/Projects';
import Skills from './Containers/Skills/Skills';
import Experience from './Containers/Experience/Experience';

function App() {
  const [darkTheme,setDarkTheme] = useState(false)

    const switchMode = () => {
        setDarkTheme(!darkTheme)
    }
  return (
    <div className={classes.container}>
      <Navbar />
      <button onClick={() => switchMode()}>SwitchMode</button>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/skills'>
          <Skills />
        </Route>
        <Route exact path='/experience'>
          <Experience />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
