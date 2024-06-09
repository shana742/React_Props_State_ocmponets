// UserProfile.js
import React from 'react';
import UserDetails from './UserDetails';

function UserProfile() {
    const user = {
        name: 'Monk',
        email: 'Monk745@gmail.com',
        age: 80,
    };

    return (
        <div>
            <h1>User Profile</h1>
            <UserDetails name={user.name} email={user.email} age={user.age} />
        </div>
    );
}

export default UserProfile;
