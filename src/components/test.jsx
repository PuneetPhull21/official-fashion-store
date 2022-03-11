import React from 'react'

export default function Test() {
  return (
    <div>
    <div id="main-carousel" className="carousel slide" data-ride="carousel" data-touch="true">
      <ol className="carousel-indicators">
        <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="./assets/images/banner.jpg" alt="First slide"/>
        </div>
      </div>
    </div>
    <section className="trending-categories mt-5">
      <div className="container-fluid">
        <div className="text-center py-5">
          <h3 className="heading-text">
            Top Beauty Products
          </h3>
          <h4 className="sub-heading-text">
            “With right fashion, every female would be a flame.”
          </h4>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="category-block text-center">
              <img src="./assets/images/model1.jpg" alt="" className="img-fluid"/>
              <p><a href="#" className="category-link">hair care</a></p>
            </div>            
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="category-block text-center">
              <img src="./assets/images/beauty.jpg" alt="" className="img-fluid"/>
              <p><a href="#" className="category-link">Lip care</a></p>
            </div>            
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="category-block text-center">
              <img src="./assets/images/model3.jpg" alt="" className="img-fluid"/>
              <p><a href="#" className="category-link">Skin care</a></p>
            </div>            
          </div>
        </div>
      </div>
    </section>

    <section className="gift-section">
      <div className="my-5">
        <div className="gift-side-to-side-out">
          <div className="gift-img">
            <img src="./assets/images/affordable-designer-bag-edit-1-of-3.jpg" className="img-fluid"/>
          </div>
          <div className="gift-text">
            <div className="orange-text">Bags Collection</div>
            <div className="subhead-text">Up To 40% Off Final Sale Items. Caught in the moment!</div>
            <p className="mb-3">There is nothing like trend..</p>
            <a href="#" className="btn btn-primary">Shop Here</a>
          </div>
        </div>
        <div className="gift-side-to-side-out">
          <div className="gift-text">
            <div className="orange-text">Kids Collection</div>
            <div className="subhead-text">Up To 20% Off On Kids Colthing Products.</div>
            <p className="mb-3">Offer available for few days</p>
            <a href="#" className="btn btn-primary">Shop Here</a>
          </div>
          <div className="gift-img">
            <img src="./assets/images/tips1-696x464.jpg" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>

   

    <section className="top-brands">
      <div className="container-fluid py-5">
        <div className="text-center">
          <h3 className="heading-text">
            Top Brands
          </h3>
          <h4 className="sub-heading-text">
            "A brand is a voice and a product is a souvenir."
          </h4>
        </div>
        <div className="row justify-content-between-lg justify-content-center">
          <div className="col-lg-2 col-md-2 col-sm-4">
            <div className="category-block text-center">
              <img src="./assets/images/1206.png" className="img-fluid"  alt="" />
            </div>            
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4">
            <div className="category-block text-center">
              <img src="./assets/images/chanel.png" className="img-fluid"  alt="" />
            </div>            
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4">
            <div className="category-block text-center">
              <img src="./assets/images/GUCCI.jpg" className="img-fluid" alt="" />
            </div>            
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4">
            <div className="category-block text-center">
              <img src="./assets/images/zara.jpg" className="img-fluid"  alt="" />
            </div>            
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4">
            <div className="category-block text-center">
              <img src="./assets/images/wonderland.jpg" className="img-fluid"  alt="" />
            </div>            
          </div>
        </div>
      </div>
    </section> 

    <section className="blogs-info">
      <div className="container">
        <h3 className="text-center my-4 heading-text">
          Blogs 
        </h3>
        <div className="row">
          <div className="col-md-4">
            <div className="blogs-card">
              <div className="blog-image"><img src="./assets/images/istockphoto-1194744301-170667a.jpg" className="w-100" alt="" title="" /></div>
              <h2 className="blog-heading">CHECK THE RETURNS POLICY</h2>
              <p className="blog-descripton">Some Description text
              </p>
              <ul className="blog-date-time my-3">
                <li><i className="fa fa-solid fa-calendar"></i> December 6, 2021</li>
                <li><i className="fa fa-solid fa-user"></i> <a href="#">Admin</a></li>
                <li><i className="fa fa-solid fa-eye"></i>3</li>
              </ul>
              <p className="blog-read-more"><a href="#" title="Read More">Read more</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blogs-card">
              <div className="blog-image"><img src="./assets/images/photo-1483985988355-763728e1935b.jpeg" className="w-100" alt="" title="" /></div>
              <h2 className="blog-heading">CHECK THE RETURNS POLICY</h2>
              <p className="blog-descripton">Some Description text
              </p>
              <ul className="blog-date-time my-3">
                <li><i className="fa fa-solid fa-calendar"></i> December 6, 2021</li>
                <li><i className="fa fa-solid fa-user"></i> <a href="#">Admin</a></li>
                <li><i className="fa fa-solid fa-eye"></i>3</li>
              </ul>
              <p className="blog-read-more"><a href="#" title="Read More">Read more</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blogs-card">
              <div className="blog-image"><img src="./assets/images/mamblog2.jpg" className="w-100" alt="" title="" /></div>
              <h2 className="blog-heading">CHECK THE RETURNS POLICY</h2>
              <p className="blog-descripton">Some Description text
              </p>
              <ul className="blog-date-time my-3">
                <li><i className="fa fa-solid fa-calendar"></i> December 6, 2021</li>
                <li><i className="fa fa-solid fa-user"></i> <a href="#">Admin</a></li>
                <li><i className="fa fa-solid fa-eye"></i>3</li>
              </ul>
              <p className="blog-read-more"><a href="#" title="Read More">Read more</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sale-section">
      <div className="sale-banner-out mt-5">
          <img src="./assets/images/carousel-women.jpg" className="w-100" alt=""/>
          <div className="caption">
             <p>Big Sale Up To 70% Off<br />
                Exclussive Offers For Limited Time</p>
                <a href="#" className="btn btn-primary">Click Here</a>
          </div>
      </div>
    </section>


    




   
    <section class="breadcrumb-section">
      <div class="custom-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">New Arrival</a></li>
          <li class="breadcrumb-item"><a href="#">Men</a></li>
          <li class="breadcrumb-item active">T-Shirts</li>
        </ol>
      </div>
    </section>

    

<section class="plp-content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
      
          <div class="mobile-filter-btn">
            <i class="fas fa-filter"></i>
          </div>
     
        <div class="plp-filter">
         
          <div class="filter-heading-mobile">
            <div class="d-flex justify-content-between">
                <div class="mob-heading-text">Shopping Options</div>
                <div class="mob-heading-close-btn"><i class="far fa-window-close"></i></div>
            </div>
          </div>
        
          <div id="accordion">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0" data-toggle="collapse" data-target="#Brands">
                  Brands
                </h5>
              </div>              
              <div id="Brands" class="collapse show">
                <div class="card-body">
                  <ul>
                    <li><a href="#">PUMA</a></li>
                    <li><a href="#">GUCCI</a></li>
                    <li><a href="#">CHANEL</a></li>
                    <li><a href="#">TOMY HILFIGER</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0" data-toggle="collapse" data-target="#Color">
                  Color
                </h5>
              </div>              
              <div id="Color" class="collapse">
                <div class="card-body">
                  <ul>
                    <li><a href="#">White<span class="filter-qty">2</span></a></li>
                    <li><a href="#">Red<span class="filter-qty">3</span></a></li>
                    <li><a href="#">Green<span class="filter-qty">5</span></a></li>
                    <li><a href="#">Blue<span class="filter-qty">4</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0" data-toggle="collapse" data-target="#Price">
                    Price
                </h5>
              </div>              
              <div id="Price" class="collapse">
                <div class="card-body">
                  <ul>
                    <li><a href="#">$0.00 - $99.99<span class="filter-qty">2</span></a></li>
                    <li><a href="#">$100.00 - $199.99<span class="filter-qty">3</span></a></li>
                    <li><a href="#">$200.00 and above<span class="filter-qty">5</span></a></li>
                  </ul>
                </div>
              </div>
            </div>                  
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0" data-toggle="collapse" data-target="#Size">
                    Size
                </h5>
              </div>              
              <div id="Size" class="collapse">
                <div class="card-body">
                  <ul>
                    <li><a href="#">M<span class="filter-qty">2</span></a></li>
                    <li><a href="#">L<span class="filter-qty">3</span></a></li>
                    <li><a href="#">XL<span class="filter-qty">5</span></a></li>
                  </ul>
                </div>
              </div>
            </div>                  
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="sorting-bar">
          <div class="sortby-left">
            Sort By
            <select class="sorter-options">
                <option value="position" selected="selected">Position</option>
                <option value="name">Product Name</option>
                <option value="price">Price</option>
                <option value="brand">Brand</option>
            </select>
            <a href="#"><i class="fa fas fa-arrow-up"></i></a>
          </div>
          <div class="sortby-out">
            Show
            <select class="sorter-options">
                <option value="12" selected="selected">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
            </select>
          </div>
        </div>

        <div class="product-listing">
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
          <div class="product-info">
              <div class="product-image">
                <a href="#"><img src="images/tshirt1.jpg" class="img-fluid"/></a>
              </div>
              <div class="star-rating-bg">
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="product-title"><a href="#">White T-Shirt</a></div>
              <div class="product-price">$98.00</div>
              <div class="add-wishlist-out">
                <div class="add-to-cart-outer">
                    <a href="#" class="add-to-cart-btn"><i class="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                </div>
                <div class="wishlist-out">
                    <a href="#" class="wishlist-icon"><i class="fa fa-solid fa-heart"></i></a>
                    <a href="#" class="compare-icon"><i class="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-pagination-wrapper mb-5">
      <div class="sortby-out mx-2">
        Show
        <select class="sorter-options">
            <option value="12" selected="selected">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
        </select>
      </div>
      <div>
        <nav class="pagination-nav">
          <ul class="pagination pagination-sm">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span>&laquo;</span>
              </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>

    
   






















  
    </div>
  )
}
