import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function UserLogin() {

    const {isAuthenticated, user} = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [name ,setName] = useState('Lambha');
    const [email, setEmail] = useState('lambha@gmail.com');

    const submithandle = ()=>{
        if(name && email){
            dispatch({type: 'LOGIN', payload: {name, email}});
        }
    }
  return (
    <div>
        <h3>Userlogin</h3>
        <p>Username: {user.name}</p>
        <button onClick={submithandle}>Submit</button>
        
    </div>
  )
}
