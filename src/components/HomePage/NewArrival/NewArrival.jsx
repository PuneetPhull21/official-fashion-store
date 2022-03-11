import React, { useEffect, useState } from 'react';
import { product } from '../../../_services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import Slider from "react-slick";
import { useDispatch} from 'react-redux';
import { CartActions,wishlistActions } from '../../../_actions';
function NewArrival() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setvalue] = useState([]);
 
  const [value2, setvalue2] = useState([]);
  const settingSlider = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
  const AddToWishList = (sku_name)=>{
    dispatch(wishlistActions.AddToWishListRequested(sku_name))
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
  useEffect(() => {
   newArrivalApi()
  }, [])

  async function newArrivalApi(){
    const reslt = await product.Homepage("new_arival");
    const result = await product.ProductsNewarrival(39);
    const result2 = await product.ProductsNewarrival(71)
    setvalue2(result2.data.items)
    setvalue(result.data.items);
    }
  
  return (
    <>
    <section className="collection-section">
      {value.length > 0 ?
        <div className="container-fluid">
          <div className="text-center my-5">
            <h3 className="heading-text">
              New Arrival
            </h3>
            <h4 className="sub-heading-text">
              "Fashion Fade. Style is eternal."
            </h4>
          </div>
       
          <div className="row align-items-lg-center">
            <div className="col-lg-9 col-md-9">
              <div className="row justify-content-lg-between justify-content-center" >
                <Slider className="col-lg-12" {...settingSlider}>
                  {value.map((item, index) => (
                    <div key={index} >
                      <div className="product-info">
                        <div className="product-image">
                          <Link to={"/product_details/" + item.sku} > <img src={item.custom_attributes[0].value} alt='' className="img-fluid" /></Link>
                        </div>
                        <div className="product-title"><a href={"/product_details/" + item.sku}>{item.name}</a></div>
                        <div className="product-price">${item.price}</div>
                        <div className="add-to-cart-outer">
                          <button onClick={() => { AddToCart(item.sku)}} className="add-to-cart-btn">
                            <i className="fa fa-solid fa-cart-shopping"></i>Add to cart</button>
                        </div>
                        <div className="wishlist-out my-1">
                          <a onClick={()=>{AddToWishList(item.sku)}}><i className="fa fa-solid fa-heart"></i></a>
                          <a href="/"><i className="fa fa-solid fa-signal"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="long-img">
                <img src="./assets/images/1608b80571524e822b386e9da05f02f2.jpg" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row align-items-lg-center">
            <div className="col-lg-3 col-md-3">
              <div className="long-img">
                <img src="./assets/images/ww8.jpg" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9">

              <div className="row justify-content-lg-between justify-content-center">
                <Slider className="col-lg-12" {...settingSlider} >
                  {value2.map((item, index) => (
                    <div key={index} >
                      <div className="product-info">
                        <div className="product-image">
                          <a href={'/product_details/' + item.sku} ><img src={item.custom_attributes[0].value} alt='' className="img-fluid" /></a>
                        </div>
                        <div className="product-title"><a href={"/product_details/" + item.sku}>{item.name}</a></div>
                        <div className="product-price">${item.price}</div>
                        <div className="add-to-cart-outer">
                          <button onClick={() => { AddToCart(item.sku) }} className="add-to-cart-btn"><i className="fa fa-solid fa-cart-shopping"></i>Add to cart</button>
                        </div>
                        <div className="wishlist-out my-1">
                          <a href="#"><i className="fa fa-solid fa-heart"></i></a>
                          <a href="#"><i className="fa fa-solid fa-signal"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

            </div>
          </div>
        </div>
        : " "}
    </section>
    </>
  )
}


export { NewArrival };