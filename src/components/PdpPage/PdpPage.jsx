import React, { useEffect, useState } from 'react';
import { product } from '../../_services';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Notification } from '../../_UI/Notification';
import {useDispatch, useSelector} from 'react-redux';
import  {CartActions} from '../../_actions';
export default function PdpPage(props) {
const selector = useSelector((state)=> state.alert);
const dispatch = useDispatch();
  const [value, setvalue] = useState();
  const [quantity,setquantity]  = useState(1);
  useEffect(async () => {
    const result = await product.PDPApi(props.match.params.sku_name);
    setvalue(result.data);
    console.log(result);
    console.log(result.data);

  }, [])

  const AddToCart = async (sku) => {
    const user_id = localStorage.getItem('card_id');
    let product_details = {
      sku_name: sku,
      qty: quantity,
      quote_id: user_id
    }
     
    dispatch(CartActions.ADDCARTREQUEST(product_details))
  }

  const onChangeQuantity = (e)=>{
     setquantity(e.target.value)
  }
   
  const ReviewSchema = Yup.object().shape({
    Nickname:Yup.string().required(),
    Summary:Yup.string().required(),
    Review:Yup.string().required()
  })

  const initialState = {
    Nickname:'',
    Summary:'',
    Review:''
  }
  const onSubmitReview = ()=>{

  }
  const alertsSuccess = {
     type:'success',
     message:selector.message
  }

  return (
   
    <div className='container' >
       {selector.type === "alert-success" ? <Notification alerts={alertsSuccess}/> : '' }
      {value ?
        <div className='container'>

          <div className='row'>

            <div className='col-lg-6'><img src={value.media_gallery_entries[0].file} alt=""/></div>

            <div className='col-lg-6'>

              <div>{value.name}</div><br /><br />

              <div>${value.price}</div><br /><br />

             <div dangerouslySetInnerHTML={{ __html:value.custom_attributes[5].value ? value.custom_attributes[5].value : "description is  not found" }}/>
              <div>Availability {value.extension_attributes.stock_item.is_in_stock === true ? "In Stock" : "out of Stock"} </div>
              <div>SKU# : {value.sku}</div>
              <div><input type="number" defaultValue={1} onChange={onChangeQuantity} min="1" /> </div>
              <div><h5>More Information</h5><br /> Size: {value.custom_attributes[12].value ? value.custom_attributes[12].value : "backend sa aye ga "} <br /> Brands : {value.custom_attributes[16].value ? value.custom_attributes[16].value : "backend sa aye ga "}<br /> Color : {value.custom_attributes[4].value ? value.custom_attributes[4].value : "backend sa aye ga "} <br /> </div>

              <br /><br /><button className='btn btn-primary' onClick={()=>{AddToCart(value.sku)}} >Add to cart</button>

            </div>

          </div>

        </div>
        : <h5>This product is not </h5>}


    </div>
  )
}
