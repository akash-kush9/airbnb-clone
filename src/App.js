import React from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Search from './Home/Banner/Search/Search';
import SearchPage from './SearchPage/SearchPage'
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route component = {SearchPage} path='/search'/>
          <Route component = {Home} exact path='/'/>
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
