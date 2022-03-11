
import React, { useEffect, useState } from 'react';
import {Pagination} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {product as productactoin} from '../../../_services';
function HomePageCollections(props) {
  const initialValue = {
    pageSize:5,
    pageNumber:1,
    SortBy:'Position',
  }
  console.log(props);
  const [value,setvalue] = useState(initialValue);
  const [product,setproduct] = useState([]);
  
  const onChangePageSize = (e)=>{
    console.log(e.target.value);
    setvalue({...value,pageSize:parseInt(e.target.value)});
  }
  const onChangeSortBy = (e)=>{
    console.log(e.target.value);
    setvalue({...value,SortBy:e.target.value});
  }
    useEffect(async ()=>{
      const result =  await productactoin.ProductListApi(value.pageSize)
       setproduct(result.data.items);
    },[value.pageSize])
  return (
    <>
    <div className="breadcrumbs">
    <ul className="items">
                    <li className="item home">
                            <a href="/" title="Go to Home Page">
                    Home                </a>
                        </li>
                    <li className="item category3">
                            <strong>{props.match.path}</strong>
                        </li>
            </ul>
</div>
    <div className='container'>
  <span> Show </span>  <select className="form-select" onChange={onChangePageSize}>
  <option  selected >{initialValue.pageSize}</option>
  <option value="10">10</option>
  <option value="20">20</option>
</select>
<span> Sort By </span> 
 <select className="form-select" onChange={onChangeSortBy}>
  <option  selected >{initialValue.SortBy}</option>
  <option value="Brand">Brand</option>
  <option value="Productname">ProductName</option>
  <option value="Price">Price</option>
</select>
{ product.length > 0 ?
product.map((item,index)=>(

  <Card style={{width:'18rem'}} key={index} >
    <Card.Img variant="top" src={item.media_gallery_entries[0].file} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      <strong>Price</strong>
      <br></br>  
      {item.price}
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <button className='btn btn-dark' >Add Cart</button>
    </Card.Footer>
  </Card>
))
  :
  ""
}     
<Pagination >   
 <Pagination.Item  active >{1}</Pagination.Item>
 <Pagination.Item>{2}</Pagination.Item>
</Pagination>

    </div>
    </>
  )
}


export {HomePageCollections};