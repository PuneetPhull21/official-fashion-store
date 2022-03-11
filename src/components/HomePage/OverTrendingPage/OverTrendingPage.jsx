import React, { useEffect, useState }  from 'react';
import {product} from '../../../_services';
function OverTrendingPage() {
  const [value,setvalue] = useState();
 useEffect(()=>{
  HomePage();
 },[])
 async function HomePage(){
  const result = await product.Homepage("Our_Trending_categories");
  
  setvalue(result.data);
 }
  return (
    <div dangerouslySetInnerHTML={{ __html:value ? value.items[0].content : "" }} />
  )
}


export {OverTrendingPage};