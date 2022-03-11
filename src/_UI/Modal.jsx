import React, { useState }  from 'react';
import {Modal,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Modals(props) {
    const [deleteshow,setdeleteshow] =  useState(false);
  return (
    <div>
        <Modal show={props.show} onHide={props.close} >
        <Modal.Header closeButton>
          <Modal.Title><p>SubTotal : </p>  <p>items in Cart </p></Modal.Title>
        </Modal.Header>
        <Button> Go to Check Out </Button>
        <Modal.Body   >
          <div style={{height:'230px', overflow:'scroll' }}>
           {props.value.map((item,index)=>(    
           <div  key={index}>
                <img  src='empty' alt='img'/>
                <p>{item.name}</p>
                <strong>${item.price}</strong>
                <br/>
              <span> <p> QTY : </p> <input min="1" type="number" defaultValue={item.qty}/></span>
              <Button variant="secondary" size="sm">
    Edit
    </Button>
    <Button variant="secondary" size="sm">
      Delete
    </Button>
    <br/>
              <hr/>
             </div>
             
           ))}
           <hr/>
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/checkout/cart" onClick={props.close} variant="primary" className='btn btn-primary' >
            View And Edit Cart
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
