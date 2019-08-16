import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

    //set state
    const [users, setUsers] = useState([]);

    //fetched users
    const getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {users.map(user => {
                            return(
                                <li key={user.id} className='list-group-item'>{user.name} </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )


}

export default App;