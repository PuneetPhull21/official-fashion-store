import './App.css';
//import config from 'config';
import {Navbarpage} from '../components/NavbarPage';
import { FooterPage } from '../components/FooterPage';
import {Switch,Route } from 'react-router-dom';
import {Loginpage} from '../components/LoginPage';
import {RegisterPage} from '../components/RegisterPage';
import { HomePage } from '../components/HomePage';
import {HomePageCollections} from '../components/Collections/HomePageCollection';
import { MyAccount } from '../components/Account/MyAccount/MyAccount';
import {EditAccount} from '../components/Account/EditAccount/EditAccount';
import {PrivateRoute} from '../_components';
import Test from '../components/test';
import Contact from '../components/ContactUs/Contact';
import PdpPage from '../components/PdpPage/PdpPage';
import Cart from '../components/Cart/Cart';
import MyWishList from '../components/Account/MyWishList/MyWishList';
import PlpPage from '../components/PlpPage/PlpPage';

function App() {
  return (
    <div>
      <Navbarpage/>  
     
      <Switch>
     
          <PrivateRoute exact path="/account/newsletter/manage/edit" component={EditAccount}/>
          <PrivateRoute exact path="/account/address/edit" component={EditAccount}/>
          <PrivateRoute exact path="/account/edit" component={EditAccount}/>
          <PrivateRoute exact path='/account' component={MyAccount}/>
          <PrivateRoute exact path="/account/mywishlist" component={MyWishList}/>
          <Route exact path='/test' component={Test}/>
          <Route path="/products/:name" component={PlpPage}/>
          <Route path='/collection' component={HomePageCollections}/>
          <Route exact path='/' component={HomePage}/> 
          <Route exact path="/login" component={Loginpage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/product_details/:sku_name" component={PdpPage} />
          <Route exact path="/checkout/cart" component={Cart}/>
        </Switch>

      <FooterPage/>
    </div>
  );
}

export {App} ;
