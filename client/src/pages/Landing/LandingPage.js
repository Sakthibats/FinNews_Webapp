import React, { useState } from 'react'
import ForgotPw from './ForgotPw'
import Login from './Login'
import Signup from './Signup'
import Welcome from './Welcome'


function LandingPage() {
  const [login, setlogin] = useState(false)
  const [register, setregister] = useState(false)
  const [forgotpw, setforgotpw] = useState(false)

  function wantslogin(){
    setlogin(true)
    setregister(false)
    setforgotpw(false)
  }
  function wantssignup(){
    setlogin(false)
    setregister(true)
    setforgotpw(false)

  }
  function resetpw(){
    setlogin(false)
    setregister(false)
    setforgotpw(true)
  }

  return (
    <>
        <div className="d-flex main rounded-3 mb-3">
        <section className="pt-4 pt-md-11">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2">
                <img src="illustration-2.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="..." data-aos="fade-up" data-aos-delay="100" />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">
                {(login||register ||forgotpw)?null:<Welcome setlogin={setlogin} setregister={setregister}/>}
                {login?<Login wantssignup={wantssignup} resetpw={resetpw} />:null}
                {forgotpw?<ForgotPw wantslogin={wantslogin} wantssignup={wantssignup}/>:null}
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