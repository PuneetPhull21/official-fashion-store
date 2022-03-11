import React, { useEffect, useState } from 'react';
import {product} from '../../../_services';
export default function BagKidsCollectionPage(props) {
    const [value,setvalue] = useState();
    useEffect(()=>{
      BagsKidsCollection()
    },[])
    async function BagsKidsCollection(){
      const result = await product.Homepage("Kids_Collection");
      setvalue(result.data);
    }
  return (
 
    <div dangerouslySetInnerHTML={{ __html:value ? value.items[0].content : "" }} />

  )
}
