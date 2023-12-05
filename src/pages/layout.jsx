import React, {useEffect} from 'react';
import Navbar from "../components/navbar/navbar";
import {Navigate, Outlet, useNavigate} from "react-router-dom";

const Layout = () => {
    const localStorageToken = localStorage.getItem('isAuth');
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorageToken) {
            navigate('/signin');
        }
    }, [localStorageToken, navigate]);

    return (
        <>
            <>
                <Navbar/>
                <Outlet/>
            </>
        </>
    )
};
export default Layout;