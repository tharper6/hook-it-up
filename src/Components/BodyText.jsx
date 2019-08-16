import React from 'react';
import { Link } from 'react-router-dom';

const BodyText = (props) => {
    return (
        <>
        <section className="row justify-content-center">
            <div className="card col-md-8 text-center border border-dark bg-info text-white my-1 shadow">
                <div className="card-body">
                    <h3>Body:</h3>
                    <h5>{props.postBody.body}</h5>
                </div>
            </div>
        </section>
        <section className='row justify-content-center text-center'>
        <Link className='col-md-8 btn btn-primary' to={`/posts`} >Back to Posts</Link>
    </section>
    </>
    )
}

export default BodyText;