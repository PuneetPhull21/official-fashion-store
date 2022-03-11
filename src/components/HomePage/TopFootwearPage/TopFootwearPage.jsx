import React, {useEffect,useState} from 'react'
import {product} from '../../../_services';

export default function TopFootwearPage() {
  const [value,setvalue] = useState();
  useEffect(()=>{
   TopFootWear();
  },[])
  async function TopFootWear(){
    const result = await product.Homepage("top_footwear");
    console.log(result);
    setvalue(result.data);
  }
  return (
    <div dangerouslySetInnerHTML={{ __html:value ? value.items[0].content : "" }} />
  )
}
