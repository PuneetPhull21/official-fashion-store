import React, { useEffect, useState } from 'react'
import { product } from '../../_services';

function FooterPage() {
  const [value,setvalue] = useState()
  useEffect(()=>{
  FooterApi();
  },[])
  async function FooterApi(){
    const result= await product.Homepage('footer');
  setvalue(result.data);
  }
  return (
    <div dangerouslySetInnerHTML={{ __html:value ? value.items[0].content : "" }} />
  )
}

export {FooterPage};