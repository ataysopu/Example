import React, {useEffect, useState} from 'react';
import MyInput from "../components/myInput";
import MyButton from "../components/MyButton";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    const localStorageToken = localStorage.getItem('isAuth');
    const handleSignIn = () => {
        localStorage.setItem('isAuth', 'true');
        setIsAuth(true);
        navigate('/posts'); // Перенаправляем на /posts после успешного входа
    };

    useEffect(() => {
            if (localStorageToken === 'true') {
                navigate('/signin');
            }

        }
        , [])

    return (
        <div>
            <h1>Страница для авторизации</h1>
            <form>
                <MyInput type='text' placeholder='Введите имя пользователя'/>
                <MyInput type='password' placeholder='Введите пароль'/>
                <MyButton onClick={handleSignIn}>Войти</MyButton>
            </form>
        </div>
    );
};

export default SignIn;