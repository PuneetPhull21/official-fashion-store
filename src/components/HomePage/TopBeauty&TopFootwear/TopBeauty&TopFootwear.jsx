import React, { useEffect, useState } from 'react';
import {product} from '../../../_services';

function TopBeauty_TopFootwear(props) {
  const [value,setvalue] = useState();
  useEffect(()=>{
   TopBeauty();
  },[])
  async function TopBeauty(){
    const result = await product.Homepage('beauty_product');
    setvalue(result.data);
  }
  return (  
    
<div dangerouslySetInnerHTML={{ __html:value ? value.items[0].content : "" }} />
  )
}


export {TopBeauty_TopFootwear};