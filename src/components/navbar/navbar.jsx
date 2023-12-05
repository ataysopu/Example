import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../MyButton";

const Navbar = () => {
    const navigate = useNavigate()
    const handleExitClick = () => {
        localStorage.removeItem('isAuth')
        navigate('/signin')

    }
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
                <MyButton onClick={handleExitClick}>выйти</MyButton>
            </div>
        </div>
    );
};

export default Navbar;