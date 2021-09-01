import React from 'react'

function MensajeError({ text }) {
    return (
        <div className="alert alert-danger font-italic" role="alert">
            {text}
        </div>
    )
}

export default MensajeError