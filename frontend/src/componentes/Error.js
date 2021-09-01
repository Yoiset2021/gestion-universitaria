import React from 'react'
import { Card } from 'react-bootstrap'

function Error() {
    return (
        <div className="d-flex justify-content-center py-3">
            <Card>
                <Card.Header>
                    <Card.Title>
                        <h3> !!! Ups algo salio mal </h3>
                    </Card.Title>
                </Card.Header>
            </Card>
        </div>
    )
}

export default Error