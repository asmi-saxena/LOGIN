import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuperAdminPage from './components/SuperAdminPage/SuperAdminPage';
import AdminPage from './components/AdminPage/AdminPage';
import ManagerPage from './components/ManagerPage/ManagerPage';
import UserPage from './components/UserPage/UserPage';

function Home(name) {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3000/')
        .then(res => {
        if (res.data.valid) {
          setRole(res.data.role); // Update this to use the role from the response
        } else {
          navigate('/LoginPage'); // Correct path to navigate
        }
    })
    .catch(err => console.log(err));
    }, [navigate]);

    return (
    <div>
        <h2>Role Based Authorization</h2>
        { role === 'super-admin' && <SuperAdminPage />} 
        {role === 'admin' && <AdminPage />}
        {role === 'manager' && <ManagerPage />}
        {role === 'user' && <UserPage />} 
    </div>
    );
}

export default Home;
