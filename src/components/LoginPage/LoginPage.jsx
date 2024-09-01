import React, { useState } from 'react';
import './LoginPage.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';

export const LoginPage = ({setActiveview}) => {
    const [action, setAction] = useState("Login");
    const [view , setView ] = useState("")
    const navigate = useNavigate();
    const submitted = () => {
        console.log("submitted");
        setActiveview(view)
        navigate('/Redirect')
    }
    
    const handlesViewChange = (e) => {
        setView(e.target.value)
        console.log(e);
        
    }
    


    return (

        
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <select value={view} onChange={handlesViewChange} name='role'>
                    <option value="">None</option>
                        <option value="super-admin">Super Admin</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={submitted} >{action}</div>
            </div>
        </div>
    );
}
