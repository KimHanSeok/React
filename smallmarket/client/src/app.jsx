import React from 'react';
import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/login/register';
import Cart from './components/cart/cart';
import Shop from './components/item_list/item_list';
import ItemList from './components/item_list/item_list';
import ProductDetail from './components/product/product_detail';
import MainCover from './main_cover/main_cover';
import BoardContainer from './components/board_container/board_container';
import Contact from './components/contact/contact';
import Pay from './components/pay/pay';
import About from './components/about/about';
// import CreateQuestion from './components/board/create_question_board';
// import SmsContainer from './components/sms/sms_container/sms_container';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainCover} />
          <>
            <Navbar />
            <Route exact path="/main" component={Main} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/items" component={ItemList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/items/detail/:id" component={ProductDetail} />
            <Route exact path="/board" component={BoardContainer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/pay" component={Pay} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/create/question" component={CreateQuestion} /> */}
            {/* <Route exact path="/sms" component={SmsContainer} /> now testing.... beta version */}
            <Footer />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;