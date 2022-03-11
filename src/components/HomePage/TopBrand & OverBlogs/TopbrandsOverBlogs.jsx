import React, {useEffect,useState} from 'react'
import {product} from '../../../_services';

function TopbrandsOverBlogs(props) {
  const [value,setvalue] = useState();
  useEffect(()=>{
   TopBrands();
  },[])
  async function TopBrands(){
    const result = await product.Homepage("top_brand");
   setvalue(result.data);
  }
  return (
    <div dangerouslySetInnerHTML={{ __html:value ? value.items[0].content : "" }} />
  )
}


export {TopbrandsOverBlogs};