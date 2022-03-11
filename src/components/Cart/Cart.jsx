import React, { useEffect, useState } from 'react'
import { GusetUserServices} from '../../_services'
import {CartActions} from '../../_actions';
import {useDispatch, useSelector} from 'react-redux';
export default function Cart() {
  const dispatch = useDispatch();
  
    const [value,setvalue] = useState([]);
    const [Quantity,setQuantity] = useState();
    const [update,setupdate] = useState([]);
    useEffect(()=>{
      GetCartItems();
    },[])
    async function GetCartItems(){
      const cart_id = JSON.parse(localStorage.getItem('cart_id'));
      const result = await GusetUserServices.CheckGuestItemsCart(cart_id.cart_id);
      console.log(result);
      setvalue(result.data);
      setupdate(result.data);
    }

    const onChangeQty = (e,index)=>{
      update[index].qty = e.target.value;
    }

    const UpdateProductInCart = () =>{
      const cart_id = JSON.parse(localStorage.getItem('cart_id'));
      console.log(update)
      console.log(cart_id);
    }
    const DeleteProductCart = async (item_id) =>{
      const cart_id = JSON.parse(localStorage.getItem('cart_id'));
      const quote_id = cart_id.id.id;
      console.log(item_id)
      const product_details = {item_id,quote_id};
      dispatch(CartActions.REMOVECARTREQUEST(product_details))
    }
  return (
    <div>
   
    <strong>
        Shopping Cart
    </strong>
    { value.length > 0 ?  
    <div className='container' >
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope='col'> Name </th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col" >Subtotal</th>
      <th scope='col' >Edit</th>
      <th scope='col' >Delete</th>
    </tr>
  </thead>
  <tbody>
  { value.map((item,index)=>{
   return (
   <tr key={index} >
      <th scope="row">{index + 1}</th>
      <td><img src={item.extension_attributes.image_url} alt='img' /></td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td><input type="number"  min="1" onChange={(e)=>{ onChangeQty(e,index)}}  defaultValue={item.qty}/></td>
      <td>${item.price * item.qty }</td>
      <td> <button className='btn btn-dark' > Update </button></td> 
    <td> <button className='btn btn-dark' onClick={()=>{ DeleteProductCart(item.item_id)}} >Delete</button> </td>
    </tr>
  )})}
    </tbody>
    </table>
    </div>
:""}
<br/>
<br/>
<button onClick={UpdateProductInCart} className='btn btn-dark'>  Update</button>
    <div className='container' >
     <strong>Summary</strong>
     <br/>
     <strong>Emstimate Shipping and Tax : </strong>
     <br/>
     <strong>Subtotal : </strong>
     <br/>
     <strong>Shipping (Falt Rate - Fixed)</strong>
     <br/>
     <strong>Order Total</strong>
     <br/>
     <button className='btn btn-dark' >Go to Checkout </button>
    </div>

    <br/>
    <br/>
    <br/>
    <input type="text" placeholder='Enter Discount Code' /> <button className='btn btn-dark' >Add Discount</button>
    <br/>
    <input type="text" placeholder='Enter Gift Card Code' /> <button className='btn btn-dark' >Add Gift Card</button>
    </div>
  )
}
