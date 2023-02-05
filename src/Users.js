import React from 'react'

const Users = ({ email, first_name, last_name, avatar }) => {
    return (
        <div className='d-flex justify-content-center m-3'>
            <div className="container d-flex justify-content-center">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={avatar} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h3 className="card-title">{first_name} {last_name}</h3>
                        <p className="card-text">Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
