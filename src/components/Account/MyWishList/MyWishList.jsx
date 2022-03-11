import React,{useEffect,useState} from 'react'
import {product} from '../../../_services';
import {wishlistActions} from '../../../_actions' 
import {useDispatch } from 'react-redux';
import {CartActions} from '../../../_actions';
export default function MyWishList() {
  const dispatch = useDispatch();
const [value,setvalue] = useState([])
    useEffect(()=>{
      GetWishList();
    },[])
    async function GetWishList(){
      const user = localStorage.getItem('user');
      const {userdetails} = JSON.parse(user);
      const {id} = JSON.parse(userdetails);
      const result = await product.GetWishList(id);
      setvalue(result.data)
     console.log(result);
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
    const RemoveWishList = (wishList_item_id)=>{
      dispatch(wishlistActions.RemoveToWishListRequest(wishList_item_id));
    }
  return (
    <div>
    {value.length > 0 ?
    <div className='container'>
      {value.map((item,index)=>(
    <div key={index}  className='row'>
                <div className='col-4' ></div>
                <div className='col-8'>
                    <div className='col'>
                      <img src={item.img_src} alt="img" /> 
                      </div>
                    <div className='col-12'>{item.name}</div><br/>
                    <div className='col-12'>${item.price}</div><br/>
                    <div className='col-12'> QTY : <input type='number' min="1" defaultValue={item.qty} /></div><br/>
                    <div className='row'>
                        <div className='col-2'>
                          <input className='w-100' placeholder='comment' type='text' /></div>
                        <div className='col-2'>
                          <button className='btn btn-dark' onClick={()=>{
                            AddToCart(item.sku)
                          }} >Add to cart</button></div>
                    </div><br/><br/>   
                     <div className='row'>
                        <div className='col-2'>
                          <button className='btn btn-dark'  >Edit</button>
                          </div>
                        <div className='col-2'><button className='btn btn-dark' onClick={()=>{RemoveWishList(item.wishlist_item_id)}} >Remove</button></div>
                    </div>

                </div>


      
            </div>
      ))}      
    </div>
      :''}
      </div>
  )
}
