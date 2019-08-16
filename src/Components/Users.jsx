import React, { useState, useEffect } from 'react';
import User from './User'

const Users = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <main className="container">
                {users.map(user => {
                    return (
                        <User key={user.id} user={user} />
                    )
                })}
            </main>
        </>
    )

}

export default Users;