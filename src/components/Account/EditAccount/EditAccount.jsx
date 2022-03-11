import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { userService } from '../../../_services';
import * as Yup from 'yup';
function EditAccount(props) {
    const initialState = {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        streetaddress: '',
        company: '',
        phonenumber: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
    }
    const EditSchema = Yup.object().shape({
         email : Yup.string().email().required() ,
         firstname:Yup.string().required('First Name is required'),
         lastname:Yup.string().required('Last Name is required')
     })
     const AddressSchema = Yup.object().shape({
        email:Yup.string().email('Invalid Email format').required('Email is required'),
        firstname:Yup.string().required('First Name is required'),
        lastname:Yup.string().required('Last Name is required'),
        city:Yup.string().required('City is Required'),
        pincode:Yup.number().required('Pin Code is required'),
        state:Yup.string().required('State is required'),
        country:Yup.string().required('Country is Required'),
        phonenumber:Yup.number().required('Phone number is required'),            
     })

     function  onreload (){
        if(props[0].location.pathname === '/account/edit'){
          return EditSchema;
        }
        if(props[0].location.pathname==='/account/address/edit'){
            return AddressSchema;
        }
    }
     const Validation =  onreload(); 
    console.log(props);
    const [field, setfield] = useState({
        emailchange: false,
        passwordchange: false
    })
    const onChangeEmailChecked = (e) => {
        setfield({ ...field, emailchange: e.target.checked });
    }
    const onChangePasswordChecked = (e) => {
        setfield({ ...field, passwordchange: e.target.checked });
    }
    useEffect(async () => {
        const result = await userService.userDetails();
        console.log(result.data);
    },[])   
    return (
        <div>
            <Formik initialValues={initialState}  validationSchema={Validation}   >
                {({ touched, errors, values ,setFieldValue}) => (
                    <Form>
                        <div className='container'>
                            <div className="card">
                                <div className="card-body">

                                    <div style={{ width: '40%' }} className="form-row row">
                                        {props[0].location.pathname !== "/account/newsletter/manage/edit" ? <div className="form-group col-6">
                                            <label>First Name<span style={{ color: 'red' }} >*</span> </label>
                                            <Field
                                                name="firstname"
                                                type="firstname"
                                                id="firstname"
                                                values={values.email}
                                                className={
                                                    "form-control" +
                                                    (errors.firstname && touched.firstname
                                                        ? " is-invalid"
                                                        : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="firstname"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                            : ""}
                                        {field.emailchange === true ? <div className="form-group col-6">
                                            <label>Email<span style={{ color: 'red' }} >*</span>  </label>
                                            <Field
                                                name="email"
                                                type="email"
                                                id="email"
                                                values={values.email}
                                                className={
                                                    "form-control" +
                                                    (errors.email && touched.email
                                                        ? " is-invalid"
                                                        : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                        </div> : ""}
                                        {props[0].location.pathname === "/account/address/edit" ? <div>
                                            <div className="form-group col-6">
                                                <label>Street Address <span style={{ color: 'red' }} >*</span>  </label>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    id="email"
                                                    values={values.email}
                                                    className={
                                                        "form-control" +
                                                        (errors.email && touched.email
                                                            ? " is-invalid"
                                                            : "")
                                                    }
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="invalid-feedback"
                                                />
                                            </div>
                                        </div>
                                            : ''}
                                        <br></br>
                                        <br></br>
                                        <div className="form-row row">
                                            {props[0].location.pathname !== "/account/newsletter/manage/edit" ? <div className="form-group col-6">
                                                <label>Last Name<span style={{ color: 'red' }} >*</span>  </label>
                                                <Field
                                                    name="lastname"
                                                    type="lastname"
                                                    id="lastname"
                                                    values={values.lastname}
                                                    className={
                                                        "form-control" +
                                                        (errors.lastname && touched.lastname
                                                            ? " is-invalid"
                                                            : "")
                                                    }
                                                />
                                                <ErrorMessage
                                                    name="lastname"
                                                    component="div"
                                                    className="invalid-feedback"
                                                />
                                            </div>
                                                : ""}
                                            {field.passwordchange === true ? <div className="form-group col-6">
                                                <label>Password<span style={{ color: 'red' }} >*</span>  </label>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    id="password"
                                                    values={values.password}
                                                    className={
                                                        "form-control" +
                                                        (errors.password && touched.password
                                                            ? " is-invalid"
                                                            : "")
                                                    }
                                                />
                                                <ErrorMessage
                                                    name="password"
                                                    component="div"
                                                    className="invalid-feedback"
                                                />
                                            </div>


                                                : ''}
                                        </div>

                                        {props[0].location.pathname === "/account/address/edit" ? <div>
                                            <div className="form-row row">
                                                <div className="form-group col-6">
                                                    <label>Company<span style={{ color: 'red' }} >*</span>  </label>
                                                    <Field
                                                        name="company"
                                                        type="company"
                                                        id="company"
                                                        values={values.company}
                                                        className={
                                                            "form-control" +
                                                            (errors.company && touched.company
                                                                ? " is-invalid"
                                                                : "")
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="company"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label>City<span style={{ color: 'red' }} >*</span>  </label>
                                                    <Field
                                                        name="city"
                                                        type="city"
                                                        id="city"
                                                        values={values.city}
                                                        className={
                                                            "form-control" +
                                                            (errors.city && touched.city
                                                                ? " is-invalid"
                                                                : "")
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="city"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group col-6">
                                                    <label>Phone Number<span style={{ color: 'red' }} >*</span>  </label>
                                                    <Field
                                                        name="phonenumber"
                                                        type="text"
                                                        id="phonenumber"
                                                        values={values.phonenumber}
                                                        className={
                                                            "form-control" +
                                                            (errors.phonenumber && touched.phonenumber
                                                                ? " is-invalid"
                                                                : "")
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="phonenumber"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label>State/Province <span style={{ color: 'red' }} >*</span>  </label>
                                                    <Field
                                                        name="state"
                                                        type="text"
                                                        id="state"
                                                        values={values.state}
                                                        className={
                                                            "form-control" +
                                                            (errors.state && touched.state
                                                                ? " is-invalid"
                                                                : "")
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="state"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group col-6">
                                                    <label>State/Province <span style={{ color: 'red' }} >*</span>  </label>
                                                    <Field
                                                        name="state"
                                                        type="text"
                                                        id="state"
                                                        values={values.state}
                                                        className={
                                                            "form-control" +
                                                            (errors.state && touched.state
                                                                ? " is-invalid"
                                                                : "")
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="state"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label>Zip /Postal Code <span style={{ color: 'red' }} >*</span>  </label>
                                                    <Field
                                                        name="pincode"
                                                        type="text"
                                                        id="pincode"
                                                        values={values.pincode}
                                                        className={
                                                            "form-control" +
                                                            (errors.pincode && touched.pincode
                                                                ? " is-invalid"
                                                                : "")
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="pincode"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label>Country<span style={{ color: 'red' }} >*</span>  </label>
                                                    <Field
                                                        name="country"
                                                        type="text"
                                                        id="country"
                                                        values={values.country}
                                                        className={
                                                            "form-control" +
                                                            (errors.country && touched.country
                                                                ? " is-invalid"
                                                                : "")
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="country"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                            : ""}
                                        {props[0].location.pathname === "/account/edit" ? <div>
                                            <div className="form-row row">
                                                <div className="form-group col-6">
                                                    <div class="form-check">
                                                        <input class="form-check-input" onChange={onChangeEmailChecked} type="checkbox" value="" id="defaultCheck1" />
                                                        <label class="form-check-label" htmlFor="defaultCheck1">
                                                            Change Email
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group col-6">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name='passwordchange' onChange={onChangePasswordChecked} value="" id="defaultCheck1" />
                                                        <label class="form-check-label" htmlFor="defaultCheck1">
                                                            Change Password
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            : ""}
                                    </div>
                                    {props[0].location.pathname === "/account/newsletter/manage/edit" ?
                                        <div>
                                            <div className='container'>
                                                <br>
                                                </br>
                                                <strong>SUBSCRIPTION OPTION</strong>
                                                <div className="form-row row">
                                                    <div className="form-group col-6">
                                                        <div class="form-check">
                                                            <input class="form-check-input" onChange={onChangeEmailChecked} type="checkbox" value="" id="defaultCheck1" />
                                                            <label class="form-check-label" htmlFor="defaultCheck1">
                                                                General Subscription
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''}
                                    <br></br>
                                    <button
                                        type="submit"
                                        className="btn btn-dark"
                                    >
                                        Save Changes
                                    </button>
                                    <br></br>
                                    <br></br>
                                    <p style={{ color: 'red' }} >* Required Fields</p>
                                </div>
                            </div>
                        </div>
                        
                    </Form>
)}
           </Formik>
        </div>
    )
}


export { EditAccount };