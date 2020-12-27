import Home from './Containers/Home/Home'
import Navbar from './Components/NavBar/Navbar'
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.css';
import { Projects } from './Containers/Projects/Projects';
import Skills from './Containers/Skills/Skills';

function App() {
  return (
    <div className={classes.container}>
      <Navbar />
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
      </Switch>
    </div>
  );
}

export default App;
