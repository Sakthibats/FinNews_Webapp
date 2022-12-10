import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Card, Alert } from 'react-bootstrap'



function Profile() {
    const {currentUser} = useAuth()
    const dpName = useRef()
    const [error, setError] = useState('')
    const [edit, setEdit] = useState(false)
    const {resetname} = useAuth()

    function canceledit(){
        setEdit(false)
        dpName.current.value = currentUser.displayName
    }
    
    async function handleEdit(e){
        e.preventDefault()
        setError('')
        console.log(currentUser.displayName, dpName.current.value)
        if (currentUser.displayName===dpName.current.value || dpName.current.value.replace(/\s/g, "")===''){
            return setError("No changes observed or invalid input")
        }
        try{
            await resetname(dpName.current.value)
            setEdit(false)
        }catch (error){
          setError(`Failed to Login: ${error.toString().split(':').pop()}`)
        }
      }

    return (
        <>
        <h1 className="display-5 text-center text-md-start">Hello there <span className='thematify'>{currentUser.displayName || currentUser.email}!</span></h1>
        <Card>
            <Card.Body>
            <h3>Profile</h3>
            {error && <Alert variant='danger'>{error}</Alert>}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={currentUser.email} disabled></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Profile Name</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" defaultValue={currentUser.displayName} ref={dpName} maxLength={16} disabled={!edit}></input>
            </div>
            {edit?
            <div className='d-flex justify-content-evenly'>
                <div className='w-25 btn btn-outline-primary' onClick={handleEdit}>Save Edits</div>
                <div className='w-25 btn btn-outline-danger googlebtn' onClick={()=>canceledit()}>Cancel Edits</div>
            </div>:
            <div className='w-100 btn btn-outline-primary' onClick={()=>setEdit(true)}>Edit</div>}
            </Card.Body>
        </Card>
        </>
    )
}

export default Profile