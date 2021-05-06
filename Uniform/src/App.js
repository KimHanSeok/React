import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//import Sidebar_left from './components/Sidebar_left';
//import Side1 from './components/pages/Side1';
//import Side2 from './components/pages/Side2';
//import Side3 from './components/pages/Side3';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sign_up from './components/pages/loginform';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import SellShirts from './components/pages/SellShirts';
import Help from './components/pages/Help';
import MyAccount from './components/pages/MyAccount';
import AccountInformation from './components/pages/AccountInformation';
import AccountDashboard from './components/pages/AccountDashboard';
import AddressBook from './components/pages/AddressBook';
import MyOrders from './components/pages/MyOrders';
import MyWishlist from './components/pages/MyWishlist';
import MyProductReviews from './components/pages/MyProductReviews';
import Overview from './components/pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './components/pages/Reports';
import Team from './components/pages/Team';
import Item from './components/Item';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/ContactUs' component={ContactUs} />
        <Route path='/MyAccount' component={MyAccount} />
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        {/* <Route path='/side1' component={Side1} />
        <Route path='/side2' component={Side2} />
        <Route path='/side3' component={Side3} />  */}
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/SellShirts' component={SellShirts} />
        <Route path='/AccountInformation' component={AccountInformation} />
        <Route path='/AccountDashboard' component={AccountDashboard} />
        <Route path='/AddressBook' component={AddressBook} />
        <Route path='/MyOrders' component={MyOrders} />
        <Route path='/MyWishlist' component={MyWishlist} />
        <Route path='/MyProductReviews' component={MyProductReviews} />
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
        <Route path='/Item' exact component={Item} />
      </Switch>
    </Router>
    // <ContactUs></ContactUs>
  );
}

export default App;
