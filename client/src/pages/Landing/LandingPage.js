import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Welcome from './Welcome'


function LandingPage() {
  const [login, setlogin] = useState(false)
  const [register, setregister] = useState(false)

  function wantslogin(){
    setlogin(true)
    setregister(false)
  }
  function wantssignup(){
    setlogin(false)
    setregister(true)
  }

  return (
    <>
        <div className="d-flex main rounded-3 mb-3">
        <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="..." data-aos="fade-up" data-aos-delay="100" />
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">
              {(login||register)?null:<Welcome setlogin={setlogin} setregister={setregister}/>}
              {login?<Login wantssignup={wantssignup} />:null}
              {register?<Signup wantslogin={wantslogin} />:null}
            </div>
          </div>
        </div>
    </section>
        </div>
        
    </>
  )
}

export default LandingPage