import React, { use } from 'react';

const UserDetails2 = ({userPromis}) => {
    const {name, username} = use(userPromis)
    console.log('userDetails2', name,username)
    return (
        <div>
            <p><small>user Name: {username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;