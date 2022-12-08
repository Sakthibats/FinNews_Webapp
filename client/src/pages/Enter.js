import React, { useState } from 'react'
import { Alert, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Enter() {
  const [error, setError] = useState('')
  const {currentUser,logout} = useAuth()
  const navigate = useNavigate()

  async function handleLogout(){
    setError('')
    try{
      await logout()
      navigate('/')
    }catch (error){
      setError(`Failed to Login: ${error.toString().split(':').pop()}`)
    }

  }
  return (
    <>
      <div className="d-flex main rounded-3 mb-3">
        <Card>
          <Card.Body>
            {error&& <Alert variant='warning'>{error}</Alert>}
            <h3>Profile</h3>
            <strong>Email: </strong> {currentUser.email}
          </Card.Body>
        </Card>
        <button className='btn btn-warning mt-3' onClick={handleLogout}> Log out</button>
      </div>
    </>
  )
}

export default Enter