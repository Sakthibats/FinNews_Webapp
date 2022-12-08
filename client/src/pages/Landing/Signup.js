import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

function Signup(props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const[loading, setLoading] = useState(false)
  
  async function handlesubmit(e){
    e.preventDefault()
    setError('')
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Password does not Match")
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      setSuccess("Account created successfully!")
    }catch (error){
      console.log()
      setError(`Failed to Create: ${error.toString().split(':').pop()}`)
    }
    setLoading(false)
  }
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {success && <Alert variant='success'>{success}</Alert>}
                <Form onSubmit={handlesubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                  </Form.Group>
                  <Button disabled={loading} className='w-100 text-center mt-3' type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          Already have an account? <span className='thematify' role="button" onClick={()=>props.wantslogin()}>Login</span>
        </div>
    </>
  )
}

export default Signup