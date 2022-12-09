import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { FcGoogle } from "react-icons/fc";


function Signup(props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login, googlelogin} = useAuth()
  const [error, setError] = useState('')
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  async function handlesubmit(e){
    e.preventDefault()
    setError('')
    try{
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    }catch (error){
      setError(`Failed to Login: ${error.toString().split(':').pop()}`)
    }
    setLoading(false)
  }

  async function googllogin(e){
    e.preventDefault()
    setError('')
    try{
      setError('')
      setLoading(true)
      await googlelogin()
      navigate('/')
    }catch (error){
      setError(`Failed to Login: ${error.toString().split(':').pop()}`)
    }
    setLoading(false)
  }


  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Login in</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handlesubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                  </Form.Group>
                  <Button disabled={loading} className='w-100 text-center mt-3 btn-outline-primary' type='submit'>Login</Button>
                  <Button disabled={loading} className='w-100 text-center mt-3 btn-outline-primary' onClick={googllogin}> <FcGoogle /> Google login</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          Don't have an account? <span className='thematify' role="button" onClick={()=>props.wantssignup()}>Sign Up</span>
        </div>
    </>
  )
}

export default Signup