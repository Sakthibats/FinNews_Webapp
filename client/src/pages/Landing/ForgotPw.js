import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'


function ForgotPw(props) {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const[loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const {resetpw} = useAuth()

    async function handlesubmit(e){
        e.preventDefault()
        setError('')
        try{
          setError('')
          setMessage('')
          setLoading(true)
          await resetpw(emailRef.current.value)
          setMessage('Check your Email for further instructions')
        }catch (error){
          setError(`Failed to reset: ${error.toString().split(':').pop()}`)
        }
        setLoading(false)
      }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-2'>Login in</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handlesubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className='w-100 text-center mt-2 btn-outline-primary shadow' type='submit'>Send reset password email</Button>
                    <p style={{'textAlign':'right', 'margin':'6px', 'fontSize':'12px', 'color':'#006eff'}}><span role="button" onClick={()=>props.wantslogin()}> Login </span></p>

                    {/* <p style={{'textAlign':'right', 'margin':'6px', 'fontSize':'12px'}}><span onClick={()=>props.wantslogin()}> Login </span></p> */}
                    <hr/>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
            Don't have an account? <span className='thematify' role="button" onClick={()=>props.wantssignup()}>Sign Up</span>
            </div>
        </>
    )
}

export default ForgotPw