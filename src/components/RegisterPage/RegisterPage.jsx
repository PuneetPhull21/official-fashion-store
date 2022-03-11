import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {RegisteAction} from '../../_actions';
import {useDispatch,useSelector} from 'react-redux';
function RegisterPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state.alert);
  console.log(selector);
  const initialState = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: '',
  }
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email Format').required("Email is required"),
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is Required'),
    password: Yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmpassword: Yup.string().required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  return (
    <div>
      <div className='container'  style={{fontFamily:'cursive'}} >
     { selector.type ==="alert-success" ? <div class="bg-success p-2 text-white bg-opacity-75">{selector.message}</div> : ""}
  {selector.type==="alert-failure" ?   <div class="bg-danger p-2 text-white bg-opacity-75 "  >{selector.message}</div> :'' }
      </div>
  <Formik initialValues={initialState} validationSchema={RegisterSchema} onSubmit={(values) => { dispatch(RegisteAction.REGISTERREQUEST(values))  }} >    
    {({ touched, errors, values }) => (
        <Form>
          <div className='container' >
          <div className='card'>
            <div  className='card-body'>
              <strong>Personal Information</strong>
            </div>
            <div  className="form-row row">
              <div  className="form-group col-6">
                <label>First Name<span style={{ color: 'red' }} >*</span> </label>
                <Field
                  name="firstname"
                  type="text"
                  id="firstname"
                  values={values.firstname}
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
              <div className="form-group col-6">
                <label>Email<span style={{ color: 'red' }} >*</span> </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  values={values.firstname}
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
              <div className="form-row row">
                <div className="form-group col-6">
                  <label>Last Name<span style={{ color: 'red' }} >*</span> </label>
                  <Field
                    name="lastname"
                    type="text"
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
                <div className="form-group col-6">
                  <label>Password<span style={{ color: 'red' }} >*</span> </label>
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
                <div className="form-group col-6">
                  <label>Confirm Password<span style={{ color: 'red' }} >*</span> </label>
                  <Field
                    name="confirmpassword"
                    type="confirmpassword"
                    id="confirmpassword"
                    values={values.confirmpassword}
                    className={
                      "form-control" +
                      (errors.confirmpassword && touched.confirmpassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="confirmpassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <div>
              <button type='submit' className='btn btn-dark'>Create an Account</button>
              </div>
            </div>
            
          </div>
          </div>
        </Form>
      )}
    </Formik>
    </div>
    
  )
}

export { RegisterPage };