import Home from './Containers/Home/Home'
import Navbar from './Components/NavBar/Navbar'
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.css';
import { Projects } from './Containers/Projects/Projects';

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
      </Switch>
    </div>
  );
}

export default App;
