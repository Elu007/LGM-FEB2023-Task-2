import React from 'react'

const Loading = ({show}) => {
    return (
        (show) ?
        <div className='d-flex justify-content-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> : ""
    )
}

export default Loading
