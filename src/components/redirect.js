import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuperAdminPage from './SuperAdminPage/SuperAdminPage';
import AdminPage from './AdminPage/AdminPage';
import ManagerPage from './ManagerPage/ManagerPage';
import UserPage from './UserPage/UserPage';


function Redirect({role}) {
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;


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

export default Redirect;
