import React from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { userActions as userAction } from '../../_actions';
import { useDispatch,useSelector } from 'react-redux';
import * as Yup from 'yup';
function Loginpage() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state.alert);
  const initialState = {
    username: '',
    password: '',
  };
  const LoginSchema = Yup.object().shape({
    username: Yup.string().email('Invalid Email address format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })
  return (
    <div>
      <div className='container'  style={{fontFamily:'cursive'}} >
     { selector.type === "alert-success" ? <div className="bg-success p-2 text-white bg-opacity-75">{selector.message}</div> : ""}
  {selector.type === "alert-failure" ?   <div className="bg-danger p-2 text-white bg-opacity-75 "  >{selector.message}</div> :'' }
      </div>
      <Formik initialValues={initialState} validationSchema={LoginSchema} onSubmit={(values) => {  dispatch(userAction.LOGINREQUEST(values))}} >
        {({ touched, errors, values}) => (
          <Form>
            <div className='container'>
            <div className="card">
              <div className="card-body">
                <strong>Registered Customers</strong>
                <br></br>
                <p>If you have an account, sign in with your email address.</p>
                <br></br>
                <div style={{ width: '40%' }} className="form-row row">
                  <div className="form-group col-6">
                    <label> Email<span style={{color:'red'}} >*</span> </label>
                    <Field
                      name="username"
                      type="username"
                      id="username"
                      values={values.email}
                      className={
                        "form-control" +
                        (errors.username && touched.username
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <div className="form-row row">
                    <div className="form-group col-6">
                      <label>Password <span style={{color:'red'}} >*</span>  </label>
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
                  </div>
                </div>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-dark"
                >
                  Sign In
                </button> <span><a href='/forgetpassword' > Forget Your Password</a></span>
                <br></br>
                <br></br>
                <p style={{color:'red'}} >* Required Fields</p>
              </div>
            </div>
            </div>
          </Form>
        )}
      </Formik>
     
                <div>
                <h6> New Customer</h6>
                <br>
                </br>
                <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                </div>
                <a className='btn btn-dark' href='/register' >New Account</a>
    </div>

  )
}



export { Loginpage };

