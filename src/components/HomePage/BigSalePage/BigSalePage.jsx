import React, { useEffect, useState }  from 'react';
import {product} from '../../../_services';

export default function BigSalePage() {
  const [value,setvalue] = useState();
  useEffect(()=>{
   BigSale();
  },[])
  async function BigSale(){
    const result = await product.Homepage("big_sale");
   setvalue(result.data);
  }
  return (
    <div dangerouslySetInnerHTML={{ __html:value ? value.items[0].content : "" }} />
  )
}
