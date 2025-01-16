import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../templates/authSlice';

export default function UserLogin() {

    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const submithandle = () => {
        // Simulating a login response with user details and a token
        const fakeUser = {
            name: 'John Doe',
            email: 'john.doe@example.com',
        };
        const fakeToken = '12345abcde';

        dispatch(login({ user: fakeUser, token: fakeToken }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };
    return (

        <div>
            {isAuthenticated?
            <div>
                <h3>Userlogin</h3>
                <p>Username: {user.name}</p>
                <p>Email: {user.email}</p>
                <button onClick={handleLogout}>logOut</button>
                
            </div>: 
            <div><p>User not login currently</p>
            <button onClick={submithandle}>Login</button>
            
            </div>
}
        </div>
    )
}
