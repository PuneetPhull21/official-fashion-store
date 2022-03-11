import React from 'react'

export default function Card(props) {
  return (
    <div>
        <div  className="col-lg-2 col-md-4"  key={props.index} >
                    <div className="product-info">
                      <div className="product-image">
                        <a href='/'> <img src="./assets/images/tshirt7.jpg" className="img-fluid" /></a>
                      </div>
                      <div className="product-title"><a href="#">{props.item.name}</a></div>
                      <div className="product-price">${props.item.price}</div>
                      <div className="add-to-cart-outer">
                        <a href="/" className="add-to-cart-btn">
                          <i className="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                      </div>
                      <div className="wishlist-out my-1">
                        <a href="/"><i className="fa fa-solid fa-heart"></i></a>
                        <a href="/"><i className="fa fa-solid fa-signal"></i></a>
                      </div>
                    </div>
                  </div>
    </div>
  )
}
