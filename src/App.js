import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TV from './pages/TV'
import MediaInfo from './pages/MediaInfo'




function App() {

  return (

    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/movies' component={Movies} exact />
          <Route path='/tv' component={TV} exact />
          <Route path='/info' component={MediaInfo} exact />


        </Switch>




      </div>

    </Router >

  );
}

export default App;
