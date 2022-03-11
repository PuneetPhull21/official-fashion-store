import React, {useEffect, useState } from 'react';
import {Carousel} from 'react-bootstrap';
import {product} from '../../../_services';

function BannerPage() {
  const [value,setvalue] = useState([]);
    useEffect(()=>{
      BannerApi();
    },[])
    async function BannerApi(){
      const result = await product.bannerApi();
      setvalue(result.data.banners);
    }
  return (
    <>
    { value.length > 0 || value.length !== undefined ? 
    <Carousel>
    
{ value.map((item,index) =>( 
<Carousel.Item key={index} interval={3000}>
    <img   
      className="d-block w-100"
      src={item.resource_path}
      alt={item.resource_path}
    />
  </Carousel.Item> 
))}         
</Carousel>
 :
 ""
}
</>
  )
}


export {BannerPage};