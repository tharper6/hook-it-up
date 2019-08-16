import React, { useState, useEffect } from 'react';
import UserPhone from './UserPhone';
// import UserPhone from './UserPhone';

const UserPhones = (props) => {


    const [userPhones, setUserPhones] = useState({});
    const [address, setAddress] = useState({})

    const getUserPhones = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`);
        const data = await res.json();
        setUserPhones(data);
        setAddress(data.address);
    }

    useEffect(() => {
        getUserPhones();
    }, [])

    return (
        <main className="container">
            <UserPhone userPhones={userPhones} address={address} />
        </main>
)

}

export default UserPhones;


//sha random