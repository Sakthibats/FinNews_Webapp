import React from 'react'

function Loader() {
    return (
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader