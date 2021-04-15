import React from 'react';
import Navbar from './components/Navbar';
import Sidebar_left from './components/Sidebar_left';
import Side1 from './components/pages/Side1';
import Side2 from './components/pages/Side2';
import Side3 from './components/pages/Side3';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import Sign_up from './components/pages/loginform';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar_left />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/side1' component={Side1} />
        <Route path='/side2' component={Side2} />
        <Route path='/side3' component={Side3} /> 
        <Route path='/sign_up' component={Sign_up} />

      </Switch>
    </Router>
  );
}

export default App;
