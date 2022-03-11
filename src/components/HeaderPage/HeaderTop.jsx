import React, { useState } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {userActions} from '../../_actions';
function HeaderTop() {
  const selector = useSelector((state)=> state.authentication);
  const dispatch = useDispatch();
  console.log(selector);
  const [show,setshow] = useState(false);

  const onClickShow = ()=>{
    setshow(!show);
  }
 const logout = ()=>{
      dispatch(userActions.LOGOUT());
 }

  return (
    <>
    {selector.loggedIn===true ?
<div className="welcome-box">
<ul>
  <li>WELCOME TO ENVISION STORE</li>
  <li><a href="#">CONTACT US</a></li>
  <li className="dropdown">
    <a onClick={onClickShow} className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
      MyAccount
    </a>
    <div className={show===true ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"  } aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">My Account</a>
      <a className="dropdown-item" href="#">My Wish List</a>
      <a className="dropdown-item" href="#">SEND INVITATIONS</a>
      <a onClick={logout} className="dropdown-item">SIGN OUT</a>
    </div>
  </li>
</ul>
</div>
    :

<div className="welcome-box">
<ul>
  <li>WELCOME TO ENVISION STORE</li>
  <li><a href="/contact">CONTACT US</a></li>
  <li><a href="/login">SIGN IN</a></li>
  <li><a href="/register">CREATE AN ACCOUNT</a></li>
</ul>
</div>
      
    }
      </>  
      
  )
}


export {HeaderTop};