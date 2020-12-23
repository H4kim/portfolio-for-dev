import Home from './Containers/Home/Home'
import Navbar from './Components/NavBar/Navbar'
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.containerx}>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
