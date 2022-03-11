import React, { useEffect, useState } from 'react';
import { product } from '../../../_services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import {useDispatch} from 'react-redux';
import { CartActions } from '../../../_actions';
import {wishlistActions} from '../../../_actions';

function LastestFootwearPage() {
  const dispatch = useDispatch();
  const settingSlider = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  }
  const AddToCart = async (sku) => {
    const user_id = localStorage.getItem('card_id');
    let product_details = {
      sku_name: sku,
      qty: 1,
      quote_id: user_id
    }
    dispatch(CartActions.ADDCARTREQUEST(product_details));
  }
  const [value,setvalue] = useState([]);
  useEffect(()=>{
   NewArrival();
  },[])
  async function NewArrival(){
   const result = await product.ProductsNewarrival(15);
   setvalue(result.data.items);
  }
  const AddToWishList = (sku_name)=>{
    dispatch(wishlistActions.AddToWishListRequested(sku_name))
  }
  
  return (
    <>
     { value.length > 0 ?
    <section className="product-item-info">  
    <div className="container-fluid">
      <div className="text-center py-5">
        <h3 className="heading-text">
          latest footwear collection
        </h3>
        <h4 className="sub-heading-text">
          "You can have anything you want in life if you dress for it."
        </h4>
      </div>
      
      <div className="row justify-content-center">
      <Slider className="col-xs-12 col-sm-6 col-md-4 col-lg-12" {...settingSlider} >
      {value.map((item,index)=>( 
         <div key={index} >
          <div className="product-info">
            <div className="product-image">
              <Link to={"/product_details/" + item.sku}><img src={item.custom_attributes[0].value} alt='' className="img-fluid"/></Link>
            </div>
              <div className="product-title"><Link to={"/product_details/"+item.sku}>{item.name}</Link></div>
              <div className="product-price">${item.price}</div>
              <div className="add-to-cart-outer">
                <button onClick={()=>{AddToCart(item.sku)}} className="add-to-cart-btn"><i className="fa fa-solid fa-cart-shopping"></i>Add to cart</button>
              </div>
              <div className="wishlist-out my-1">
                <a  onClick={()=>{AddToWishList(item.sku)}}><i  className="fa fa-solid fa-heart"></i></a>
                <a href="#"><i className="fa fa-solid fa-signal"></i></a>
              </div>
          </div>
        </div> 
      ))}
      </Slider>
      </div>
      
            </div>
  </section>
  :''}
</>
  )
}

export { LastestFootwearPage};