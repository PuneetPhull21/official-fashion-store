import React,{useEffect, useState} from 'react';
import {Card,Button} from 'react-bootstrap';
import { userService } from '../../../_services';

function MyAccount() {
    const [profile,setprofile] = useState();
    useEffect(async ()=>{
        const result = await userService.userDetails();
        console.log(result);
        setprofile(result.data);
        console.log(profile);
        },[])
        
  return (
    <div className='container' >
        <h4>My Account</h4>
        <br></br>
        <strong>Account Information</strong>
    { profile ?     
        <Card style={{width:'33rem'}} className="text-center">
        <Card.Header>Contact Information</Card.Header>
      <Card.Body>
   <Card.Text>{profile.firstname}  {profile.lastname}</Card.Text>
   <Card.Text>{profile.email}</Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"> <a href='/account/edit' className='btn btn-primary' > Edit </a></Card.Footer>
</Card>
:
""
}
<br></br>
<Card style={{width:'33rem'}} className="text-center">
<Card.Header>DEFAULT BILLING ADDRESS</Card.Header>
<Card.Body>
<Card.Text>You have not set a default billing address.</Card.Text>
</Card.Body>
<Card.Footer className="text-muted"> <a href='/account/address/edit' className='btn btn-primary' >Edit</a></Card.Footer>
</Card>

<br></br>
<Card style={{width:'33rem'}} className="text-center">
<Card.Header>DEFAULT SHIPPING ADDRESS</Card.Header>
<Card.Body>
<Card.Text>You have not set a default shipping address.</Card.Text>
</Card.Body>
<Card.Footer className="text-muted"><a href="/account/address/edit" className='btn btn-primary' > Edit Address </a> </Card.Footer>
</Card>

<br></br>
<Card style={{width:'33rem'}} className="text-center">
<Card.Header>NEWSLETTER</Card.Header>
<Card.Body>
<Card.Text>You aren't subscribed to our newsletter.</Card.Text>
</Card.Body>
<Card.Footer className="text-muted"><a href='/account/newsletter/manage/edit' className='btn btn-primary' >Edit </a></Card.Footer>
</Card>
    </div>
  )
}

export {MyAccount};