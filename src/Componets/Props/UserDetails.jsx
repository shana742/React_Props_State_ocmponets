// UserDetails.js
import React from 'react';

function UserDetails(props) {
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default UserDetails;
