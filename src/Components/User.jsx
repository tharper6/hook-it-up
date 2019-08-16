import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    return (
        <>
            <section className="row justify-content-center">
                <div className="card col-md-8 text-center border border-dark bg-info text-white my-1 shadow">
                    <div className="card-body">
                        <h3>Name:</h3>
                        <p> {props.user.name} </p>
                        <h5>Username:</h5>
                        <p> {props.user.username} </p>
                        <h5>Email:</h5>
                        <p> {props.user.email} </p>
                    </div>
                </div>
            </section>
            <section className='row justify-content-center text-center'>
                <Link className='col-md-8 btn btn-primary' to={`/user/${props.user.id}`} >{`${props.user.name} Phone Number and Address`}</Link>
            </section>
        </>
    )
}

export default User;