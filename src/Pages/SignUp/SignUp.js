import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/online-shopping.jpg'

export default function SignUp() {
  return (
    <>


      <Row className='parent'>
        {/* right */}
        <Col className='right col-lg-6 col-md-12 col-12 p-0'>
          <img src={img} className='img-fluid' alt="000" />
          <div className='overlay'>
          </div>
        </Col>
        {/* left */}
        <Col className='left p-2 col-lg-6 col-md-12 col-12'>
          <div className='logo rounded-circle mx-4'>
            <img src="https://seeklogo.com/images/C/citymall-logo-B9F9982941-seeklogo.com.png" className=' img-fluid' alt="city mall logo " />
          </div>

          <div className='login d-flex flex-column justify-content-center align-items-center'>
            <div className='text'>
              <h2>Sign Up</h2>
              <p>City mall</p>
            </div>

            <form className='login-form p-1 d-flex flex-column '  >
              <div className='field my-2 d-flex justify-content-between align-items-center'>
                <label htmlFor="username" className='fs-3' >User name : </label>
                <input type='text' id='username' name='username' placeholder='EX: Abdo_1' />
              </div>

              <div className='field my-2 d-flex justify-content-between align-items-center'>
                <label htmlFor="username" className='fs-3' >Phone Number : </label>
                <input type='text' id='username' name='username' placeholder='EX: +201091532721' />
              </div>

              <div className='field my-2 d-flex justify-content-between align-items-center'>
                <label htmlFor="countery" className='fs-3' >Countery : </label>
                <select >
                  <option value="0" disabled selected>select your country</option>
                  <optgroup>
                    <option value="cairo">Cairo</option>
                    <option value="qalyubia">Qalyubia</option>
                    <option value="giza">Giza</option>
                  </optgroup>
                </select>
              </div>
              <div className='field my-2 d-flex justify-content-between align-items-center'>
                <label htmlFor="gender" className='fs-3' >Gender </label>
                <select >
                  <option value="0" disabled selected>select your Gender</option>
                  <optgroup>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label htmlFor="haveStore" className='fs-3 me-1'>If you Have a store ?</label>
                <label htmlFor="yes" className='mx-2'>Yes</label>
                <input type="radio" name="haveStore" value="yes" id="yes"/>
                <label htmlFor="no" className='mx-1'>No</label>
                <input type="radio" name="haveStore" value="no" id="no"/>

              </div>


              <div className='field my-2 d-flex justify-content-between align-items-center'>
                <label htmlFor="email" className='fs-3' >E-mail : </label>
                <input type='email' id='email' name='email' placeholder='EX: abc@example.com' />
              </div>
              <div className='field my-2 d-flex justify-content-between align-items-center'>
                <label htmlFor="pass" className='fs-3'>Pass : </label>
                <input type='password' id='pass' name='pass' placeholder='Adjb#01@ab#' />
              </div>
              <div className='field my-2 d-flex justify-content-between align-items-center'>
                <label htmlFor="passconfirm" className='fs-3'>Confirm pass : </label>
                <input type='password' id='passconfirm' name='passconfirm' placeholder='Adjb#01@ab#' />
              </div>

              <input type="submit" name="submit" value="Create New Account " className='btn btn-primary mx-auto align-self-center' />
            </form>
            <p>OR</p>
            <Link to={"/login"} className='text-decoration-none ' > Log In</Link>
          </div>
        </Col>
      </Row>

    </>
  )
}
