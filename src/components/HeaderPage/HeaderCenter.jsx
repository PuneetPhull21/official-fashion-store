import React, { useState,useEffect} from 'react'
import { product } from '../../_services';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/White_Logo.png';
import {GusetUserServices} from '../../_services';
 function HeaderCenter() {
   const [searchresult ,setresult] = useState([]);
 const [search,setsearch] = useState();
 const [show,setshow] = useState(false);
 const [value,setvalue] = useState([]); 
    const onChangeHandle = async (e)=>{
      setsearch(e.target.value);
      const result = await product.searchBarApi(search);
      setresult(result.data.items);
    }
    useEffect(()=>{
      GuestUser();

  },[])
  async function GuestUser(){
    const cart_id = JSON.parse(localStorage.getItem('cart_id'));
    const result = await GusetUserServices.CheckGuestItemsCart(cart_id.cart_id);
    console.log(result.data);
    setvalue(result.data);
  }
    const onhandle = ()=>{
      setshow(!show);
    }
    const onSubmit =async (e)=>{
        e.preventDefault();
    const result =  await product.searchBarApi(search);
    console.log(result);
    }
  return (
    <div className="logo-cart-wrap">
      <div className="logo"><a href="/"><img alt='home' src={logo} /></a></div>
      <div className="search-bar">
          <form className="input-group">
            <input type="text" className="form-control" onChange={onChangeHandle} placeholder="Search..."/>
            <div className="input-group-append">
              <button className="btn btn-secondary" onClick={onSubmit} type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
          <div className="search-results-wrap">
            {searchresult.length > 0 ?
            <>
            {searchresult.map((item,index)=>(
                <Link to={"/product_details/" +item.sku} key={index}  className="result-ridect">
                  <div className="result-img">
                    <img src="images/tshirt1.jpg" className="img-fluid"/>
                  </div>
                  <div className="result-desc">
                    <div className="result-desc-name">{item.name}</div>
                    <div className="result-desc-price">Price <span>${item.price}</span></div>
                    <div className="result-desc-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...</div>
                  </div>
                </Link>
            ))}
            </>
             :''}
              </div>

              
            
          </div>
      <div className="cart">
        <div>
          <a onClick={onhandle} className="position-relative">
            <i className="fa fa-bag-shopping"></i>
            <span className="cart-qty">{value.length}</span>
          </a>
        </div>

     {show===true ? 
      <div className="cart-details-wrap">
              <div className="cart-close" onClick={onhandle} >
                <a href="#"><i className="fa fa-times"></i></a>
              </div>
              <div className="cart-subtotal-out">
                <div className="cart-subtotal-inner">
                  <div className="cart-subtotal-txt">Cart Subtotal : <span className="strong-font">$708</span></div>
                  <div className="cart-items-count"><span className="strong-font">{value.length}</span> Items in Cart</div>
                </div>
                <div className="checkout-btn-wrap">
                  <Link to="#" className="btn btn-primary btn-block">Go to Checkout</Link>
                </div>
              </div>
              <div className="cart-scroll-wrap">
              {value.map((item,index)=>(  
                <div key={index} className="cart-products-wrap">
                  <div className="cart-product-img"><a href="#"><img src={item.extension_attributes.image_url} className="img-fluid"/></a></div>
                  <div className="cart-product-desc">
                    <div className="cart-product-name"><a href="#">{item.name}</a></div>
                    <div className="cart-product-price">${item.price}</div>
                    <div className="cart-quantity-edit">
                      <div className="cart-qty-counter">Qty<input type="number" placeholder="1" defaultValue={item.qty} /></div>
                      <div className="cart-edit-delete">
                        <a href="#"><i className="fa fa-pencil-alt"></i></a>
                        <a href="#"><i className="fa fa-times"></i></a>
                      </div>
                    </div>
                  </div>
                </div>               
              ))}
              </div>
              <div className="view-edit-wrap">
                <Link to="/checkout/cart" className="btn btn-primary btn-block">view and edit cart</Link>
              </div>
  
      <div className="hamburger-nav">
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars fa-fw"></i>
          </button>
      </div>
      </div>
 :''}
      </div>
      </div>
      
  )
}


export {HeaderCenter};