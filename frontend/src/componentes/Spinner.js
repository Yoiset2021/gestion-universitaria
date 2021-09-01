import React from 'react'
import { Spinner } from 'react-bootstrap'

function Spiner() {
    return (
        <div className="d-flex justify-content-center py-5">
            <Spinner animation="border" variant="primary" role="status" />
        </div>
    )
}

export default Spiner