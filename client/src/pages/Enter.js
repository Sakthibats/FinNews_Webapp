import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Profile from './Profile/Profile'

function Enter() {
  const [error, setError] = useState('')
  const {logout} = useAuth()
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
        <section className="pt-4 pt-md-11">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2">
                <Profile />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">
                <img src="illustration-2.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="..." data-aos="fade-up" data-aos-delay="100" />
              </div>
            </div>
          </div>
        </section>
        {error && <Alert variant='warning'>{error}</Alert>}
        <button className='btn btn-warning mt-3' onClick={handleLogout}> Log out</button>
      </div>
    </>
  )
}

export default Enter