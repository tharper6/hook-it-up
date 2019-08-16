import React from 'react';
import { Link } from 'react-router-dom';

const UserPhone = (props) => {
    return (
        <>
            <section className="row justify-content-center">
                <div className="card col-md-8 text-center border border-dark bg-info text-white my-1 shadow">
                    <div className="card-body">
                        <h3>Telephone:</h3>
                        <h5>{props.userPhones.phone}</h5>
                        <h3>Address:</h3>
                        <h5> {`${props.address.street}, ${props.address.city} ${props.address.zipcode}`}  </h5>
                    </div>
                </div>
            </section>
            <section className='row justify-content-center text-center'>
                <Link className='col-md-8 btn btn-primary' to={`/users`} >Back to Users</Link>
            </section>
        </>
    )
}

export default UserPhone;