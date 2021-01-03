import Home from './Containers/Home/Home'
import Navbar from './Components/NavBar/Navbar'
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.scss';
import { Projects } from './Containers/Projects/Projects';
import Skills from './Containers/Skills/Skills';
import Experience from './Containers/Experience/Experience';
import  {ThemeContext} from './Context/ThemeContext'
import { useContext } from 'react';
import SwitchModeBtn from './Components/SwitchModeBtn/SwitchModeBtn';

function App() {
  const ContextTheme = useContext(ThemeContext)

  const toggle = () => {
    ContextTheme.toggleTheme()
  }
  return (
    <div className={`${classes.container} ${ContextTheme.theme === 'light'? classes.light : classes.dark}`}>
        <div className={classes.topbarContainer}>
          <Navbar />
          <SwitchModeBtn onClick={() => toggle()}/>
        </div>
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
