import React, { use } from 'react';

const Users2 = ({usersPromis}) => {
    const users = use(usersPromis)

    console.log('users 2 suspense data load', users)
    return (
        <div>
            <h1>this is users data loader....</h1>
        </div>
    );
};

export default Users2;