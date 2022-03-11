import React, { useEffect, useState } from 'react'
import { product } from '../../_services';
import {useDispatch} from 'react-redux';
import {CartActions} from '../../_actions';
import {Link} from 'react-router-dom';
export default function PlpPage(props) {
  const dispatch = useDispatch();
 const api = props.location.pathname.substring(10).replace(' ','-');
    const initialState = {
        PageSize:12,
        CurrentPage:1,  
    }
    const SortBy = {
      position:'',
      sort:''
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

  
   const [brand,setshow] = useState(false);
   const onHandleBrand = (e)=>{
     e.preventDefault();
     setshow(!brand);
   }

   const initialvalue = {
     name:'',
     value:''
   }
   
   const  [sidebarvalue,setsidebarvalue] = useState(initialvalue);
    const [state,setstate] = useState(initialState);
    const [sortby,setsortby] = useState(SortBy);
    const [ value,setvalue] = useState([]);
    const [sidebar,setsidebar] = useState([]);
    useEffect(()=>{
      reload();
    },[state.CurrentPage,state.PageSize,sortby,sidebarvalue])
    const onHandleShowItem =(e)=>{
      setstate({...state,PageSize:e.target.value});
    }
    const onClickHandleFilter = (name,value)=>{
      console.log(name,value)
      setsidebarvalue({...sidebarvalue,name:name,value:value})
    }
    const onhandleSort =(e)=> {
      console.log(e.target.value);
       setsortby({...sortby,sort:e.target.value})
    }
    async function reload(){
     const category_id = await product.GetCategory_Id(api);
      const result = await product.PlpPageApi(category_id.data.items[0].id,state.PageSize,state.CurrentPage,sortby,sidebarvalue)
      console.log(result);
      console.log(category_id);
     setvalue(result.data[0].data.products.items)
    // console.log(result.data[0].data.products.aggregations);
     setsidebar(result.data[0].data.products.aggregations);
    }
  return (
    <>
    {value.length  > 0 ?
    <>
    <section className="breadcrumb-section">
      <div className="custom-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">New Arrival</a></li>
          <li className="breadcrumb-item"><a href="#">Men</a></li>
          <li className="breadcrumb-item active">T-Shirts</li>
        </ol>
      </div>
    </section>
<section className="plp-content">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
          <div className="mobile-filter-btn">
            <i className="fas fa-filter"></i>
          </div>
        <div className="plp-filter">
          <div className="filter-heading-mobile">
            <div className="d-flex justify-content-between">
                <div className="mob-heading-text">Shopping Options</div>
                <div className="mob-heading-close-btn"><i className="far fa-window-close"></i></div>
            </div>
          </div>
          <div id="accordion">
          {sidebar.map((item,index)=>(
            <>
             { item.options.length > 0 ?  
           <div key={index} className="card">
              <div onClick={onHandleBrand} className="card-header">
                <h5 className="mb-0" data-toggle="collapse" data-target="#Brands">
                  {item.label}
                </h5>
              </div>              
              <div id="Brands" className={brand===true ? 'collapse show' : 'collapse'}>
                <div className="card-body">  
                  <ul>
                  {item.options.map((items,index)=>(
                    <li key={index} onClick={()=>{ onClickHandleFilter(item.attribute_code,items.value)}} ><a href="#">{items.label}  <span className="filter-qty">{items.count}</span> </a></li>
                    ))}  
                  </ul>
                </div>
              </div>
              </div>          
:''}
              </>    
            ))}
            </div>          
        </div> 
      </div>   
      <div className="col-md-9">
        <div className="sorting-bar">
          <div className="sortby-left">
            Sort By
            <select onChange={onhandleSort} className="sorter-options">
                <option value="" selected="selected">Position</option>
                <option value="name"  >Product Name</option>
                <option value="price" >Price</option>
            </select>
            <a href="#"><i className="fa fas fa-arrow-up"></i></a>
          </div>
          <div className="sortby-out">
            Show
            <select onChange={onHandleShowItem}  className="sorter-options">
                <option value="12" selected="selected" >12</option>
                <option value="24">24</option>
                <option value="36">36</option>
            </select>
          </div>
        </div>

        <div className="product-listing">
        {value.map((item,index)=>(  
          <div key={index} className="product-info">
              <div className="product-image">
                <Link to={`/product_details/${item.sku}`}><img src={item.image.url} className="img-fluid"/></Link>
              </div>
              <div className="star-rating-bg">
                <div className="star-rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
              <div className="product-title"><a href="#"></a></div>
              <div className="product-price">${item.name}</div>
              <div className="add-wishlist-out">
                <div className="add-to-cart-outer">
                    <button onClick={()=>{AddToCart(item.sku)}} className="add-to-cart-btn"><i className="fa fa-solid fa-cart-shopping"></i>Add to cart</button>
                </div>
                <div className="wishlist-out">
                    <a href="#" className="wishlist-icon"><i className="fa fa-solid fa-heart"></i></a>
                    <a href="#" className="compare-icon"><i className="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
        ))}
        </div>
       
      </div>
    </div>
    <div className="bottom-pagination-wrapper mb-5">
    <div className="sortby-out">
            Show
            <select onChange={onHandleShowItem}  className="sorter-options">
                <option value="12" selected="selected" >12</option>
                <option value="24">24</option>
                <option value="36">36</option>
            </select>
          </div>
      <div>
        <nav className="pagination-nav">
          <ul className="pagination pagination-sm">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span>&laquo;</span>
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>
</>
 :""}
    </>
  )
}


